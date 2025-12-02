import Card from "./Card";
import { useContext } from "react";
import { MyContext } from "./MyContext";

function Body() {
    const {inputValue, setInputValue, pokemon, setPokemon, pokemonArr, setPokemonArr} = useContext(MyContext);
    const pokemonLength = 152;
    
    return (
        <>
            <div className="h-5/6 w-full flex justify-center border-2 border-blue-600">
                <div className="h-full w-11/12 m-10 flex flex-wrap justify-around border-2 border-red-600">
                    <Card />
                    {/* {pokemonArr.from({ length: pokemonLength}).map(() => {
                        <Card />
                    })} */}

                </div>
            </div>
        </>
    ) 
}

export default Body;