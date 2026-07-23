import { NavLink } from 'react-router-dom';

const CategoryCard = ({category}) => {

    console.log(category);

    return (
        <NavLink
            className="relative aspect-square overflow-hidden rounded-2xl shadow-sm"
            to={`/category/${category.tag}`}
            state={category}
        >
                <img src={`category/${category.img}`} alt={category.category} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3 text-center">
                    <h2 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-900">{category.category}</h2>
                </div>
        </NavLink>
    )
}

export default CategoryCard;