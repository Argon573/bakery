import Header from "./layouts/Header.jsx"
import { Outlet } from 'react-router-dom';

const AppShell = () => {
    return (
        <div className="AppShell min-h-screen flex flex-col relative">
            <Header className="z-10"/>
            <div className="w-full flex-1">
                <Outlet />
            </div>
        </div>
    )
}

export default AppShell;