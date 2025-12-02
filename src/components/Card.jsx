import { useContext } from "react"
import { MyContext } from "./MyContext"

function Card() {
    const {inputValue, setInputValue, pokemon, setPokemon} = useContext(MyContext);
    console.log(pokemon)

    return (
        <>
            <div className="h-95 w-75 grid grid-rows-12 grid-cols-12 mb-10 border-2 border-yellow-600 rounded-2xl">
                <div className="border-2 border-black row-start-1 row-end-3 col-start-1 col-end-4">#{pokemon.id}</div>
                <img className="h-full w-full border-2 border-black row-start-3 row-end-10 col-start-3 col-end-11 object-contain" alt="pokemon img" />
                <div className="border-2 border-black row-start-10 row-end-12 col-start-4 col-end-10">{pokemon.name}</div>
                <div className="border-2 border-black row-start-12 row-end-13 col-start-4 col-end-10"></div>
            </div>
        </>
    )
}

export default Card