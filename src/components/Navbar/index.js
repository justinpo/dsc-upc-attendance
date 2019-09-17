import React from "react";
import "./styles.scss";

import Logo from "../../images/logo.png";

const Navbar = () => (
  <div className="Navbar">
    <div className="Navbar_container">
      <img src={Logo} alt="Logo" className="Navbar_logo" />
    </div>
  </div>
);

export default Navbar;
