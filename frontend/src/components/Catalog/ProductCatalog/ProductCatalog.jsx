import ProductCard from "./ProductCard.jsx"
import ProductsData from "./products.data.js"

const ProductCatalog = () => {
    return (
        <div className="m-5">
            <h1>Catalog</h1>
            <div className="grid grid-cols-2 gap-5">
                {ProductsData.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}

export default ProductCatalog;