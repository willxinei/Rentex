import AppError from 'errors/AppError';
import { ISpecificationRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}
export class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const find = this.specificationRepository.findByName(name);

        if (find) {
            throw new AppError('ja existe');
        }
        const spefication = this.specificationRepository.create({
            name,
            description,
        });

        return spefication;
    }
}
