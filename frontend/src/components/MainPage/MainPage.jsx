import CategoryCatalog from "../Catalog/Category/CategoryCatalog.jsx";
import About from "./About.jsx";
import FAQ from "./FAQ/FAQ.jsx";
import Container from "../layouts/Container.jsx";

const MainPage = () => {
    return (
        <div className="MainPage h-full w-full">
            {/* Mobile: full-bleed hero */}
            <div
                className="w-full h-[60vh] bg-cover bg-center mb-10 relative lg:hidden"
                style={{ backgroundImage: "url('/cake.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20" />
                <img
                    src="/logo.png"
                    alt="логотип"
                    className="h-20 w-27 absolute left-1/2 -translate-x-1/2 top-6 z-10"
                />
            </div>

            {/* Desktop: catalog-width hero with rounded corners */}
            <Container className="hidden lg:block pt-8 xl:pt-10 mb-16 xl:mb-20">
                <div className="relative h-[58vh] xl:h-[62vh] overflow-hidden rounded-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] ring-1 ring-stone-900/5">
                    <img
                        src="/cake.jpg"
                        alt="Фирменный торт Бушевилль"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 z-10 px-10 xl:px-14 pb-10 xl:pb-12">
                        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                            Бушевилль
                        </h1>
                        <p className="mt-3 text-lg xl:text-xl text-white/90 max-w-xl leading-relaxed">
                            Свежая выпечка, торты и кулинария с доставкой
                        </p>
                        <a
                            href="#catalog"
                            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 text-white text-sm font-semibold shadow-lg shadow-amber-900/20 transition-all duration-200 hover:bg-amber-500 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                        >
                            Смотреть каталог
                        </a>
                    </div>
                </div>
            </Container>

            <Container
                id="catalog"
                className="flex flex-col items-center gap-6 lg:gap-10 mb-12 lg:mb-20 scroll-mt-24"
            >
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
