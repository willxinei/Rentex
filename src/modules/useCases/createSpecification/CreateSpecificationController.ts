import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationController {
    constructor(private createSpecification: CreateSpecificationUseCase) {}

    handle(req: Request, res: Response): Response {
        const { name, description } = req.body;

        const specification = this.createSpecification.execute({
            name,
            description,
        });

        return res.status(201).json(specification);
    }
}
