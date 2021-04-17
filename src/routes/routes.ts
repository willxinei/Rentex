import { Router } from 'express';
import categoryRoutes from './categories.routes';

const Routes = Router();

Routes.use('/categories', categoryRoutes);

export default Routes;
