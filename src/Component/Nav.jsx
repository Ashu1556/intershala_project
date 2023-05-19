import React from "react";
import "./navbar.css";
import ashu from "./Assets/ashu.jpg";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="image">
        <img src={ashu} alt="" />
      </div>
    </div>
  );
};

export default Nav;
