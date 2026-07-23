import ProductCard from "./ProductCard.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Catalog from "../../../../api/getCategories.js";
import Header from "../../layouts/Header.jsx";
import Container from "../../layouts/Container.jsx";
import { FiArrowLeft } from "react-icons/fi";

const ProductCatalog = () => {
    const { tag } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!tag) return;

        setLoading(true);
        Catalog.getCategoryFromTag(tag)
            .then((data) => {
                setCategory(data);
            })
            .catch((error) => console.error("Ошибка загрузки:", error))
            .finally(() => setLoading(false));
    }, [tag]);

    if (loading) {
        return (
            <>
                <Header />
                <Container className="py-8 lg:py-12 text-center text-gray-500">
                    Загрузка...
                </Container>
            </>
        );
    }

    if (!category) {
        return (
            <>
                <Header />
                <Container className="py-8 lg:py-12 text-center text-red-500">
                    Категория не найдена
                </Container>
            </>
        );
    }

    return (
        <>
            <Header />

            <Container className="pt-3 lg:pt-8 pb-10 lg:pb-16">
                <button
                    onClick={() => navigate(-1)}
                    className="group inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold text-stone-700 bg-amber-100/80 hover:bg-amber-200 active:scale-95 rounded-full transition-all cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                    <FiArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
                    <span>Назад</span>
                </button>

                <div className="mt-4 lg:mt-6 flex flex-col items-center gap-5 lg:gap-8">
                    <h1 className="font-bold text-2xl lg:text-4xl xl:text-5xl italic text-stone-900 tracking-tight">
                        {category.category}
                    </h1>
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 w-full">
                        {category.products?.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ProductCatalog;
