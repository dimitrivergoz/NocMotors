import React from "react";

function Events() {
  let Links = [
    {
      name: "Gainsbourg",
      type: "Film",
      src: "https://vergoz.xyz/img/collab/gainsbourg.jpg",
      st: "80 véhicules",
    },
    {
      name: "Couleur de l'incendie",
      type: "Film",
      src: "https://vergoz.xyz/img/collab/incendiecouleur.jpg",
      st: "sous-titre",
    },
    {
      name: "Publicité One Million",
      type: "Pub",
      src: "https://vergoz.xyz/img/collab/onemillion.jpg",
      st: "sous-titre",
    },
    {
      name: "Porsche Orlinski",
      type: "Collab",
      src: "https://vergoz.xyz/img/collab/porscheorlinski.jpg",
      st: "sous-titre",
    },
  ];
  return (
    <>
      <div className="my-20" id="evenements">
        <div className="flex flex-row justify-between text-gray-100">
          <h2 className="text-xl md:text-3xl mb-3 ml-5">Evènements</h2>
          <a href="#" className="text-xl flex flex-row">
            <h1 className="ml-[20px] md:block hidden underline opacity-80">
              Toutes les collab
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-[5px] lg ml-4 mr-5 inline-block rounded-md border-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 sm:gap-2 gap-5 xl:grid-cols-4 xl:gap-3 mx-6 text-gray-100">
          {Links.map((link) => (
            <div class="shadow-lg shadow-lg rounded-lg border-2 border-grey-400 opacity-60 hover:opacity-100">
              <img
                class="w-[500px] h-[450px] object-cover"
                src={link.src}
                alt={link.name}
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{link.name}</div>
                <p class="text-gray-100 text-base mb-3">{link.st}</p>
                <a href="#" className="rounded-lg border-2 p-2">
                  {link.type}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
