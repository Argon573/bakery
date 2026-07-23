import CategoryCatalog from "../Catalog/Category/CategoryCatalog.jsx";
import About from "./About.jsx";
import FAQ from "./FAQ/FAQ.jsx";
import Container from "../layouts/Container.jsx";

const MainPage = () => {
    return (
        <div className="MainPage h-full w-full">
            <div
                className="w-full h-[60vh] lg:h-[70vh] bg-cover bg-center mb-10 lg:mb-16 relative"
                style={{ backgroundImage: "url('/cake.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20" />
                <img
                    src="/logo.png"
                    alt="логотип"
                    className="h-20 w-27 absolute left-1/2 -translate-x-1/2 top-6 z-10 lg:hidden"
                />
                <div className="hidden lg:flex absolute inset-0 items-end justify-center pb-16 z-10">
                    <div className="text-center px-6">
                        <h1 className="text-4xl xl:text-5xl font-bold text-white drop-shadow-lg tracking-tight">
                            Бушевилль
                        </h1>
                        <p className="mt-3 text-lg text-white/90 drop-shadow-md max-w-xl mx-auto">
                            Свежая выпечка, торты и кулинария с доставкой
                        </p>
                    </div>
                </div>
            </div>

            <Container className="flex flex-col items-center gap-6 lg:gap-10 mb-12 lg:mb-20">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-900 tracking-tight">
                    Каталог
                </h2>
                <CategoryCatalog />
            </Container>

            <About />
            <FAQ />
        </div>
    );
};

export default MainPage;
