import { CategoryRepository } from '@modules/cars/repositories/CategoryRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoryRepository = new CategoryRepository();
const listCategoryUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoryController = new ListCategoriesController(
    listCategoryUseCase,
);

export { listCategoryController };
