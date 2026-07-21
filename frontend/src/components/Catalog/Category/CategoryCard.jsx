import { NavLink } from 'react-router-dom';

const CategoryCard = ({category}) => {
    return (
        <NavLink
            className="relative aspect-square overflow-hidden rounded-2xl shadow-sm"
            to={`/category/${category.tag}`}
        >
                <img src={category.img} alt={category.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3 text-center">
                    <h2 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-900">{category.title}</h2>
                </div>
        </NavLink>
    )
}

export default CategoryCard;