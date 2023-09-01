import { ApiService } from "@/services/ApiService";
import { Product } from "@/types/data";
import { DefaultResponse } from "@/types/utils";

interface RequestParams {
  limit?: number;
  categoryName?: string;
  page?: number;
}

export class ProductService {
  constructor(private ApiService: ApiService) {}

  async getProducts(params?: RequestParams): Promise<DefaultResponse<Product>> {
    const { data } = await this.ApiService.get<DefaultResponse<Product>>(`/products`, params);

    return data;
  }

  async getPopularProducts(): Promise<Product[]> {
    const { data } = await this.ApiService.get<Product[]>(`/products/popular`);
    return data;
  }
}
