import prisma from '../../db.js'

const getFAQ = async () => {
    return prisma.faq.findMany();
}

export default getFAQ;