const apiLink = import.meta.env.VITE_API_LINK;

const link = `${apiLink}/faq`;

const getFaq = async () => {
    const result = await fetch(link)
    console.log(result);

    if (result.ok){
        return result.json();
    } else {
        throw new Error(`Ошибка сети: ${result.status}`);
    }
}

export default getFaq;