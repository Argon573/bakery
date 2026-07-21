import CategoryCatalog from "../Catalog/Category/categoryCatalog.jsx"
import About from "./About.jsx"
import FAQ from './FAQ/FAQ.jsx'
import Footer from '../layouts/Footer.jsx'

const MainPage = () => {
    return (
        <div className="MainPage h-full w-full">
            <div
                className="w-full h-[60vh] bg-cover bg-center mb-14 relative"
                style={{ backgroundImage: "url('/cake.jpg')" }}
            >
                <img src='/logo.png' alt="логотип" className="h-20 w-27 absolute left-1/2 -translate-x-1/2 top-6" />
            </div>
            <div className="flex flex-col items-center gap-6 m-5">
                <h2 className="text-3xl">Каталог</h2>
                <CategoryCatalog />
            </div>
            <About />
            <FAQ />
            <Footer />
        </div>
    )
}

export default MainPage;