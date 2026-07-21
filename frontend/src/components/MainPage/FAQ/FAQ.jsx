import questions  from "./questions.data.js"
import FAQelement from "./FAQelement.jsx";


const FAQ = () => {
    return (
        <div className="flex flex-col items-center m-9">
            <h2 className="font-bold text-2xl mb-5">FAQ</h2>
            <div>
                {questions.map((question) =>
                        <FAQelement question={question} key={question.id} />
                    )}
            </div>
        </div>
    )
}

export default FAQ;