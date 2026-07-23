import CatalogService from '../services/catalog.service.js'


const catalogService = new CatalogService();

class CatalogController {
    getCategories = async (req, res) => {
        try {
            const categories = await catalogService.getCategories();

            return res.status(200).json(categories);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: error.message,
            })
        }
    }

    getProductsFromCategory = async (req, res) => {
        try {
            const products = await catalogService.getCategoryFromTag(req.body.tag);

            return res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: error.message,
            })
        }
    }
}

export default CatalogController;