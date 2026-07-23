import Navigations from "./layouts/Navigations.jsx"
import Footer from './layouts/Footer.jsx'
import { Outlet } from 'react-router-dom';

const AppShell = () => {
    return (
        <div className="AppShell min-h-screen flex flex-col relative">
            <Navigations className="z-10"/>
            <div className="w-full flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default AppShell;