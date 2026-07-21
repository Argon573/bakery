import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import NavMenu from "./NavMenu";



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <header className="fixed z-1001 h-screen">
            {!isOpen && (<button
                className={`fixed top-6 left-6 z-40 p-3 text-2xl 
                        /* 1. Создаем круг и фон с эффектом стекла */
                        bg-white/80 rounded-full backdrop-blur-md
                        /* 2. Добавляем легкую тень для объема на светлом */
                        shadow-lg
                        /* 3. Убираем синюю обводку при клике и добавляем ховер */
                        outline-none focus:outline-none hover:bg-white transition-all duration-300
                        /* Анимация исчезновения */
                        ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                type="button"
                onClick={() => {setIsOpen(!isOpen)}}>
                <RxHamburgerMenu />
            </button>)}

            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
            />

            <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}

export default Header;