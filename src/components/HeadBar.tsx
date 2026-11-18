import { useState } from "react";
import LOGO from "../assets/OrmaLogo.png";
import CartBadge from "./CartBadge";
import MainCTA from "./MainCTA";

type PropsHeadbar = {
    handleSearch: (input: string) => void;
}

const HeadBar = ({ handleSearch }: PropsHeadbar) => {
    const [searchText, setSearchText] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setSearchText(newText);
        handleSearch(newText);
    };

    return (
        <div className="flex items-center gap-6 min-h-14 h-14 p-2 shrink">
            <img src={LOGO} alt="Logo" />
            
            <div className="flex-1 shrink h-full">
                <input 
                    className="w-full border rounded-md h-full px-3 py-1" 
                    type="text" 
                    name="SearchBar" 
                    id="SearchBar" 
                    value={searchText}
                    onChange={handleInputChange}
                    placeholder="Cerca prodotti..."
                />
            </div>
            
            <MainCTA classStyle="searchButton" onClick={() => handleSearch(searchText)}> 
                <p>Cerca</p>
            </MainCTA>
            
            {/* Cart Badge */}
            <CartBadge />
        </div>
    );
}

export default HeadBar;