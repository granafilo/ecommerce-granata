import { useState } from "react";
import CatalogPage from "./components/CatalogPage";
import HeadBar from "./components/HeadBar";

const App = () => {
    // quando la passo come prop il tipo sarà (option: string) => void
    // const handleOrderBy = (option : string ) => {
    //     setOrderBy(option)
    // }

    const [search, setSearch] = useState("")

    const handleSearch = (input: string) => {
        setSearch(input)
    }

    return <div className="p-2">
        <HeadBar handleSearch={handleSearch}/>
        <CatalogPage search={search}/>
    </div>
}

export default App