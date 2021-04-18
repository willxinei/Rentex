import { Router } from 'express';
import categoryRoutes from './categories.routes';
import specificationRoute from './specification.routes';

const Routes = Router();

Routes.use('/categories', categoryRoutes);
Routes.use('/specifications', specificationRoute);

export default Routes;
