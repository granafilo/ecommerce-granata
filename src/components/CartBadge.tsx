import CART_ICON from "../assets/CartIcon.png"
const CartBadge = () => {
    return  (
        <button className="flex items-center w-auto justify-center gap-2 border border-[rgba(155,152,152,0.7)] px-3 py-1.5 rounded-xl h-10 max-h-14 hover:border-black transition-all duration-300 cursor-pointer">
            <img src={CART_ICON} className="h-full object-contain" alt="" />
            <p>Carrello</p>
        </button>
        )
}

export default CartBadge;