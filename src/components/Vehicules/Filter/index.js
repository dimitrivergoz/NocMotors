import { useState } from "react";
import Data from "../../Data";
import { Link } from "react-router-dom";
import {styleSell, styleRent, styleSold} from "../../Style"
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
    <div className=" mx-auto">
      <div className="filter-container my-2 sticky mx-2">
        <button
          value="all"
          className={`button rounded-lg border-2 p-2 mr-2 active:bg-white active:text-black ${
            active === "first" ? "activeButton" : ""
          }`}
          onClick={handleBtns}
        >
          Tous
        </button>
        <button
          value="rent"
          className={`button rounded-lg border-2 p-2 mr-2 active:bg-white active:text-black ${
            active === "Second" ? "activeButton" : ""
          }`}
          onClick={handleBtns}
        >
          A louer
        </button>
        <button
          value="sell"
          className={`button rounded-lg border-2 p-2 mr-2 active:bg-white active:text-black ${
            active === "Third" ? "activeButton" : ""
          }`}
          onClick={handleBtns}
        >
          A vendre
        </button>
      </div>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 lg:space-y-0 md:gap-2 mx-2 mb-2">
        {state.map((item) => (
          <Link to={`/NocMotors/vehicules/${item.id}`}>
            <div className="w-full rounded hover:shadow-2xl border-2 mb-4 md:mb-0">
              {item.type === "sell" && (
                <p className={styleSell}>
                  A vendre
                </p>
              )}
              {item.type === "rent" && (
                <p className={styleRent}>
                  A louer
                </p>
              )}
              {item.type === "sold" && (
                <p className={styleSold}>
                  VENDU
                </p>
              )}
              {item.type === "sold" && (
              <img
                src={item.img[0]}
                className="sm:object-cover grayscale lg:h-[450px] md:h-[300px] w-full"
                alt={item.name}
              />
              )}
              {item.type !== "sold" && (
              <img
                src={item.img[0]}
                className="sm:object-cover lg:h-[450px] md:h-[300px] w-full"
                alt={item.name}
              />
              )}
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
