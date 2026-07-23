import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {
    return (
        <NavLink
            className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            to={`/category/${category.tag}`}
            state={category}
        >
            <img
                src={`category/${category.img}`}
                alt={category.category}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3 lg:p-4 text-center transition-colors duration-300 group-hover:bg-white/90">
                <h2 className="text-xs sm:text-sm lg:text-base font-medium uppercase tracking-wider text-gray-900">
                    {category.category}
                </h2>
            </div>
        </NavLink>
    );
};

export default CategoryCard;
