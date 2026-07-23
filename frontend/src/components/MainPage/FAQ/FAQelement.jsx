import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQelement = ({ question }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-amber-200/80 w-full transition-colors">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 lg:py-5 px-2 flex items-center justify-between text-left font-bold text-lg lg:text-xl text-stone-800 hover:text-amber-900 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-lg"
            >
                <span className="pr-4">{question.question}</span>

                <FiChevronDown
                    className={`text-xl shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-amber-800" : "text-stone-400"
                    }`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-4 lg:pb-5" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden text-stone-600 text-sm md:text-base lg:text-lg leading-relaxed whitespace-pre-line px-2">
                    {question.answer}
                </div>
            </div>
        </div>
    );
};

export default FAQelement;
