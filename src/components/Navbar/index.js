import React, { useState } from "react";
import Button from "../Button";

function Navbar() {
  let Links = [
    { name: "ACCUEIL", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "VEHICULES", link: "/" },
    { name: "EVENEMENTS", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className=" z-20 shadow-md w-full fixed top-0 bg-black left-0 md:px-10px px-7 pt-3">
        <div className="md:flex items-center left-2 justify-between bg-black w-full">
          <div className="">
            <img
              src={require("../../logo.svg").default}
              alt="LOGO"
              className="w-20 pb-4"
            />
          </div>
          <div className="text-3xl absolute right-6 top-5 cursor-pointer md:hidden">
            <ion-icon
              onClick={() => setOpen(!open)}
              name={open ? "close" : "menu-outline"}
            ></ion-icon>
          </div>
            <ul
                className={`md:flex  md:items-right md:pb-2 pb-10 absolute md:static bg-black md:z-auto z-[-1] left-2 w-full md:w-auto md:pl-0 pr-[1rem] text-center transition-all duration-500 ease-in ${
                open ? "opacity-100" : "top-[-490px]"
                } md:opacity-100`}
            >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-6 pt-1.5 text-xl md:my-0 my-7 ">
                <a
                  href={link.link}
                  className=" hover:text-gray-400 duration-500 pl-5"
                >
                  {link.name} 
                </a>
              </li>
            ))}
            <button className='text-black bg-white py-2 px-6  rounded ml-5'>
              Contact
           </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
