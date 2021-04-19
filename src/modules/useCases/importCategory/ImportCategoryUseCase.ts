import fs from 'fs';
import csvParse from 'csv-parse';
import { ICategoriesRespository } from '@modules/cars/repositories/ICategoriesRepository';

interface IIportCategory {
    name: string;
    description: string;
}
export class ImportCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRespository) {}

    loadCategories(file: Express.Multer.File): Promise<IIportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IIportCategory[] = [];

            const parse = csvParse();

            stream.pipe(parse);

            parse
                .on('data', async line => {
                    const [name, description] = line;

                    categories.push({
                        name,
                        description,
                    });
                })
                .on('end', () => {
                    resolve(categories);
                })
                .on('error', err => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(async h => {
            const { name, description } = h;
            const existCategory = this.categoryRepository.findByName(name);

            if (!existCategory) {
                this.categoryRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}
