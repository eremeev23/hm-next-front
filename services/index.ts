// login utils
import RefreshTokenInterceptor from "@/services/utils/interceptors/RefreshToken";
import AccessTokenInterceptor from "@/services/utils/interceptors/SetAuthToken";
// import GlobalInterceptor from "@/services/utils/interceptors/GlobalErrorHandler";
// IMPORT every service here
import { ApiService } from "@/services/ApiService";
import { AuthService } from "@/services/AuthService";
import {ProductService} from "@/services/ProductService";
import {CategoriesService} from "@/services/CategoriesService";

// TYPE INTERFACE every service here
export interface AppServices {
  base: ApiService;
  product: ProductService;
  category: CategoriesService;
}

const ApiServiceClass = new ApiService();
const AuthServiceClass = new AuthService(ApiServiceClass);

RefreshTokenInterceptor(ApiServiceClass, AuthServiceClass);
AccessTokenInterceptor(ApiServiceClass, AuthServiceClass);
// GlobalInterceptor(ApiServiceClass);

/**
 * service_name: new NameService()
 */
const services: AppServices = {
  base: ApiServiceClass,
  product: new ProductService(ApiServiceClass),
  category: new CategoriesService(ApiServiceClass)
};

export default services;
