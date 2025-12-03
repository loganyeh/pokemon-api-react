import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "../context/MyContext";
import NavBar from "./NavBar";
import Home from "../pages/Home";

function Pokedex() {
  const [inputValue, setInputValue] = useState(``);
  const [pokemon, setPokemon] = useState("");
  const [pokemonArr, setPokemonArr] = useState([]);
  const [pokemonCard, setPokemonCards] = useState([]);
  const [resetHome, setResetHome] = useState(false);

  return (
    <>
      <div className="h-screen w-screen">
        <MyContext.Provider
          value={{inputValue, setInputValue, pokemon, setPokemon, pokemonArr, setPokemonArr, pokemonCard, setPokemonCards, resetHome, setResetHome}}
        >
          <NavBar />
          <Home />
        </MyContext.Provider>
      </div>
    </>
  );
}

export default Pokedex;
