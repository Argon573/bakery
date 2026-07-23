import getFAQ from "../services/faq.service.js";

const faqController = async (req, res) => {
    try {
        const faq = await getFAQ();

        return res.status(200).json(faq);
    } catch (err) {
        console.log(err);
    }
}

export default faqController;