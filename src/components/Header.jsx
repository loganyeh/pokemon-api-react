import { useState, useRef, useEffect, useContext } from "react"
import { MyContext } from "./MyContext";


function Header() {
    const {inputValue, setInputValue} = useContext(MyContext);

    const handleInputValue = (event) => {
        setInputValue(event.target.value);
        // console.log(inputValue);
    }

    const handleSearch = () => {
        console.log(inputValue);
        setInputValue(``);
    }

    const handleConsoleClear = () => {
        console.clear();
    }

    return (
        <>
            <div className="h-1/6 w-full flex justify-around items-center text-2xl border-2 border-red-600">
                <div onClick={handleConsoleClear} className="cursor-pointer">Home</div>
                <div>
                    <input value={inputValue} onChange={handleInputValue} type="text" className="h-10 w-50 border-2 border-red-600" />
                    <button onClick={handleSearch} className="h-10 w-20 border-2 border-red-600 hover:bg-gray-200 active:bg-gray-100 cursor-pointer">Search</button>
                </div>
                <div>Favorites</div>
                <div>Types</div>
            </div>
        </>
    )
}

export default Header