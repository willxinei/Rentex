import { Request, Response } from 'express';
import { ListspecificationUseCase } from './ListSpecificationUseCase';

export class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListspecificationUseCase) {}

    handle(req: Request, res: Response): Response {
        const specification = this.listSpecificationUseCase.execute();

        return res.status(201).json(specification);
    }
}
