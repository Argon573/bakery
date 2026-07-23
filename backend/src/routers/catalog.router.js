import { Router } from 'express';
import CatalogController from '../controllers/catalog.controller.js'

const catalogRouter = new Router();
const catalogController = new CatalogController();

catalogRouter.get('/categories', async (req, res) => {
    await catalogController.getCategories(req, res);
})

catalogRouter.post('/products', async (req, res) => {
    await catalogController.getProductsFromCategory(req, res);
})

export default catalogRouter;