import { observable, action } from "mobx";
import categoryService from "../../services/category/categoryService";
import CategoryDto from "../../services/category/dto/categoryDto";

class CategoryStore {
  @observable categories: CategoryDto[] = [];

  @action
  async getAll() {
    let result = await categoryService.getCategories();
    this.categories = result;
    return result;
  }
}
export default CategoryStore;
