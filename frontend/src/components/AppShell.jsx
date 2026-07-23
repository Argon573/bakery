import Navigations from "./layouts/Navigations.jsx";
import Footer from "./layouts/Footer.jsx";
import { Outlet } from "react-router-dom";

const AppShell = () => {
    return (
        <div className="AppShell min-h-screen flex flex-col relative">
            <Navigations />
            <main className="w-full flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AppShell;
