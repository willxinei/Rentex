import AppError from 'errors/AppError';
import { CategoryRepository } from '../repositories/CategoryRepository';

interface IRequest {
    name: string;
    description: string;
}
// const categoriesRepository = new CategoryRepository();

export class CreateCategoryService {
    constructor(private categoriesRepository: CategoryRepository) {}

    execute({ description, name }: IRequest): void {
        const find = this.categoriesRepository.findByName(name);

        if (find) {
            throw new AppError('ja existe');
        }

        this.categoriesRepository.create({ description, name });
    }
}
