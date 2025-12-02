import { useState, useRef, useEffect, useContext } from "react"
import { MyContext } from "./MyContext";
import Header from "./Header";
import Card from "./Card";
import Body from "./Body";

function Pokedex() {
    // const {} = useContext(MyContext);
    const [inputValue, setInputValue] = useState(``);
    const [pokemon, setPokemon] = useState("");

    useEffect(() => {
        async function getData(){
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
            const data = await res.json();
            setPokemon(data);
        }

        getData();
    }, [inputValue]);

    console.log(pokemon);

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