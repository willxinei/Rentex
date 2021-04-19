import { createCategoryControllr } from '@modules/useCases/createCategory';
import { importCategoryController } from '@modules/useCases/importCategory';
import { listCategoryController } from '@modules/useCases/listCategories';
import { Router } from 'express';
import multer from 'multer';

const categoryRoutes = Router();

const upload = multer({
    dest: './tmp',
});

categoryRoutes.post('/', (req, res) => {
    return createCategoryControllr.handle(req, res);
});

categoryRoutes.post('/uploads', upload.single('file'), (req, res) => {
    importCategoryController.handle(req, res);
});

categoryRoutes.get('/', (req, res) => {
    const all = listCategoryController.handle(req, res);

    return res.json(all);
});
export default categoryRoutes;
