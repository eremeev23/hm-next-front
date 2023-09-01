import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { CookiesClient } from "./utils/CookiesClient";
import { toast } from "react-toastify";
import {DefaultResponse} from "@/types/utils";

export interface CustomCredentials {
  email: string;
  password: string;
  fingerprint: string;
}

export interface CustomRequestConfig extends AxiosRequestConfig {
  ignoreAuth?: boolean;
  retry?: boolean;
}

export class ApiService {
  API: AxiosInstance;
  cookies: CookiesClient;
  constructor(client?: AxiosInstance) {
    this.cookies = new CookiesClient();
    this.API =
      client ||
      axios.create({
        baseURL: process.env.BASE_URL,
        withCredentials: true
      });
    this.setInterceptors();
  }

  setInterceptors() {
    if (this.API.interceptors) {
      this.API.interceptors.response.use(undefined, err => {
        toast(err.response?.data?.errors
          ? (Object.values(err.response?.data?.errors)?.[0] as any)?.[0]
          : err.response?.data?.message || "Непредвиденная ошибка",);
        return Promise.reject(err);
      });
    }
  }

  async send<T>(param: object = {}): Promise<{ data: T, status: number, error: any }> {
    try {
      const { data } = await this.API(param);

      return {
        data,
        status: 200,
        error: null
      };
    } catch (error) {
      const preparedError = error instanceof AxiosError ? error?.response?.data : error;
      const preparedStatus = error instanceof AxiosError ? error?.response?.status || 500 : 500;

      return {
        data: {} as T,
        error: preparedError,
        status: preparedStatus
      };
    }
  }

  get<T>(url: string, params: object = {}, config = {}) {
    return this.send<T>({
      url,
      method: "get",
      params,
      ...config
    });
  }

  post<T>(url: string, data: unknown, config = {}) {
    return this.send<T>({
      url,
      method: "post",
      data,
      config
    });
  }

  put<T>(url: string, data: unknown) {
    return this.send<T>({
      url,
      method: "put",
      data
    });
  }

  patch<T>(url: string, data: unknown) {
    return this.send<T>({
      url,
      method: "patch",
      data
    });
  }

  delete<T>(url: string) {
    return this.send<T>({
      url,
      method: "delete"
    });
  }

  onRequest(
    success = (conf: CustomRequestConfig, service?: ApiService) => {},
    err = (e?: any, service?: ApiService) => {}
  ) {
    return this.API.interceptors.request.use(
      // @ts-ignore
      async conf => success(conf, this),
      async e => err(e, this)
    );
  }

  onResponse(
    success = (data?: any, service?: ApiService): any => {},
    err = (err: AxiosError, baseService: ApiService): any => {}
  ) {
    return this.API.interceptors.response.use(
      async conf => success(conf, this),
      async e => err(e, this)
    );
  }
}
