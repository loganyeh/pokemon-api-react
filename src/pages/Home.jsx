import Card from "../components/Card";
import { useState, useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";

function Body() {
  const {
    inputValue,
    setInputValue,
    pokemon,
    setPokemon,
    pokemonArr,
    setPokemonArr,
  } = useContext(MyContext);
  const [pokemonID, setPokemonID] = useState(1);
  const pokemonLength = 10;

  return (
    <>
      <div className="h-5/6 w-full flex justify-center border-2 border-blue-600">
        <div className="h-full w-11/12 m-10 flex flex-wrap justify-around border-2 border-red-600">
          {/* <Card /> */}
          {Array.from({ length: pokemonLength }).map((_, index) => {
            return <Card key={index} pokemonID={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
