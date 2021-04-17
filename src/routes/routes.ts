import { Router } from 'express';
import categoryRoutes from './categories.routes';

const Routes = Router();

Routes.use(categoryRoutes);

export default Routes;
