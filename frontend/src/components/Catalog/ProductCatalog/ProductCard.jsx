

const ProductCard = ({product}) => {
    return (
        <div>
            <img src={product.img} alt={product.title} className="aspect-3/4"/>
            <h2>{`${product.title} ${product.price}`}</h2>
        </div>
    )
}

export default ProductCard;