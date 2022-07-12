import React from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../Data";
import NavLogo from "../navlogo";
const VehiculesDetail = () => {
  const { id } = useParams();
  const elements = Data[id].img;
  const items = [];
  for (const [index, value] of elements.entries()) {
    console.log(index)
    items.push(
      <img
        src={value}
        alt=""
        className="shadow-lg rounded-lg border-2 sm:object-cover md:h-full w-full"
      />
    );
  }
  return (
    <div>
      <NavLogo/>
      <div className="mt-20 mb-10 mx-2 lg:mx-20 pt-5" id="vehicules">
        <div className="flex flex-row items-baseline">
          <Link to={`/NocMotors/vehicules/`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 shadow-lg rounded-lg border-2 mb-5 "
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
            {Data[id].type === "sell" && (
              <p className="absolute bg-green-600 text-black p-2 text-m rounded-tl-lg rounded-br-lg border-2">
                A vendre
              </p>
            )}
            {Data[id].type === "rent" && (
              <p className="absolute bg-orange-400 text-black p-2 text-m rounded-tl-lg rounded-br-lg border-2">
                A louer
              </p>
            )}
          </div>
          
          <div
            href="#"
            className="flex flex-col items-center md:flex-row rounded-lg border-2 shadow-md"
          >
            <img
              className=" w-full rounded-t-lg h-auto h-[600px] sm:object-cover md:w-[60%]"
              src={Data[id].front_img}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal" >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {Data[id].name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {Data[id].desc}
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

export default VehiculesDetail;
