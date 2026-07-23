import CategoryCard from "./CategoryCard.jsx";
import Catalog from "../../../../api/getCategories.js";
import { useEffect, useState } from "react";

const CategoryCatalog = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Catalog.getCategories()
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="catalog w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 xl:gap-6">
            {categories.map((category) => (
                <CategoryCard category={category} key={category.id} />
            ))}
        </div>
    );
};

export default CategoryCatalog;
