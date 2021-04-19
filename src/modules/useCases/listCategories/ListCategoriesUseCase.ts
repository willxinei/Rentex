import { Category } from '@modules/cars/model/Category';
import { ICategoriesRespository } from '@modules/cars/repositories/ICategoriesRepository';

export class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRespository) {}

    execute(): Category[] {
        const category = this.categoriesRepository.list();

        return category;
    }
}
