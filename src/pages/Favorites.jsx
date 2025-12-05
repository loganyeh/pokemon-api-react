import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import Card from "../components/Card";

function Favorites(){
    const {favArray, setArray} = useContext(MyContext);

    return (
        <>
            <div className="h-full w-full flex justify-center border-2 border-blue-600">
                <h1>This is the favorites</h1>

                {/* {favArray.map((fav, index) => <Card key={index} pokemon={} counter={index + 1}/>)} */}

            </div>
        </>
    )
}

export default Favorites;