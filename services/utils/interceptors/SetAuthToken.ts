import { AuthService } from "@/services/AuthService";
import { ApiService } from "@/services/ApiService";
import { CustomRequestConfig } from "@/services/ApiService";

export default (API: ApiService, AuthService: AuthService) => {
  API.onRequest(
    (config: CustomRequestConfig) => {
      if (config.ignoreAuth) return config;
      return {
        ...config,
        headers: {
          'X-Country-Code': 'RU',
          ...config.headers,
          ...AuthService.getAuthHeaders()
        }
      };
    },

    error => Promise.reject(error)
  );
};
