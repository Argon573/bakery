import { useState, useEffect } from "react";
import FAQelement from "./FAQelement.jsx";
import getFaq from '../../../../api/getFaq.js'

const FAQ = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getFaq()
            .then(data => setQuestions(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);


    return (
        <section className="w-full max-w-2xl mx-auto px-5 py-8 flex flex-col items-center">
            <h2 className="font-bold text-2xl text-stone-900 mb-6 italic">
                Часто задаваемые вопросы
            </h2>

            <div className="w-full border-t border-amber-200/80">
                {questions.map((question) => (
                    <FAQelement question={question} key={question.id} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;