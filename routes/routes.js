import express, { Router } from 'express' ;
import { homeController } from '../controllers/homecontroller.js';


const routes = express.Router();

routes.get('/',homeController)

export default routes;