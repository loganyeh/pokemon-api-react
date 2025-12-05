import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "../context/MyContext";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "../pages/Favorites";

function Pokedex() {
  const [inputValue, setInputValue] = useState(``);
  const [pokemon, setPokemon] = useState("");
  const [pokemonArr, setPokemonArr] = useState([]);
  const [pokemonCard, setPokemonCards] = useState([]);
  const [resetHome, setResetHome] = useState(false);
  const [pokemonSpriteArr, setPokemonSpriteArr] = useState([]);
  const [favArray, setFavArray] = useState([]);

  return (
    <>
      <div className="h-screen w-screen">
        <MyContext.Provider
          value={{
            inputValue,
            setInputValue,
            pokemon,
            setPokemon,
            pokemonArr,
            setPokemonArr,
            pokemonCard,
            setPokemonCards,
            resetHome,
            setResetHome,
            pokemonSpriteArr,
            setPokemonSpriteArr,
            favArray,
            setFavArray,
          }}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </MyContext.Provider>
      </div>
    </>
  );
}

export default Pokedex;
