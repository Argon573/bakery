import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
import Container from "./Container";
import Catalog from "../../../api/getCategories.js";
import Modal from "../Catalog/ProductCatalog/Modal.jsx";

const linkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 ${
        isActive
            ? "text-amber-950 bg-amber-200/70"
            : "text-stone-700 hover:text-stone-900 hover:bg-amber-100/80"
    }`;

const Navigations = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Catalog.getCategories()
            .then((data) => setCategories(data))
            .catch((error) => console.error("Ошибка загрузки категорий:", error));
    }, []);

    return (
        <>
            {/* Mobile: burger + drawer */}
            <div className="fixed top-0 left-0 w-full z-50 pointer-events-none lg:hidden">
                <button
                    className={`absolute top-6 left-6 z-50 p-3 text-2xl
                    bg-white/80 rounded-full backdrop-blur-md shadow-lg
                    outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
                    hover:bg-white pointer-events-auto
                    transition-all duration-300 active:scale-95 cursor-pointer ${
                        isOpen ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"
                    }`}
                    type="button"
                    aria-label="Открыть меню"
                    onClick={() => setIsOpen(true)}
                >
                    <RxHamburgerMenu className="text-gray-900" />
                </button>

                <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} categories={categories} />
            </div>

            {/* Desktop: horizontal header */}
            <header className="sticky top-0 z-50 hidden lg:block bg-amber-50/90 backdrop-blur-md border-b border-amber-200/50 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.12)]">
                <Container className="h-20 flex items-center justify-between gap-6">
                    <NavLink
                        to="/"
                        className="shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    >
                        <img
                            src="/logo.png"
                            alt="Бушевилль"
                            className="h-14 w-auto object-contain transition-opacity duration-200 hover:opacity-80"
                        />
                    </NavLink>

                    <nav className="flex flex-1 items-center justify-center gap-1 flex-wrap max-w-3xl uppercase">
                        {categories.map((category) => (
                            <NavLink
                                key={category.id}
                                to={`/category/${category.tag}`}
                                className={linkClass}
                            >
                                {category.category}
                            </NavLink>
                        ))}
                    </nav>

                    <button
                        type="button"
                        onClick={() => setIsOrderModalOpen(true)}
                        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-600 text-white text-sm font-semibold shadow-sm transition-all duration-200 hover:bg-amber-700 hover:shadow-md active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    >
                        Заказать
                    </button>
                </Container>
            </header>

            <Modal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
        </>
    );
};

export default Navigations;
