import { Router } from 'express';
import { CategoryRepository } from 'repositories/CategoryRepository';

const categoryRoutes = Router();

const categoriesRepository = new CategoryRepository();

categoryRoutes.post('/', (req, res) => {
    const { name, description } = req.body;

    const category = categoriesRepository.create({ name, description });

    return res.status(201).send(category);
});

categoryRoutes.get('/', (req, res) => {
    const all = categoriesRepository.list();

    return res.json(all);
});
export default categoryRoutes;
