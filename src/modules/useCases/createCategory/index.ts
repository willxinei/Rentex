import { CategoryRepository } from '@modules/cars/repositories/implementations/CategoryRepository';
import { CreateCategoriesController } from './CreateCategoryController';
import { CreateCategorieUseCase } from './CreateCategoryUseCase';

const categoriesRepository = CategoryRepository.getInstace();
const createCategoryUseCase = new CreateCategorieUseCase(categoriesRepository);
const createCategoryControllr = new CreateCategoriesController(
    createCategoryUseCase,
);

export { createCategoryControllr };
