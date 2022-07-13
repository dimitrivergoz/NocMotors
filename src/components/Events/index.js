import React, {useEffect} from "react";
import DataEvents from "../DataEvents"
import {Link } from "react-router-dom";
import NavLogo from "../navlogo";
import SectionContact from "../SectionContact";
function Events() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="my-20" id="evenements">
      <NavLogo/>
        <div className="flex flex-row justify-between text-gray-100 pt-5">
          <h2 className="text-xl md:text-3xl mb-3 ml-5">Evènements</h2>
        </div>

        <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 sm:gap-2 gap-5 xl:grid-cols-4 xl:gap-3 mx-2 text-gray-100">
          {DataEvents.map((link) => (
            <Link to={`/NocMotors/events/${link.id}`}>
            <div className="shadow-lg shadow-lg rounded-lg border-2 border-grey-400 opacity-60 hover:opacity-100">
              <img
                className="object-cover sm:w-[450px] sm:h-[500px] w-full" 
                src={link.front_img}
                alt={link.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{link.name}</div>
                <p className="text-gray-100 text-base mb-3">{link.st}</p>
                <Link className="rounded-lg border-2 p-2" to={`/NocMotors/events/${link.id}`}>
                  {link.type}
                </Link>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <SectionContact/>
    </>
  );
}

export default Events;
