import { useState} from "react";


const FAQelement = ({question}) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div key={question.id} className="border-t border-b border-black w-full flex flex-col items-center justify-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="font-bold h-13 text-xl mb-3 mt-3">
                {question.question}
            </button>
            <div className={`${isOpen ? "block h-auto" : "hidden h-0"} whitespace-pre-line mb-3`}>
                {question.answer}
            </div>
        </div>
    )
}

export default FAQelement;