import { useState, useRef, useEffect, useContext } from "react"
import { MyContext } from "./MyContext";
import Header from "./Header";
import Card from "./Card";
import Body from "./Body";

function Pokedex() {
    // const {} = useContext(MyContext);

    return (
        <>
            <div className="h-screen w-screen">
                <Header />
                <Body />
            </div>
        </>
    )
}

export default Pokedex;