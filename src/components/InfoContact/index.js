import React from 'react'

function InfoContact() {
  return (
    <>
    <div id="contact" className="rounded-lg shadow-lg my-20 lg:flex lg:flex-row lg:place-self-center">
            <div className="lg:w-3/5 w-full bg-gradient-to-r from-black to-gray-600 lg:from-black lg:via-gray-600 lg:to-transparent rounded-lg text-gray-100 p-12">
                <div className="lg:w-1/2">
                <h3 className="text-2xl font-extrabold mb-1">
                </h3>
                <div className="lg:hidden flex flex-col items-center">
                    <img src="https://nocmotors.com/wp-content/themes/nocmotors/img/logo.svg" alt="" className="h-40" />
                </div>
                <div className="container flex align-items place-self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg> <h3 className="mt-1 text-xl mb-5">Garage situé à Courbevoie (92) </h3>
                      
                </div>
                <div className="mx-auto flex flex-col items-center">
                <p className="leading-loose mb-0 rounded-full">
                    <h4>Noc Motors fournit des véhicules des années 60 à nos jours, pour des locations (shooting, clips, films).
                    Vous souhaitez acheter un véhicule, nous aidons aussi les passionnées à trouver leurs bonheurs.</h4>

                  </p>
                <button className="bg-white py-3 rounded-lg w-full text-black ring-slate-50 mt-10">
                    <a href="#contact" className=" bg-white text-gray-150 p-3 px-5 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          +33 6 81 XX XX XX
                    </a>
                </button>
                <button className="bg-white py-3 rounded-lg w-full text-black ring-slate-50 mt-2">
                    <a href="#contact" className=" bg-white text-gray-150 p-3 px-5 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          jacques@nobile.fr
                    </a>
                </button>
            </div>    
            </div>

            </div>
            <div className="lg:w-2/5 w-full lg:flex lg:flex-row flex-auto hidden">
            <img src={require('../../logo.svg').default} width="70%" alt=""/>
            </div>
        </div>
    </>
  )
}

export default InfoContact