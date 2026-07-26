import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Socials from "../layouts/Socials.jsx";

const NavMenu = ({ isOpen, setIsOpen, categories = [] }) => {
    return (
        <>
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
            />

            <aside
                className={`fixed top-0 left-0 w-70 h-full bg-amber-50 rounded-r-3xl shadow-2xl z-50 p-5 flex flex-col justify-between transition-transform duration-300 ease-in-out pointer-events-auto ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div>
                    <div className="flex items-center justify-between border-b border-amber-200/60">
                        <NavLink to="/" onClick={() => setIsOpen(false)}>
                            <img
                                src="/logo.png"
                                alt="Логотип Бушевилль"
                                className="h-20 object-contain w-19"
                            />
                        </NavLink>

                        <button
                            className="p-2 text-stone-700 bg-amber-100/80 hover:bg-amber-200/80 active:scale-95 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                            onClick={() => setIsOpen(false)}
                            aria-label="Закрыть меню"
                        >
                            <RxCross2 size="22px" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-1.5 mt-3">
                        {categories.map((category) => (
                            <NavLink
                                to={`/category/${category.tag}`}
                                key={category.id}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `px-4 py-2.5 rounded-2xl text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 uppercase ${
                                        isActive
                                            ? "bg-amber-200/80 text-amber-950 font-semibold shadow-xs"
                                            : "text-stone-700 hover:bg-amber-100/70 hover:text-stone-900"
                                    }`
                                }
                            >
                                {category.category}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div className="pt-4 border-t border-amber-200/60 flex justify-center">
                    <Socials color={"black"} />
                </div>
            </aside>
        </>
    );
};

export default NavMenu;
