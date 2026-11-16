import starIcon from "../assets/icons/star.svg"
import ColorDotList from "../ColorDotList/ColorDotList"
import type { TypeProduct, TypeVariant } from "../type"
import ShowPreview from "../assets/ShoeProPic.png"

type TypeProductCardProps = {
    Product: TypeProduct
}

const euro = new 
Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
});

const isCheapest = (currentVariant: TypeVariant, Products: TypeProduct): boolean => {
    let cheapest: boolean = true;
    Products.variants.forEach((variant: TypeVariant) => {
        if (variant.price.amount < currentVariant.price.amount) {
            cheapest = false;
        }
    })
    return cheapest;
}

const ProductCard = (ProductProps: TypeProductCardProps) => {

    const currentVariant: TypeVariant = ProductProps.Product.variants[0];

    return <>
        <div onClick={() => console.log(`${ProductProps.Product.name}`) } className="flex flex-col w-full overflow-hidden rounded-[20px] shadow shadow-2">
            {/* immagine */}
            <div className="relative">
                <img className="shoePreview" src={ShowPreview} alt="" />
                {currentVariant.badge ? <div className="absolute top-3 left-3 px-4 py-1 font-semibold rounded-full bg-black text-white">{currentVariant.badge}</div> : <></>}
            </div>
            <div className="cardContent">
                <div>
                    {/* categoria */}
                    <p className="category">{ProductProps.Product.category}</p>
                </div>
                <div>
                    {/* titolo */}
                    <h1 className="cardTitle">{ProductProps.Product.name}</h1>
                </div>
                <div className="colorInfo">
                    {/* colore */}
                    <div className="colorDotContainer">
                        {/* Funzione che restituisce più colorDot */}
                        <ColorDotList variants={ProductProps.Product.variants}/>
                    </div>
                    <p>{ProductProps.Product.variants.length > 1 ? ProductProps.Product.variants.length + " colori" : ProductProps.Product.variants.length + " colore"}</p>
                </div>
                <div>
                    {/* prezzo */}
                    <p className="priceAmount">{isCheapest(currentVariant, ProductProps.Product) && "da "} {euro.format(currentVariant.price.amount)} {currentVariant.price.currency}</p>
                </div>
                <div className="cardReviewBox">
                    {/* recensioni */}
                    <img className="reviewIcon" src={starIcon} alt="" />
                    <p className="reviewText">{ProductProps.Product.reviews.rating.toLocaleString('it-IT', {minimumFractionDigits: 1,})} ({ProductProps.Product.reviews.reviewCount})</p>
                </div>
            </div>
        </div>
    </>
}

export default ProductCard