const apiLink = import.meta.env.VITE_API_LINK;

class Catalog{
    static async getCategories() {
        const link = `${apiLink}/catalog/categories`;
        const result = await fetch(link, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })

        if (result.ok) {
            return result.json();
        } else {
            throw new Error(`Ошибка сети: ${result.status}`);
        }
    }

    static async getCategoryFromTag(tag){
        const link = `${apiLink}/catalog/products`;
        const result = await fetch(link, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify({tag: tag}),
        })

        console.log(result);

        if (result.ok) {
            return result.json();
        } else {
            throw new Error(`Ошибка сети: ${result.status}`)
        }
    }
}
export default Catalog;