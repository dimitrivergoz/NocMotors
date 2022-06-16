import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
        <Navbar />
        <Hero />

    <section>
        <div id="noc" className="container flex flex-col px-10 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row text-white pt-6">
            <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="md:w-1/8 flex flex-col justify-center font-bold -mb-8">
                    <img src={require('./logo.svg').default} width="35%" alt=""/>
                    Que propose Noc Motors ?
                </h2>
                <p className="max-w-sm md:text-left pr-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, quia fugiat. Nulla, cumque mollitia consequuntur sint dolorem labore eum, itaque incidunt alias pariatur culpa illo quos perferendis odit corporis dignissimos?
                </p>
            </div>
            <div>
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full bg-gray-400 md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-black rounded-full md:py-1 bg-white">
                                01
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden text-black">
                                Track comp
                            </h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block text-white">
                            Track comp
                        </h3>
                        <p className="text-gray-100">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fuga dolores odit beatae quibusdam mollitia iure a quod nihil, ullam rem vel totam voluptatibus itaque sequi similique necessitatibus reiciendis voluptate.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full bg-gray-400 md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-black rounded-full md:py-1 bg-white">
                                02
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden text-black">
                                Track comp
                            </h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block text-white">
                            Track comp
                        </h3>
                        <p className="text-gray-100">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fuga dolores odit beatae quibusdam mollitia iure a quod nihil, ullam rem vel totam voluptatibus itaque sequi similique necessitatibus reiciendis voluptate.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full bg-gray-400 md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-black rounded-full md:py-1 bg-white">
                                03
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden text-black">
                                Track comp
                            </h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block text-white">
                            Track comp
                        </h3>
                        <p className="text-gray-100">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fuga dolores odit beatae quibusdam mollitia iure a quod nihil, ullam rem vel totam voluptatibus itaque sequi similique necessitatibus reiciendis voluptate.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    </section>
    <div className="my-20" id="classNameic-car pr-10 ">
    <div className="flex flex-row justify-between text-gray-100">
        <h2 className="text-3xl mb-3 ml-5">Classic car </h2>
        <a href="#" className="text-xl flex flex-row">
             <p className="">Voir les modèles</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[5px] lg ml-4 mr-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
        </a>
    </div>
    <div className="grid grid-flow-row lg:grid-cols-3 gap-5 xl:grid-cols-3 xl:gap-8 mx-5 text-gray-100">
        <div className="shadow-lg rounded-lg border-2 border-grey-400">
            <a href="#">
                <img src="https://nocmotors.com/wp-content/uploads/2021/07/YPS_0472_yoshipowershot.com-min.jpg" className="rounded-tl-lg rounded-tr-lg"/>
            </a>
            <div className="p-5 hover:from-black hove:to-blue-100 flex justify-between">
                <h3><a href="#">Ford Thunderbird</a></h3>
                <h4>1960</h4>
            </div>
        </div>

        <div className="shadow-lg rounded-lg border-2 border-grey-400">
            <a href="#">
                <img src="https://nocmotors.com/wp-content/uploads/2021/07/YPS_0472_yoshipowershot.com-min.jpg" className="rounded-tl-lg rounded-tr-lg"/>
            </a>
            <div className="p-5 hover:from-black hove:to-blue-100 flex justify-between">
                <h3><a href="#">Ford Thunderbird</a></h3>
                <h4>1960</h4>
            </div>
        </div>

        <div className="shadow-lg rounded-lg border-2 border-grey-400">
            <a href="#">
                <img src="https://nocmotors.com/wp-content/uploads/2021/07/YPS_0472_yoshipowershot.com-min.jpg" className="rounded-tl-lg rounded-tr-lg"/>
            </a>
            <div className="p-5 hover:from-black hove:to-blue-100 flex justify-between">
                <h3><a href="#">Ford Thunderbird</a></h3>
                <h4>1960</h4>
            </div>
        </div>

    </div>
</div>




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
                      </svg> <h3 className="mt-1 ">Garage situé à Courbevoie (92) </h3>
                      
                </div>
                <div className="mx-auto flex flex-col items-center">
                <p className="leading-loose mb-8 rounded-full">
                    <h4>Noc Motors fournit des véhicules des années 60 à nos jours, pour des locations (shooting, clips, films).
                    Vous souhaitez acheter un véhicule, nous aidons aussi les passionnées à trouver leurs bonheurs.</h4>

                  </p>
                <button className="bg-white py-3 rounded-lg w-8/12 sm:w-10/12 text-black ring-slate-50 mt-10">
                    <a href="#contact" className=" bg-white text-gray-150 p-3 px-5 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          +33 6 81 XX XX XX
                    </a>
                </button>
                <button className="bg-white py-3 rounded-lg w-8/12 sm:w-10/12 text-black ring-slate-50 mt-2">
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
                <img src="https://nocmotors.com/wp-content/themes/nocmotors/img/logo.svg" alt="" width="70%" />
            </div>
        </div>
        <div className="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center px-5 py-2 text-sm text-gray-100">
            <div className="mb-4 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
                <a href="#" className="mx-2.5">Mentions légales</a>
                <a href="#" className="mx-2.5">Credits</a>
            </div>
            <p>&copy; Noc Motors 2022</p>
        </div>


    </>
  );
}

export default App;
