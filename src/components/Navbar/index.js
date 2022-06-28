
import React, { useState } from "react";
function Navbar() {
  let Links = [
    { name: "ACCUEIL", link: "#home", numero:"00" },
    { name: "SERVICES", link: "#services", numero:"01" },
    { name: "VEHICULES", link: "#vehicules", numero:"02" },
    { name: "EVENEMENTS", link: "#evenements", numero:"03" },
  ];
  let [open, setOpen] = useState(false);
  return (
<>
<header className="primary-header flex">
<div onClick={()=>setOpen(!open)} className="fixed text-4xl right-8 top-6 z-50 cursor-pointer md:hidden">
  <ion-icon name={open ? 'close':'menu' }></ion-icon>
</div>
<nav className={`${open ? 'z-10': 'z-[-1]'}`}>

    <ul id="primary-navigation" className={`primary-navigation flex transition-all duration-500 ease-in ${open ? 'top-20 opacity-100 absolute':'top-[-490px] opacity-0'} md:opacity-100 block `}>
      {Links.map((link)=>(
        <li className="active" id="{link.name}">
        <a
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          href={link.link}
        >
          <span aria-hidden="true">{link.numero}</span>{link.name}
        </a>
      </li>
      ))}
      <li className="active mr-[-14px]" id="{link.name}">
        <a
          class="uppercase bg-gray-50 text-black md:pl-4 md:pr-2 md:py-3.5 pl-6 pr-3 py-4 rounded-full"
          href="#contact"
        >
          <span aria-hidden="true">Contact</span>
        </a>
      </li>
    </ul>
  </nav>
</header>
</>
  );
}

export default Navbar;