import { Specificationrepository } from '@modules/cars/repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = Specificationrepository.getInstace();
const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationRepository,
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase,
);

export { createSpecificationController };
