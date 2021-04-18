import { Specificationrepository } from '@modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '@modules/cars/service/CreateSpecificationService';
import { Router } from 'express';

const specificationRoute = Router();
const specificationRepository = new Specificationrepository();

specificationRoute.post('/', (req, res) => {
    const { name, description } = req.body;
    const specification = new CreateSpecificationService(
        specificationRepository,
    );

    const create = specification.execute({ name, description });

    return res.status(201).json(create);
});

export default specificationRoute;
