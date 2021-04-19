import { CategoryRepository } from '@modules/cars/repositories/CategoryRepository';
import { CreateCategoriesController } from './CreateCategoryController';
import { CreateCategorieUseCase } from './CreateCategoryUseCase';

const categoriesRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategorieUseCase(categoriesRepository);
const createCategoryControllr = new CreateCategoriesController(
    createCategoryUseCase,
);

export { createCategoryControllr };
