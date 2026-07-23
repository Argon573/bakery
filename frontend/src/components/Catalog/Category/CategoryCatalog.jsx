import CategoryCard from "./CategoryCard.jsx";
import Catalog from '../../../../api/getCategories.js'
import { useEffect, useState } from "react";


const CategoryCatalog = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Catalog.getCategories()
            .then(data => {
                setCategories(data)
                console.log(data)
            })
            .catch(error => console.log(error));
    }, [])



    return (
        <div className="catalog grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map(category => (
                <CategoryCard category = {category} key={category.id} />
            ))}
        </div>
    )
}
export default CategoryCatalog;

