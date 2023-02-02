import React from "react";
import "./header.css";
import LOGO from "../../assets/Brand.png";

const Header = () => {
  return (
    <div className="logo">
      <img src={LOGO} alt="logo" />
    </div>
  );
};

export default Header;
