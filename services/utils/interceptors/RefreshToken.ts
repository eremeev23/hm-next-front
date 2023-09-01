import { AuthService } from "@/services/AuthService";
import { CookiesClient } from "../CookiesClient";
import { ApiService } from "@/services/ApiService";


const cookiesClient = new CookiesClient();

const AUTH_ERRORS = [401, 403];
const DEFAULT_ERROR = 404;

export default (API: ApiService, AuthService: AuthService) => {
  API.onResponse(
    data => data,
    async (error, API) => {

      const statusCode = error?.response?.status ?? DEFAULT_ERROR;

      if(error?.response?.config?.url?.includes('refresh') && error?.response?.status == 500 ) {
        try {
          await AuthService.refreshToken();
          window.location.reload();
        }catch {
          goToLoginPage();
        }
      }

      if (AUTH_ERRORS.includes(statusCode)) {
        try {
          AuthService.getAuthHeaders();
        }catch {
          goToLoginPage();
        }
      }else {
        return Promise.reject(error);
      }

      if (error.request.responseURL !== process.env.APP_API_BASE_URL + "auth/refresh") {
        await AuthService.refreshToken();
        window.location.reload();
      } else {
        goToLoginPage();
      }
    }
  );
};

function goToLoginPage() {
  cookiesClient.removeAuthCookies();
  localStorage.removeItem('loggedIn');
  window.location.pathname = "/auth";
}
