import { Specification } from '@modules/cars/model/Specification';
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from '../ISpecificationsRepository';

export class Specificationrepository implements ISpecificationRepository {
    private specifications: Specification[];

    private static INSTACE: Specificationrepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstace(): Specificationrepository {
        if (!Specificationrepository.INSTACE) {
            Specificationrepository.INSTACE = new Specificationrepository();
        }
        return Specificationrepository.INSTACE;
    }

    list(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification | undefined {
        const find = this.specifications.find(h => h.name === name);

        return find;
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }
}
