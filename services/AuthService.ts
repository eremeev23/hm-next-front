import { sha256 } from "js-sha256";
import { ApiService, CustomCredentials } from "@/services/ApiService";
import { AxiosError, AxiosResponse } from "axios";

interface TokenResponse {
  access_token: string;
  expired_at: string;
}

export function fingerprint() {
  return sha256(
    window.navigator.userAgent + window.navigator.language + window.navigator.languages + window.location.host
  );
}

export class AuthService {
  refreshTokenState: null | Promise<AxiosResponse>;

  constructor(private ApiService: ApiService) {
    this.refreshTokenState = null;
  }

  async login(request: CustomCredentials): Promise<false | TokenResponse> {
    try {
      const { data } = await this.ApiService.post<TokenResponse>("auth", {
        ...request,
        fingerprint: fingerprint(),
      });

      if (!data) return false;

      localStorage.setItem("loggedIn", JSON.stringify(true));

      this.ApiService.cookies.set("access_token", data.access_token, {
        secure: true,
        expires: new Date(data.expired_at)
      });

      return data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async logout() {
    this.ApiService.cookies.removeAuthCookies();
    localStorage.removeItem("loggedIn");
    window.location.hash = "/";
  }

  async refreshToken() {
    const data = {
      fingerprint: fingerprint(),
      ignoreAuth: true
    };

    if (!this.ApiService.cookies.get("refresh_token")) {
      throw AxiosError;
    }

    if (this.refreshTokenState) {
      this.refreshTokenState = this.refreshTokenState || this.ApiService.post(`auth/refresh`, data);

      const {
        data: { access_token, expired_at }
      } = await this.refreshTokenState;

      this.ApiService.cookies.set("access_token", access_token, { secure: true, expires: new Date(expired_at) });

      return data;
    }
  }

  getAuthHeaders(): { Authorization: string } {
    const accessToken = this.ApiService.cookies.getAccessToken();
    return {
      Authorization: `Bearer ${accessToken}`
    };
  }
}
