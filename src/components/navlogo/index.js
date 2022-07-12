import React from "react";
const NavLogo = () => {
  return (
    <>
        <div div className="absolute top-0 sm:left-10">
            <img src={require("../../logo.svg").default} width="45%" alt="" />
        </div>
    </>
  );
};

export default NavLogo;
