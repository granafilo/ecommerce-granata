import starIcon from "../assets/icons/star.svg"
import ColorDot from "./ColorDot"
import ShoePicture from "../assets/ShoeProPic.png"

const ProductCard = () => {
    return <>
        <div className="cardBox selected">
            {/* immagine */}
            <img className="shoePreview" src={ShoePicture} alt="" />
            <div className="cardContent">
                <div>
                    {/* categoria */}
                    <p className="category">RUNNING</p>
                </div>
                <div>
                    {/* titolo */}
                    <h1 className="cardTitle">Aria Runner</h1>
                </div>
                <div className="colorInfo">
                    {/* colore */}
                    <div className="colorDotContainer">
                        <ColorDot color="#ffffff"/>
                        <ColorDot color="#f343fa"/>
                    </div>
                    <p>2 colori</p>
                </div>
                <div>
                    {/* prezzo */}
                    <p className="priceAmount">da 119,00€</p>
                </div>
                <div className="cardReviewBox">
                    {/* recensioni */}
                    <img className="reviewIcon" src={starIcon} alt="" />
                    <p className="reviewText"> 4,4 (76)</p>
                </div>
            </div>
        </div>
    </>
}

export default ProductCard