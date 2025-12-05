import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

function Card({ pokemon, counter, sprite }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favArray, setFavArray, testCounter, setTestCounter } = useContext(MyContext);

  // click click and state variable boolean for click and set it to the number id
  // then map it to a state array and then add to favorites page
  function handleFavorite() {
    setIsFavorite(prev => !prev);
    setFavArray(prev => [...prev, pokemon]);
  }

  return (
    <>
      <div className="h-95 w-75 grid grid-rows-12 grid-cols-12 mb-10 border-2 border-yellow-600 rounded-2xl">
        <div onClick={handleFavorite} className={`border-2 border-black row-start-1 row-end-3 col-start-1 col-end-4 hover:bg-gray-200 active:bg-gray-300
        ${isFavorite ? `bg-red-600 hover:bg-red-500 active:bg-red-700` : ``}
        `}>
          #{(counter)} 
        </div>
        <img
          className="h-full w-full border-2 border-black row-start-3 row-end-10 col-start-3 col-end-11 object-contain"
          alt="pokemon img" src={sprite}
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
