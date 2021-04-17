import { Router } from 'express';

const categoryRoutes = Router();

const categories = [];

categoryRoutes.post('/categories', (req, res) => {
    const { name, description } = req.body;

    categories.push({
        name,
        description,
    });

    return res.status(201).send();
});

export default categoryRoutes;
