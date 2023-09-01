import { ApiService } from "@/services/ApiService";
import { Category } from "@/types/data";
import {DefaultResponse} from "@/types/utils";

export class CategoriesService {
  constructor(private ApiService: ApiService) {}

  async getCategories() {
    const { data } = await this.ApiService.get<DefaultResponse<Category>>("/categories");
    return data;
  }

  async getMainCategories() {
    const { data } = await this.ApiService.get<{ results: Category[] }>("/categories/main");
    return data.results;
  }
}
