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

const ProductCard = (ProductProps: TypeProductCardProps) => {

    const currentVariant: TypeVariant = ProductProps.Product.variants[0];

    return <>
        <div className="flex flex-col w-full overflow-hidden border border-gray-500 rounded-[20px] shadow shadow-2">
            {/* immagine */}
            <div className="relative">
                <img className="shoePreview" src={ShowPreview} alt="" />
                {currentVariant.badge ? <div className="absolute top-[2.5%] left-[2.5%] px-2 py-1 font-semibold rounded-full bg-black text-white">{currentVariant.badge}</div> : <></>}
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
                    <p className="priceAmount">da {euro.format(currentVariant.price.amount)} {currentVariant.price.currency}</p>
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