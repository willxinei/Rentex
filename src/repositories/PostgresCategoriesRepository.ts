import { Category } from 'model/Category';
import {
    ICategoriesRespository,
    ICreateCategoryDTO,
} from './ICategoriesRepository';

export class PostgresCategoriesRepository implements ICategoriesRespository {
    findByName(name: string): Category | undefined {
        console.log(name);

        return null;
    }

    list(): Category[] {
        throw new Error('Method not implemented.');
    }

    create({ name, description }: ICreateCategoryDTO): void {
        throw new Error('Method not implemented.');
    }
}
