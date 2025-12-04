import Card from "../components/Card";
import { useState, useEffect, useContext } from "react";
import { getPokemon, getPokemonSprites } from "../services/api";
import { MyContext } from "../context/MyContext";

function Home() {
  const {
    inputValue,
    setInputValue,
    pokemonCard,
    setPokemonCards,
    resetHome,
    setResetHome,
    pokemonSpriteArr, setPokemonSpriteArr
  } = useContext(MyContext);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const popularPokemon = await getPokemon();
        setPokemonCards(popularPokemon);
        const pokemonSpritesDefault = await getPokemonSprites();
        setPokemonSpriteArr(pokemonSpritesDefault);
        console.log(pokemonSpritesDefault);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    loadPokemon();
  }, [resetHome]);

  // write a useeffect for the getpokemonSprites api fetch ? call ? 
  console.log(pokemonSpriteArr);

  return (
    <>
      <div className="h-5/6 w-full flex justify-center border-2 border-blue-600">
        <div className="h-full w-11/12 m-10 flex flex-wrap justify-around border-2 border-red-600">
          {/* <Card /> */}
          {pokemonCard
            .filter((pokemon) => pokemon.name.startsWith(inputValue))
            .map((pokemon, index) => {
              return <Card key={index} pokemon={pokemon} counter={index + 1} sprite={pokemonSpriteArr} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
