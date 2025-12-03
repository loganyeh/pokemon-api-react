import { useState, useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";

function Card(pokemonID) {
  const {
    inputValue,
    setInputValue,
    pokemon,
    setPokemon,
    pokemonArr,
    setPokemonArr,
  } = useContext(MyContext);
  // const [pokemonID, setPokemonID] = useState(1);

  useEffect(() => {
    async function getData() {
      // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
      // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
      const data = await res.json();
      setPokemon(data);
      // setPokemonID(prev => prev + 1);
    }

    getData();
  }, [inputValue]);

  // console.log(pokemonID);

  return (
    <>
      <div className="h-95 w-75 grid grid-rows-12 grid-cols-12 mb-10 border-2 border-yellow-600 rounded-2xl">
        <div className="border-2 border-black row-start-1 row-end-3 col-start-1 col-end-4">
          #{pokemon.id}
        </div>
        <img
          className="h-full w-full border-2 border-black row-start-3 row-end-10 col-start-3 col-end-11 object-contain"
          alt="pokemon img"
        />
        <div className="border-2 border-black row-start-10 row-end-12 col-start-4 col-end-10">
          {pokemon.name}
        </div>
        <div className="border-2 border-black row-start-12 row-end-13 col-start-4 col-end-10"></div>
      </div>
    </>
  );
}

export default Card;
