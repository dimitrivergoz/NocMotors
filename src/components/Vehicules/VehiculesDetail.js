import React, {useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../Data";
import NavLogo from "../navlogo";
import SectionContact from "../SectionContact";
import {styleSell, styleRent, styleSold} from "../Style"
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
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
            {Data[id].type === "sell" && (
              <p className={styleSell}>
                A vendre
              </p>
            )}
            {Data[id].type === "rent" && (
              <p className={styleRent}>
                A louer
              </p>
            )}
            {Data[id].type === "sold" && (
              <p className={styleSold}>
                VENDU
              </p>
            )}
          </div>
          
          <div
            href="#"
            className="flex flex-col items-center md:flex-row rounded-lg border-2 shadow-md"
          >
            {Data[id].type === "sold" && (
              <img
              className=" w-full  rounded-t-lg h-auto h-[600px] sm:object-cover md:w-[60%]"
              src={Data[id].front_img}
              alt=""
              />
            )}
            {Data[id].type !== "sold" && (
            <img
              className=" w-full rounded-t-lg h-auto h-[600px] sm:object-cover md:w-[60%]"
              src={Data[id].front_img}
              alt=""
            />
            )}
            <div className="flex flex-col justify-between p-4 leading-normal" >
            {Data[id].type === "sold" && (
                <h3 className="italic underline">**Attention ce véhicule a déjà été vendu !!!**</h3>
              )}
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
    <SectionContact/>
    </>
  );
};

export default VehiculesDetail;
