import ProductCard from "./components/productCard"
import Products from "./data/ProductDetails.json"
import type { TypeProduct } from "./type"

const App = () => {
    const productArray: TypeProduct[] = Products.map((prodotto) => prodotto.product);
    
    return <div className="grid grid-cols-3 gap-6">
        {productArray.map((product: TypeProduct) => <ProductCard key={product.id} Product={product}/>)}
    </div>
}

export default App