import prisma from '../db.js'

async function main() {
    // 1. Очищаем старые данные (чтобы избегать дублей при повторном запуске)
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    // 2. Создаем категории с товарами
    const categoriesData = [
        {
            category: 'Свежая выпечка и хлеб',
            img: 'bread.jpg',
            tag: 'fresh-bread',
            products: {
                create: [
                    { name: 'Французский багет', img: '/baget.jpg', price: 120.0, about: 'Хрустящий багет на закваске' },
                    { name: 'Чиабатта', img: '/cibatta.jpg', price: 150.0, about: 'Итальянский хлеб с пористым мякишем' },
                ],
            },
        },
        {
            category: 'Сдобные изделия',
            img: 'bun.jpg',
            tag: 'sweet-pastry',
            products: {
                create: [
                    { name: 'Круассан классический', img: 'croissant.jpg', price: 180.0, about: 'Сливочный круассан из слоёного теста' },
                    { name: 'Улитка с корицей', img: 'cinnamon-roll.jpg', price: 160.0, about: 'Сдобная булочка с ароматной корицей' },
                ],
            },
        },
        {
            category: 'Пирожные и десерты',
            img: 'cakes.jpg',
            tag: 'desserts',
            products: {
                create: [
                    { name: 'Эклер ванильный', img: 'eclair.jpg', price: 220.0, about: 'Заварное пирожное с заварным кремом' },
                    { name: 'Картошка', img: 'kartoshka.jpg', price: 140.0, about: 'Классическое бисквитное пирожное' },
                ],
            },
        },
        {
            category: 'Торты на заказ',
            img: 'cake.jpg',
            tag: 'cakes',
            products: {
                create: [
                    { name: 'Торт Медовик', img: 'medovik.jpg', price: 1800.0, about: 'Нежные медовые коржи и сметанный крем' },
                    { name: 'Торт Наполеон', img: 'napoleon.jpg', price: 2100.0, about: 'Слоёный торт с заварным кремом' },
                ],
            },
        },
        {
            category: 'Напитки', // Дополнительная отличная категория для пекарни
            img: 'drinks.jpg',
            tag: 'beverages',
            products: {
                create: [
                    { name: 'Морс', img: 'cappuccino.jpg', price: 250.0, about: 'Морс из свежих ягод' },
                    { name: 'Чай авторский', img: 'tea.jpg', price: 200.0, about: 'Облепиховый чай с имбирем' },
                ],
            },
        }
    ];

    for (const item of categoriesData) {
        await prisma.category.create({ data: item });
    }

    console.log('Категории и товары пекарни успешно добавлены!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });