import { useState, useRef, useEffect, useContext } from "react"
import { MyContext } from "./MyContext";
import Header from "./Header";
import Card from "./Card";
import Body from "./Body";

function Pokedex() {
    // const {} = useContext(MyContext);
    const [inputValue, setInputValue] = useState(``);
    const [pokemon, setPokemon] = useState("");
    const [pokemonArr, setPokemonArr] = useState([]);

    useEffect(() => {
        async function getData(){
            // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
            const data = await res.json();
            setPokemon(data);
        }

        getData();
    }, [inputValue]);

    for(let i = 0; i < 152; i++){
        console.log(i);
    }

    return (
        <>
            <div className="h-screen w-screen">
                <MyContext.Provider value={{inputValue, setInputValue, pokemon, setPokemon}} >
                    <Header />
                    <Body />
                </MyContext.Provider>
            </div>
        </>
    )
}

export default Pokedex;