import { CategoryRepository } from '@modules/cars/repositories/CategoryRepository';
import AppError from 'errors/AppError';

interface IRequest {
    name: string;
    description: string;
}
// const categoriesRepository = new CategoryRepository();

export class CreateCategorieUseCase {
    constructor(private categoriesRepository: CategoryRepository) {}

    execute({ description, name }: IRequest): void {
        const find = this.categoriesRepository.findByName(name);

        if (find) {
            throw new AppError('ja existe');
        }

        this.categoriesRepository.create({ description, name });
    }
}
