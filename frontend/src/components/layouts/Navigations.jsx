import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import NavMenu from "./NavMenu";

const Navigations = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
            <button
                className={`absolute top-6 left-6 z-50 p-3 text-2xl 
                bg-white/80 rounded-full backdrop-blur-md shadow-lg 
                outline-none focus:outline-none hover:bg-white pointer-events-auto
                transition-all duration-300 active:scale-95 cursor-pointer ${
                    isOpen ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"
                }`}
                type="button"
                onClick={() => setIsOpen(true)}
            >
                <RxHamburgerMenu className="text-gray-900" />
            </button>

            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
            />

            <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default Navigations;