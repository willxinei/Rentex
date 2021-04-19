import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
    constructor(private listCategoryUseCate: ListCategoriesUseCase) {}

    handle(req: Request, res: Response): Response {
        const all = this.listCategoryUseCate.execute();

        return res.status(201).json(all);
    }
}
