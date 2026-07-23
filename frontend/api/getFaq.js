

const link = 'http://localhost:3000/faq';

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