import { Category } from '../model/Category';

export interface ICreateCategoryDTO {
    name: string;
    description: string;
}

export interface ICategoriesRespository {
    create({ name, description }: ICreateCategoryDTO): void;
    findByName(name: string): Category | undefined;
    list(): Category[];
}
