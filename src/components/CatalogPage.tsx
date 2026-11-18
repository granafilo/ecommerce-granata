import ProductCatalog from "../components/ProductCatalog";
import type { TypeCategory, TypeProduct } from "../type";
import Products from "../data/ProductDetails.json"
import { useState } from "react";

const productArray: TypeProduct[] = Products.map((prodotto) => {
    return {
        id: prodotto.product.id,
        name: prodotto.product.name,
        category: prodotto.product.category as TypeCategory,
        reviews: prodotto.product.reviews,
        description: prodotto.product.description,
        variants: prodotto.product.variants
    }
});

type PropsCatalogPage = {
    search: string
}

const CatalogPage = (Props: PropsCatalogPage) => {
    const [orderBy, setOrderBy] = useState("none");

    const filteredBySearch = productArray.filter((prodotto) => {
        return prodotto.name.toLocaleLowerCase().includes(Props.search.toLocaleLowerCase())
    })

    return <>
        <div className="p-3 flex w-full justify-between">
            <div className="flex justify-center items-baseline gap-3">
                <p className="font-bold text-4xl">Sneakers</p>
                <span className="text-gray-600 text-2xl">• {filteredBySearch.length > 1 ? filteredBySearch.length + " modelli" : filteredBySearch.length + " modello"}</span>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-gray-600 text-lg">Ordina per</p>
                <select name="orderby" id="orderby" onChange={(event) => setOrderBy(event.target.value)} className="p-3 border rounded-xl border-gray-500">
                    <option value="price">Prezzo</option>
                    <option value="name">Name</option>
                    <option value="none" selected>Nessun Ordinamento</option>
                </select>
            </div>
        </div>
        <ProductCatalog orderBy={orderBy} productArray={filteredBySearch}/>
    </>
}

export default CatalogPage