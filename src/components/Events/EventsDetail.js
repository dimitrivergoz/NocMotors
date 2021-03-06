import React, {useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import DataEvents from "../DataEvents";
import {styleSell, styleRent, styleSold} from "../Style"
import NavLogo from "../navlogo";
const EventsDetail = () => {
  const { id } = useParams();
  const elements = DataEvents[id].img;
  const items = [];
  for (const [index, value] of elements.entries()) {
    console.log(index)
    items.push(
      <img
        src={value}
        alt=""
        className="shadow-lg rounded-lg border-2 w-full sm:mb-0 mb-4"
      /> 
    );
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <NavLogo/>
      <div className="mt-20 mb-10 mx-2 lg:mx-20 pt-5">
        <div className="flex flex-row items-baseline">
          <Link to={`/NocMotors/vehicules/`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 shadow-lg rounded-lg border-2 mb-5 mt-5 sm:mt-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </Link>
        </div>
        <div className="gap-5 text-gray-100 mx-auto">
          <div>
            {DataEvents[id].type === "sell" && (
              <p className={styleSell}>
                A vendre
              </p>
            )}
            {DataEvents[id].type === "rent" && (
              <p className={styleRent}>
                A louer
              </p>
            )}
            {DataEvents[id].type === "sold" && (
              <p className={styleSold}>
                VENDU
              </p>
            )}
          </div>
          
          <div
            href="#"
            className="flex flex-col items-center md:flex-row rounded-lg border-2 shadow-md"
          >
            {DataEvents[id].type === "sold" && (
              <img
              className=" w-full  rounded-t-lg h-auto h-[600px] sm:object-cover md:w-[60%]"
              src={DataEvents[id].front_img}
              alt=""
              />
            )}
            {DataEvents[id].type !== "sold" && (
            <img
              className=" w-full rounded-t-lg h-auto h-[600px] sm:object-cover md:w-[60%]"
              src={DataEvents[id].front_img}
              alt=""
            />
            )}
            <div className="flex flex-col justify-between p-4 leading-normal" >
            {DataEvents[id].type === "sold" && (
                <h3 className="italic underline">**Attention ce v??hicule a d??j?? ??t?? vendu !!!**</h3>
              )}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {DataEvents[id].name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {DataEvents[id].desc}
              </p>
            </div>
          </div>
          <div className="lg:grid md:grid-cols-2  space-y-2 lg:space-y-0 lg:gap-4 mb-10 mt-4 rounded-lg">
            {items}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetail;
