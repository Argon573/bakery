import { useState, useEffect } from "react";
import FAQelement from "./FAQelement.jsx";
import getFaq from "../../../../api/getFaq.js";
import Container from "../../layouts/Container.jsx";

const FAQ = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getFaq()
            .then((data) => setQuestions(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="w-full py-8 lg:py-16 xl:py-20">
            <Container
                maxWidth="max-w-2xl lg:max-w-3xl xl:max-w-4xl"
                className="flex flex-col items-center"
            >
                <h2 className="font-bold text-2xl lg:text-4xl text-stone-900 mb-6 lg:mb-10 italic tracking-tight text-center">
                    Часто задаваемые вопросы
                </h2>

                <div className="w-full border-t border-amber-200/80">
                    {questions.map((question) => (
                        <FAQelement question={question} key={question.id} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FAQ;
