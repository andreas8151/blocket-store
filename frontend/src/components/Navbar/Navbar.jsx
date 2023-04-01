import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div id="navContainer">
      <div id="logo"></div>
      <div id="navLinks">
        <a href="/">Home</a>
        <a href="/">Products</a>
      </div>
      <div>
        <a href="/">Logout</a>
      </div>
    </div>
  );
}

export default Navbar;
