import { Specificationrepository } from '@modules/cars/repositories/implementations/SpecificationRepository';
import AppError from 'errors/AppError';

interface IRequest {
    name: string;
    description: string;
}
export class CreateSpecificationUseCase {
    constructor(private specificationRepository: Specificationrepository) {}

    execute({ name, description }: IRequest): void {
        const find = this.specificationRepository.findByName(name);

        if (find) {
            throw new AppError('ja existe');
        }
        this.specificationRepository.create({
            name,
            description,
        });
    }
}
