import { CategoryRepository } from '@modules/cars/repositories/implementations/CategoryRepository';
import { ImportCategoryController } from './ImportCategorycontroller';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoryRepository = CategoryRepository.getInstace();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(
    importCategoryUseCase,
);

export { importCategoryUseCase, importCategoryController };
