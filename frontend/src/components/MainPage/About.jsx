import Container from "../layouts/Container.jsx";

const About = () => {
    return (
        <section className="bg-amber-50/40 py-10 lg:py-20">
            <Container className="flex flex-col items-center gap-5 lg:gap-8">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-stone-900 tracking-tight">
                    О нас
                </h2>
                <div className="w-full max-w-3xl lg:max-w-4xl">
                    <p className="whitespace-pre-line text-stone-700 text-base lg:text-lg leading-relaxed lg:leading-8 text-left lg:text-center">
                        {`☺ Доставка, заказ блюд, вопросы +7 (3522) 44-01-51 и +7 (3522) 55-60-65
🎂 Пироги и торты на любые мероприятия!
☎ Заказ, доставка, консультация: 44-01-51, 55-60-65
📍 пер.Песчаный, 7 стр1
📍 Красина, 40
📍 Горького, 95
📍 Кирова, 109

Кулинарии и кондитерские "Бушевилль"

Производство и доставка кондитерских и кулинарных изделий. В наличии и под заказ.

Банкетный зал "Бушевилль". Проведение свадеб, юбилеев, корпоративных и выпускных вечеров.`}
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default About;
