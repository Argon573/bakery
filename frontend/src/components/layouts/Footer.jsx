import Socials from "./Socials.jsx";

const Footer = () => {
    return (
        <footer className="footer bg-stone-950 h-90 p-10 flex flex-col items-start gap-7">
            <div>
                <img src={'/logo.png'} alt="logo" className="logo w-20 h-15 m-3" />
                <p className="text-mist-500 text-sm">Все права защищены</p>
            </div>
            <div>
                <p className="text-mist-500 text-2xl mb-2">Контакты</p>
                <p className="text-mist-500">Телефон +7 (3522) 44‒01‒51</p>
            </div>
            <Socials />
        </footer>
    )
}

export default Footer;