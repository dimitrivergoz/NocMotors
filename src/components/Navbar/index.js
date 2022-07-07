import React, { useState } from "react";
import {Link } from "react-router-dom";
function Navbar() {
  let Links = [
    { name: "ACCUEIL", link: "/NocMotors", numero: "00" },
    { name: "SERVICES", link: "/NocMotors/services", numero: "01" },
    { name: "VEHICULES", link: "/NocMotors/voitures", numero: "02" },
    { name: "EVENEMENTS", link: "/NocMotors/events", numero: "03" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <header className="primary-header flex">
        <div
          onClick={() => setOpen(!open)}
          className=" fixed text-4xl right-8 top-6 z-50 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <nav
          className={`${open ? "z-10" : "z-[-1] fixed top-5 right-5 md:z-50"}`}
        >
          <ul
            id="primary-navigation"
            className={`primary-navigation flex transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100 absolute" : "top-[-490px] opacity-0"
            } md:opacity-100 block `}
          >
            {Links.map((link) => (
              <li className="active" id="{link.name}">
                <Link className="hidden md:block" to={link.link}>
                  {link.numero} : {link.name}
                </Link>
                <Link onClick={() => setOpen(!open)} className="block md:hidden" to={link.link}>
                  {link.numero} :  {link.name}
                </Link>
              </li>
            ))}
            <li className="active mr-[-15.5px]" id="{link.name}">
            <Link
                className="uppercase bg-gray-50 text-black md:pl-5 md:pr-2.5 md:py-4 pl-6 pr-3 py-4 rounded-full"
                to="/NocMotors/contact"
              >
                <span aria-hidden="true">Contact</span>
              </Link>
              
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
