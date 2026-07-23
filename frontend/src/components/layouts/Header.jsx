import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <NavLink
            to="/"
            className="header lg:hidden bg-amber-100 w-full h-[12vh] flex justify-center items-center rounded-b-2xl shadow-[0_6px_15px_-5px_rgba(0,0,0,0.15)] transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
        >
            <img src="/logo.png" alt="Logo" className="w-25 h-20" />
        </NavLink>
    );
};

export default Header;
