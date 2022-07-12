import { useState } from "react";
import Data from "../../Data"
import {Link} from "react-router-dom"
function Filter() {
  const [state, setState] = useState(Data);
  const [active, setActive] = useState("first");
  const handleBtns = (e) => {
    let word = e.target.value;
    if (word === "all") {
      setState(Data);
      setActive("first");
    } else if (word === "rent") {
      const filtered = Data.filter((item) => item.type === "rent");
      setActive("Second");
      setState(filtered);
    } else if (word === "sell") {
      const filtered = Data.filter((item) => item.type === "sell");
      setState(filtered);
      setActive("Third");
    }
  };
  return (
    <div className="container mx-auto">
      <div className="filter-container my-2 sticky mx-2">
        <button
          value="all"
          className={`button rounded-lg border-2 p-2 mr-2 active:bg-white active:text-black ${active === "first" ? "activeButton" : ""}`}
          onClick={handleBtns}
        >
          Tous
        </button>
        <button
          value="rent"
          className={`button rounded-lg border-2 p-2 mr-2 active:bg-white active:text-black ${active === "Second" ? "activeButton" : ""}`}
          onClick={handleBtns}
        >
          A louer
        </button>
        <button
          value="sell"
          className={`button rounded-lg border-2 p-2 mr-2 active:bg-white active:text-black ${active === "Third" ? "activeButton" : ""}`}
          onClick={handleBtns}
        >
          A vendre
        </button>
      </div>
      <div className="lg:grid lg:grid-cols-3 space-y-2 lg:space-y-0 lg:gap-2  mx-2 mb-2">
        {state.map((item) => (
          <Link to={`/NocMotors/vehicules/${item.id}`}>
          <div className="w-full rounded hover:shadow-2xl border-2 mb-4 md:mb-0">
            {item.type === "sell" && (
              <p className="absolute bg-green-600 text-black p-2 text-m rounded-br-lg">
                A vendre
              </p>
            )}
            {item.type === "rent" && (
              <p className="absolute bg-orange-400 text-black p-2 text-m rounded-br-lg">
                A louer
              </p>
            )}
            <img src={item.img[0]} className="object-cover h-[380px]" alt={item.name} />

            <div className="p-3 hover:from-black hove:to-blue-100 flex justify-between">
              <h3>{item.name}</h3>
              <h4>{item.annee}</h4>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Filter;
