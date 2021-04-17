import AppError from 'errors/AppError';
import { Router } from 'express';
import { CategoryRepository } from 'repositories/CategoryRepository';
import { CreateCategoryService } from 'service/CreateCategoryService';

const categoryRoutes = Router();

const categoriesRepository = new CategoryRepository();

categoryRoutes.post('/', (req, res) => {
    const { name, description } = req.body;
    const createService = new CreateCategoryService(categoriesRepository);

    const create = createService.execute({ name, description });

    return res.status(201).json(create);
});

categoryRoutes.get('/', (req, res) => {
    const all = categoriesRepository.list();

    return res.json(all);
});
export default categoryRoutes;
