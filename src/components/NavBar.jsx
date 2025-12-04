import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { searchPokemonQuery } from "../services/api";
import { Link } from 'react-router-dom';

function NavBar() {
  const { inputValue, setInputValue, pokemonCard, setPokemonCards, resetHome, setResetHome } = useContext(MyContext);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    // console.log(inputValue);
  };

  const handleSearch = async () => {
    // setInputValue(``);
    if (inputValue === "") return console.log("search is empty");

    try {
      const searchResults = await searchPokemonQuery(inputValue);
      setPokemonCards(searchResults);
      console.log(searchResults);
    } catch (error) {
      console.error(error);
      console.log(`Pokemon not found`);
    }
    finally {

    }
  };

  const handleConsoleClear = () => {
    console.clear();
    setInputValue(``);
    setResetHome([prev => !prev]);
  };

  return (
    <>
      <div className="h-1/6 w-full flex justify-around items-center text-2xl border-2 border-red-600">
          <div onClick={handleConsoleClear} className="cursor-pointer">
            <Link to="/">Home</Link>
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
