import ProductCard from "./ProductCard"
import Products from "../data/ProductDetails.json"
import type { TypeProduct } from "../type"

type ProductCatalogProps = {
    orderBy: string
}

const ProductCatalog = (Props: ProductCatalogProps) => {
    const productArray: TypeProduct[] = Products.map((prodotto) => prodotto.product);

    console.log(Props.orderBy)
    
    return <div className="grid grid-cols-3 gap-6 p-3">
        {productArray.map((product: TypeProduct, index: number) => <ProductCard key={product.id} Product={product} index={index}/>)}
    </div>
}

export default ProductCatalog