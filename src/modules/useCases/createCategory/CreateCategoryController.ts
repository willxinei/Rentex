import { Request, Response } from 'express';
import { CreateCategorieUseCase } from './CreateCategoryUseCase';

export class CreateCategoriesController {
    constructor(private createCategorieUseCase: CreateCategorieUseCase) {}

    handle(req: Request, res: Response): Response {
        const { name, description } = req.body;

        const categorie = this.createCategorieUseCase.execute({
            name,
            description,
        });
        return res.status(201).json(categorie);
    }
}
