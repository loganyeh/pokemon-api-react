import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import Card from "../components/Card";

function Favorites(){
    const { favArray, setArray, testCounter, setTestCounter } = useContext(MyContext);


    return (
        <>
            <div className="h-full w-full flex justify-center border-2 border-blue-600">
                <h1>This is the favorites</h1>
                <p>{testCounter}</p>

                {favArray.map((fav, index) => <Card key={index} pokemon={fav} counter={index + 1}/>)}

            </div>
        </>
    )
}

export default Favorites;