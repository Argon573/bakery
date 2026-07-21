import CategoryCard from "./CategoryCard.jsx";
import categoryData from "./category.data.js";


const CategoryCatalog = () => {
    return (
        <div className="catalog grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categoryData.map(category => (
                <CategoryCard category = {category} key={category.id} />
            ))}
        </div>
    )
}
export default CategoryCatalog;

