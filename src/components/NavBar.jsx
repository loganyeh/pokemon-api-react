import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { searchPokemonQuery } from "../services/api";

function NavBar() {
  const { inputValue, setInputValue, pokemonCard, setPokemonCards } = useContext(MyContext);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    // console.log(inputValue);
  };

  const handleSearch = async () => {
    // setInputValue(``);

    try {
      const searchResults = await searchPokemonQuery(inputValue);
      setPokemonCards(searchResults);
      console.log(searchResults);
    } catch (error) {
      console.error(error);
    }
    finally {

    }

  };

  const handleConsoleClear = () => {
    console.clear();
    setInputValue(``);
  };

  return (
    <>
      <div className="h-1/6 w-full flex justify-around items-center text-2xl border-2 border-red-600">
        <div onClick={handleConsoleClear} className="cursor-pointer">
          Home
        </div>
        <div>
          <input
            value={inputValue}
            onChange={handleInputValue}
            type="text"
            className="h-10 w-50 border-2 border-red-600"
          />
          <button
            onClick={handleSearch}
            className="h-10 w-20 border-2 border-red-600 hover:bg-gray-200 active:bg-gray-100 cursor-pointer"
          >
            Search
          </button>
        </div>
        <div>Favorites</div>
      </div>
    </>
  );
}

export default NavBar;
