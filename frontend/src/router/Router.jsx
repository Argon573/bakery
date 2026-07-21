import { Routes, Route } from "react-router-dom";
import ProductCatalog from "../components/Catalog/ProductCatalog/ProductCatalog.jsx"
import MainPage from "../components/MainPage/MainPage.jsx";
import AppShell from "../components/AppShell.jsx"

const Router = () => {
    return (
        <Routes>
            <Route element={<AppShell />}>

                <Route path="/" element={<MainPage />} />

                <Route path="/category/:categoryTag" element={<ProductCatalog />} />
            </Route>
        </Routes>
    )
}

export default Router;