import React from 'react'

function Gallery() {
  let Links = [
    { name: "ACCUEIL", src: "https://vergoz.xyz/img/911.jpg", st:"sous-titre" },
    { name: "SERVICES", src: "https://vergoz.xyz/img/911.jpg", st:"sous-titre" },
    { name: "VEHICULES", src: "https://vergoz.xyz/img/911.jpg", st:"sous-titre" },
    { name: "EVENEMENTS", src: "https://vergoz.xyz/img/911.jpg", st:"sous-titre" },
    { name: "ACCUEIL", src: "https://vergoz.xyz/img/911.jpg", st:"sous-titre" },
    { name: "SERVICES", src: "https://vergoz.xyz/img/911.jpg", st:"sous-titre" },
    { name: "VEHICULES", src: "https://vergoz.xyz/img/911.jpg", st:"sous-titre" },
    { name: "EVENEMENTS", src: "https://vergoz.xyz/img/911.jpg", st:"sous-titre" },
  ];
  return (
    <>
    <div className="mt-5 mb-5" id="evenements">
        <div className="flex flex-row justify-between text-gray-100">
          <h2 className="text-xl md:text-3xl mb-3 ml-5">Evènements</h2>
          <a href="#" className="text-xl flex flex-row">
            <p className="opacity-20 text-m md:text-m hidden md:block underline">Toutes les collab'</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[5px] lg ml-4 mr-5 inline-block rounded-md border-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        </div>
    <div class="container mx-auto">
    <div class="grid-cols-4  space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2 mx-2">
        <div class="w-full shadow-lg rounded-lg border-2 border-grey-400">
            <img src="https://vergoz.xyz/img/911.jpg"
                alt="image" />
                <h1 className=' absolute text-2xl mt-[-1.5em] ml-[0.5em]'>TEXT</h1>
        </div>
        <div class="w-full col-span-2 row-span-2 shadow-lg rounded-lg border-2 border-grey-400">
            <img src="https://vergoz.xyz/img/911.jpg"
                alt="image" />
                <h1 className=' absolute text-2xl mt-[-1.5em] ml-[0.5em]'>GTEXT</h1>
        </div>
        <div class="w-full shadow-lg rounded-lg border-2 border-grey-400">
            <img src="https://vergoz.xyz/img/911.jpg"
                alt="image" />
                <h1 className=' absolute text-2xl mt-[-1.5em] ml-[0.5em]'>TEXT</h1>
        </div>
        <div class="w-full shadow-lg rounded-lg border-2 border-grey-400">
            <img src="https://vergoz.xyz/img/911.jpg"
                alt="image" />
                <h1 className=' absolute text-2xl mt-[-1.5em] ml-[0.5em]'>TEXT</h1>
        </div>
        <div class="w-full shadow-lg rounded-lg border-2 border-grey-400">
            <img src="https://vergoz.xyz/img/911.jpg"
                alt="image" />
                <h1 className=' absolute text-2xl mt-[-1.5em] ml-[0.5em]'>TEXT</h1>
        </div>
    </div>
</div>

    </>
  )
}

export default Gallery