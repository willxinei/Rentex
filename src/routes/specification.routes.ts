import { createSpecificationController } from '@modules/useCases/createSpecification';
import { specificationController } from '@modules/useCases/listSpecification';
import { Router } from 'express';

const specificationRoute = Router();

specificationRoute.post('/', (req, res) => {
    return createSpecificationController.handle(req, res);
});

specificationRoute.get('/', (req, res) => {
    const all = specificationController.handle(req, res);

    return res.json(all);
});

export default specificationRoute;
