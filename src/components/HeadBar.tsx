import LOGO from "../assets/OrmaLogo.png"
import CartBadge from "./CartBadge";
import MainCTA from "./MainCTA";

const onSearch = () => {
    console.log("Cercando")    
}

const HeadBar = () => {
    return <div className="flex items-center gap-6 min-h-14 h-14 p-2 shrink">
    {/* Logo */}
        <img src={LOGO}></img>
        {/* SearchBar */}
        <div className="flex-1 shrink h-full">
            <input className="w-full border rounded-md h-full px-3 py-1" type="text" name="SearchBar" id="SearchBar" />
        </div>
        {/* CTA */}
        <MainCTA classStyle="searchButton" onClick={onSearch}> 
            <p>Cerca</p>
        </MainCTA>
        {/* Cart Badge */}
        <CartBadge/>
    </div>
}

export default HeadBar;