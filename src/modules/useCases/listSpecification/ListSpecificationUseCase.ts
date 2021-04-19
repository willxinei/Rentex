import { Specification } from '@modules/cars/model/Specification';
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationsRepository';

export class ListspecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute(): Specification[] {
        const specification = this.specificationRepository.list();

        return specification;
    }
}
