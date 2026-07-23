import express from 'express';
import CatalogRouter from "./src/routers/catalog.router.js";
import cors from "cors";
import faqRouter from "./src/routers/faq.router.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors()); // TODO убрать, онли под разработку

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});

app.use('/catalog', CatalogRouter);

app.use('/faq', faqRouter);