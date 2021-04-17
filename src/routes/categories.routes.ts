import { Router } from 'express';
import { Category } from 'model/Category';

const categoryRoutes = Router();

const categories: Category[] = [];

categoryRoutes.post('/', (req, res) => {
    const { name, description } = req.body;

    const category = new Category();

    Object.assign(category, {
        name,
        description,
        created_at: new Date(),
    });

    categories.push(category);

    return res.status(201).send(category);
});

export default categoryRoutes;
