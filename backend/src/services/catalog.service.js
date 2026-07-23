import prisma from '../../db.js'


class CatalogService {
    getCategories = async () => {
        return prisma.category.findMany();
    }

    getCategoryFromTag = async (tag) => {
        return prisma.category.findUnique({
            where: {tag: tag},
            include: {
                products: true,
            },
        })
    }
}

export default CatalogService;