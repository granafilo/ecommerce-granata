import ProductCatalog from "./components/ProductCatalog";
import type { TypeProduct } from "./type";
import Products from "./data/ProductDetails.json"

const App = () => {
    const productArray: TypeProduct[] = Products.map((prodotto) => prodotto.product);

    return <>
        <div className="p-3 flex w-full justify-between">
            <div className="flex justify-center items-baseline gap-3">
                <p className="font-bold text-4xl">Sneakers</p>
                <span className="text-gray-600 text-2xl">• {productArray.length > 1 ? productArray.length + " modelli" : productArray.length + " modello"}</span>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-gray-600 text-lg">Ordina per</p>
                <select className="p-3 border rounded-xl border-gray-500">
                    <option value="">Rilevanza</option>
                    <option value="">Valutazione</option>
                    <option value="">Prezzo crescente</option>
                    <option value="">Prezzo decrescente</option>
                </select>
            </div>
        </div>
        <ProductCatalog/>
    </>
}

export default App