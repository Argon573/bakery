import categoryData from "../Catalog/Category/category.data.js"
import {NavLink} from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Socials from '../layouts/Socials.jsx'

const NavMenu = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`nav-menu bg-amber-50 fixed top-0 left-0 w-[60vw] max-w-[320px] h-screen p-6 shadow-2xl z-50
            transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <button
                className="absolute top-10 left-10 z-50
                            bg-amber-100/70 rounded-full backdrop-blur-sm
                            shadow-lg
                            outline-none focus:outline-none hover:bg-white transition-all duration-300"
                onClick={() => {setIsOpen(false)}}>
                    <RxCross2 size="30px"/>
            </button>


            <div className="flex flex-col items-center ">
                <NavLink to="/" className="pb-20">
                    <img src='/logo.png' alt="логотип" className="h-20 w-27 object-contain" />
                </NavLink>
                <nav className="flex flex-col items-center justify-center gap-3.5 z-50">
                    {categoryData.map(category => (
                        <NavLink to={`/category/${category.tag}`} key={category.id} className="text-xl">{category.title}</NavLink>
                    ))}
                </nav>
            </div>
            <div className="w-full flex justify-center">
                <Socials color={"black"}/>
            </div>
        </div>
    )
}
export default NavMenu;