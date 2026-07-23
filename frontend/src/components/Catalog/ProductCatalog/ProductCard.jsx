import Modal from './Modal.jsx';
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-3 overflow-hidden">

            {isOpen && <Modal isOpen={isOpen} onClose={handleClose} />}

            <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100 mb-3">
                <img
                    src={`/product/${product.img}`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col grow">
                <h3 className="font-medium text-sm text-gray-900 mb-2 line-clamp-2 min-h-10">
                    {product.name}
                </h3>

                <div className="mt-auto pt-2">
                    <div className="flex items-baseline gap-2 mb-3">
                        <span className="font-bold text-base text-gray-900">
                            {product.price} ₽
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                            {Math.round(product.price * 1.1)} ₽
                        </span>
                    </div>

                    <button
                        className="w-full py-2 px-3 bg-stone-100 hover:bg-amber-800 hover:text-white active:bg-gray-200 text-stone-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    >
                        Заказать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;