import { Category } from '@modules/cars/model/Category';
import {
    ICategoriesRespository,
    ICreateCategoryDTO,
} from '../ICategoriesRepository';

export class CategoryRepository implements ICategoriesRespository {
    private categories: Category[];

    private static INSTACE: CategoryRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstace(): CategoryRepository {
        if (!CategoryRepository.INSTACE) {
            CategoryRepository.INSTACE = new CategoryRepository();
        }
        return CategoryRepository.INSTACE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category | undefined {
        const category = this.categories.find(h => h.name === name);

        return category;
    }
}
