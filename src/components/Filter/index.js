import { useState } from "react";

function Filter() {
  let tout = [
    {
      id: 0,
      type: "sell",
      src: "https://vergoz.xyz/img/280sl.jpg",
      name: "911",
      annee: "2020",
    },
    {
      id: 1,
      type: "sell",
      src: "https://vergoz.xyz/img/alfaromeo.jpg",
      name: "911",
      annee: "2020",
    },
    {
      id: 2,
      type: "rent",
      src: "https://vergoz.xyz/img/aventador.jpg",
      name: "911",
      annee: "2020",
    },
    {
      id: 3,
      type: "sell",
      src: "https://vergoz.xyz/img/ds21.jpg",
      name: "911",
      annee: "2020",
    },
    {
      id: 4,
      type: "rent",
      src: "https://vergoz.xyz/img/jeepwillys.jpg",
      name: "911",
      annee: "2020",
    },
    {
      id: 5,
      type: "sell",
      src: "https://vergoz.xyz/img/mustang1966.jpg",
      name: "911",
      annee: "2020",
    },
  ];
  const [state, setState] = useState(tout);
  const handleBtns = (e)=>{
    let word=e.target.value;
    if(word === 'all'){
        setState(tout)
    }
    else if(word === 'rent'){
        const filtered = tout.filter(item=>item.type==='rent');
        setState(filtered);
    }
    else if(word === 'sell'){
        const filtered = tout.filter(item=>item.type==='sell');
        setState(filtered);
    }
  }
  return (
    <div class="container mx-auto">
      <div className="filter-container my-2 sticky">
        <button
          value="all"
          className="rounded-lg border-2 p-2 mr-2 active:bg-white active:text-black"
          onClick={handleBtns}
        >
          Tous
        </button>
        <button
          value="rent"
          className="rounded-lg border-2 p-2 mr-2 active:bg-white active:text-black"
          onClick={handleBtns}
        >
          A louer
        </button>
        <button
          value="sell"
          className="rounded-lg border-2 p-2 mr-2 active:bg-white active:text-black"
          onClick={handleBtns}
        >
          A vendre
        </button>
      </div>
      <div class="lg:grid lg:grid-cols-3 space-y-2 lg:space-y-0 lg:gap-1 mb-10 ">
        {state.map((item) => (
          <div class="w-full rounded hover:shadow-2xl border-2" key={item.key}>
            {item.type === "sell"  &&
                <p className="absolute bg-green-600 text-black p-2 text-m rounded-br-lg">
                A vendre
                </p>
            }
            {item.type === "rent"  &&
                <p className="absolute bg-orange-400 text-black p-2 text-m rounded-br-lg">
                A louer
                </p>
            } 
            <img src={item.src} alt={item.name} />

            <div className="p-3 hover:from-black hove:to-blue-100 flex justify-between">
              <h3>{item.name}</h3>
              <h4>{item.annee}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
