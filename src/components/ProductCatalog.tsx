import ProductCard from "./ProductCard"
import type { TypeProduct } from "../type"

type ProductCatalogProps = {
    orderBy: string,
    productArray: TypeProduct[]
}

const sortProducts = (Products: TypeProduct[], orderBy: string): TypeProduct[] => {
    if (orderBy === "price") {
        return Products.sort((a,b) => a.variants[0].price.amount - b.variants[0].price.amount)
    } else if (orderBy === "name") {
        return Products.sort((a,b) => a.name.localeCompare(b.name))
    }
    return Products
}

const ProductCatalog = (Props: ProductCatalogProps) => {
    return <div className="grid grid-cols-3 gap-6 p-3">
        {sortProducts(Props.productArray, Props.orderBy).map((product: TypeProduct, index: number) => <ProductCard key={product.id} Product={product} index={index}/>)}
    </div>
}

export default ProductCatalog