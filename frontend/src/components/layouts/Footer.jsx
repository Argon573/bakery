import Socials from "./Socials.jsx";
import Container from "./Container.jsx";

const Footer = () => {
    return (
        <footer className="footer bg-stone-950 mt-auto">
            <Container className="py-10 lg:py-14 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
                <div className="lg:max-w-xs">
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="logo w-20 h-15 mb-3 transition-opacity duration-200 hover:opacity-80"
                    />
                    <p className="text-stone-400 text-sm leading-relaxed">
                        Кулинарии и кондитерские «Бушевилль». Производство и доставка.
                    </p>
                    <p className="text-stone-500 text-sm mt-4">Все права защищены</p>
                </div>

                <div>
                    <p className="text-stone-200 text-lg lg:text-xl font-semibold mb-3">Контакты</p>
                    <a
                        href="tel:+73522440151"
                        className="block text-stone-400 hover:text-amber-300 transition-colors duration-200 focus-visible:outline-none focus-visible:text-amber-300"
                    >
                        +7 (3522) 44‒01‒51
                    </a>
                    <a
                        href="tel:+73522556065"
                        className="block text-stone-400 hover:text-amber-300 transition-colors duration-200 mt-1 focus-visible:outline-none focus-visible:text-amber-300"
                    >
                        +7 (3522) 55‒60‒65
                    </a>
                </div>

                <div>
                    <p className="text-stone-200 text-lg lg:text-xl font-semibold mb-3">Мы в соцсетях</p>
                    <Socials />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
