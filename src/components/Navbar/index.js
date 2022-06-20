
import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../Button";

function Navbar() {
  let Links = [
    { name: "ACCUEIL", link: "/", numero:"00" },
    { name: "SERVICES", link: "/", numero:"01" },
    { name: "VEHICULES", link: "/", numero:"02" },
    { name: "EVENEMENTS", link: "/", numero:"03" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <header class="primary-header flex z-10">
      <div onClick={()=>setOpen(!open)} className="absolute text-4xl right-8 top-6 z-30 cursor-pointer md:hidden">
        <ion-icon name={open ? 'close':'menu' }></ion-icon>
      </div>
      <nav className="nav-bar">
 
          <ul id="primary-navigation" className={`primary-navigation flex transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px] opacity-0'} `}>
            {Links.map((link)=>(
              <li className="active" id="{link.name}">
              <a
                class="ff-sans-cond uppercase text-white letter-spacing-2"
                href="{link.link}"
              >
                <span aria-hidden="true">00</span>{link.name}
              </a>
            </li>
            ))}
          
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
