import starIcon from "../icons/star.svg"

const ProductCard = () => {
    return <>
        <div className="cardBox">
            {/* immagine */}
            <img src="" alt="" />
            <div>
                <div>
                    {/* categoria */}
                    <p className="category">RUNNING</p>
                </div>
                <div>
                    {/* titolo */}
                    <h1>Aria Runner</h1>
                </div>
                <div>
                    {/* colore */}
                    <p>2 colori</p>
                </div>
                <div>
                    {/* prezzo */}
                    <p>da 119,00€</p>
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