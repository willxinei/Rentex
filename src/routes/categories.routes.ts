import { createCategoryControllr } from '@modules/useCases/createCategory';
import { listCategoryController } from '@modules/useCases/listCategories';
import { Router } from 'express';

const categoryRoutes = Router();

categoryRoutes.post('/', (req, res) => {
    return createCategoryControllr.handle(req, res);
});

categoryRoutes.get('/', (req, res) => {
    const all = listCategoryController.handle(req, res);

    return res.json(all);
});
export default categoryRoutes;
