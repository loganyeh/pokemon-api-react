import Card from "../components/Card";
import { useState, useEffect, useContext } from "react";
import { getPokemon } from "../services/api";
import { MyContext } from "../context/MyContext";

function Home() {
  const {pokemonCard, setPokemonCards} = useContext(MyContext);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const popularPokemon = await getPokemon();
        setPokemonCards(popularPokemon);
      } catch (error) {
        console.log(error);
      } finally {

      }
    }

    loadPokemon();
  }, []);

  return (
    <>
      <div className="h-5/6 w-full flex justify-center border-2 border-blue-600">
        <div className="h-full w-11/12 m-10 flex flex-wrap justify-around border-2 border-red-600">
          {/* <Card /> */}
          {pokemonCard.map((pokemon, index) => {
            return <Card key={index} pokemon={pokemon} counter={index + 1} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
