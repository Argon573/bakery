import ProductCard from "./ProductCard.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Catalog from "../../../../api/getCategories.js";
import Header from "../../layouts/Header.jsx";
import { FiArrowLeft } from "react-icons/fi"; // Иконка стрелочки

const ProductCatalog = () => {
    const { tag } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!tag) return;

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
                <div className="m-5 text-center text-gray-500">Загрузка...</div>
            </>
        );
    }

    if (!category) {
        return (
            <>
                <Header />
                <div className="m-5 text-center text-red-500">Категория не найдена</div>
            </>
        );
    }

    return (
        <>
            <Header />

            {/* Контейнер для кнопки с выравниванием по отступам сетки */}
            <div className="px-5 pt-3">
                <button
                    onClick={() => navigate(-1)}
                    className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-700 bg-amber-100/80 hover:bg-amber-200 active:scale-95 rounded-full transition-all cursor-pointer shadow-xs"
                >
                    {/* Стрелочка с эффектом смещения влево при наведении */}
                    <FiArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
                    <span>Назад</span>
                </button>
            </div>

            <div className="mx-5 mb-5 mt-2 flex flex-col items-center gap-5">
                <h1 className="font-bold text-2xl italic text-stone-900">{category.category}</h1>
                <div className="grid grid-cols-2 gap-5 w-full">
                    {category.products?.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductCatalog;