import faqController from '../controllers/faq.controller.js'
import { Router } from 'express'

const faqRouter = new Router();

faqRouter.get('/', async (req, res) => {
    await faqController(req, res);
})

export default faqRouter;