import { sha256 } from "js-sha256";
import { ApiService, CustomCredentials } from "@/services/ApiService";
import { AxiosError, AxiosResponse } from "axios";

export interface ExpertToUpdate {
  id: number;
  email: string;
  phone: string;
  password: string | undefined;
  name: string;
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

  async login(request: CustomCredentials) {
    const res = await this.ApiService.post("auth", { ...request, fingerprint: fingerprint() });

    localStorage.setItem("loggedIn", JSON.stringify(true));
    this.ApiService.cookies.set("access_token", res.data.access_token, {
      secure: true,
      expires: new Date(res.data.expired_at)
    });

    return res.data;
  }

  async loginAdmin(request: CustomCredentials) {
    const res = await this.ApiService.post("auth/admins/login", { ...request, fingerprint: fingerprint() });

    localStorage.setItem("loggedIn", JSON.stringify(true));
    this.ApiService.cookies.set("access_token", res.data.access_token, {
      secure: true,
      expires: new Date(res.data.expired_at)
    });

    return res.data;
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

    this.refreshTokenState = this.refreshTokenState || this.ApiService.post(`auth/refresh`, data);

    const {
      data: { access_token, expired_at }
    } = await this.refreshTokenState;

    this.ApiService.cookies.set("access_token", access_token, { secure: true, expires: new Date(expired_at) });

    return data;
  }

  getAuthHeaders(): { Authorization: string } {
    const accessToken = this.ApiService.cookies.getAccessToken();
    return {
      Authorization: `Bearer ${accessToken}`
    };
  }
}
