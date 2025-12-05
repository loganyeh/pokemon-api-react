import Card from "../components/Card";
import { useEffect, useContext, useState } from "react";
import { getPokemon, getPokemonSprites, getPokemonNames, getPokemonID } from "../services/api";
import { MyContext } from "../context/MyContext";

function Home() {
  const {
    inputValue,
    pokemonCard,
    setPokemonCards,
    resetHome,
    pokemonSpriteArr,
    setPokemonSpriteArr,
  } = useContext(MyContext);
  const [pokemonNameArr, setPokemonNameArr] = useState([]);
  const [storePokemonNameArr, setStorePokemonNameArr] = useState([]);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const popularPokemon = await getPokemon();
        setPokemonCards(popularPokemon);
        const pokemonSpritesDefault = await getPokemonSprites();
        setPokemonSpriteArr(pokemonSpritesDefault);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    loadPokemon();
  }, [resetHome]);

  // try to retrieve the names from the api and store into STATE ARRAY
  useEffect(() => {
    const pokemonNameFunction = async () => {
      try {
        const pokemonNamesAPIData = await getPokemonNames();
        setPokemonNameArr(pokemonNamesAPIData);
        const names = pokemonNameArr.map(p => p.name);
        setStorePokemonNameArr(names);
      } catch (error) {
        console.error(error)
      }
    }
    
    pokemonNameFunction()
  }, []);

  useEffect(() => {
    const checkID = async () => {
      try {
        const pokemonMoves = await getPokemonID();
        console.log(pokemonMoves);
      } catch (error) {
        console.error(error);
      }
    }

    checkID();
  }, []);

  return (
    <>
      <div className="h-5/6 w-full flex justify-center border-2 border-blue-600">
        <div className="h-full w-11/12 m-10 flex flex-wrap justify-around border-2 border-red-600">
          {pokemonCard
            // .filter((pokemon) => pokemon.name.startsWith(inputValue))
            .map((pokemon, index) => {
              return (
                <Card
                  key={index}
                  pokemon={pokemon}
                  counter={index + 1}
                  sprite={pokemonSpriteArr}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
