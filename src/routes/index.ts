import { Router } from 'express';
import Routes from './routes';

const Route = Router();

Route.use(Routes);

export default Route;
