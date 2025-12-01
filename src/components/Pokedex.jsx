import { useState, useRef, useEffect, useContext } from "react"
import { MyContext } from "./MyContext";
import Header from "./Header";
import Card from "./Card";
import Body from "./Body";

function Pokedex() {
    // const {} = useContext(MyContext);
    const [inputValue, setInputValue] = useState(``);
    // MAY NEED TO FIX
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;

    return (
        <>
            <div className="h-screen w-screen">
                <MyContext.Provider value={{inputValue, setInputValue}} >
                    <Header />
                    <Body />
                </MyContext.Provider>
            </div>
        </>
    )
}

export default Pokedex;