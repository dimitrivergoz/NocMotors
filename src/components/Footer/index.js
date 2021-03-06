import React from "react";
import {Link } from "react-router-dom";
function Footer() {
  return (
    <>
    <div className="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center px-5 py-2 text-sm text-gray-100">
        <div className="mb-4 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
        <Link to="/NocMotors/infos" className="mx-2.5">
            Mentions légales
          </Link>
          <Link to="/NocMotors/credits" className="mx-2.5">
            Credits
          </Link>
        </div>
        <p>&copy; Noc Motors 2022</p>
      </div>
      </>
  );
}

export default Footer;