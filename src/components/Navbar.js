import React from "react";
import Logo from "../images/Ellipse 460.png";

const Navbar = () => {
  return (
    <div className="nav">
      <nav className=" app__flex-2">
        <div className="app__flex">
          <img src={Logo} alt="Navbar-Logo" width={53} height={53} />
          <p style={{ color: "#0076A7" }} className="p-text">
            HomeTech
          </p>
        </div>
        <div>
          <p className="p-text">About us</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
