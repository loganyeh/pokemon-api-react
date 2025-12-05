import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Card from "../components/Card";

function Favorites() {
  const { favArray } = useContext(MyContext);

  return (
    <>
      <div className="h-full w-full flex justify-center border-2 border-blue-600">
        <div className="text-xl">FAVORITES</div>
        {favArray.map((fav, index) => (
          <Card key={index} pokemon={fav} counter={index + 1} />
        ))}
      </div>
    </>
  );
}

export default Favorites;
