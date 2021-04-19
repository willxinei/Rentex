import { Specificationrepository } from '@modules/cars/repositories/implementations/SpecificationRepository';
import { ListSpecificationController } from './ListSpecificationController';
import { ListspecificationUseCase } from './ListSpecificationUseCase';

const specificationRepository = Specificationrepository.getInstace();
const specificationUseCase = new ListspecificationUseCase(
    specificationRepository,
);
const specificationController = new ListSpecificationController(
    specificationUseCase,
);

export { specificationController };
