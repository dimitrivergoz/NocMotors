import React from "react";
import { useParams, Link } from "react-router-dom";
import DataEvents from "../DataEvents";
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
        className="shadow-lg rounded-lg border-2"
      /> 
    );
  }
  return (
    <div>
      <div className="mt-20 mb-10 mx-2 lg:mx-[200px]" id="events">
        <div className="flex flex-row items-baseline ml-5">
          <Link to={`/NocMotors/events/`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 shadow-lg rounded-lg border-2 mb-5"
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
        <div className="gap-5 text-gray-100">
          <div
            href="#"
            className="flex flex-col items-center md:flex-row rounded-lg border-2 shadow-md"
          >
            <img
              className=" rounded-t-lg object-fit h-[650px]"
              src={DataEvents[id].front_img}  
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal" >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {DataEvents[id].name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {DataEvents[id].desc}
              </p>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:space-y-0 mb-10 mt-4 gap-4">
            {items}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetail;
