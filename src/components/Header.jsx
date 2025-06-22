import React from "react";
import headerImg from "../assets/img/Header.jpg";

function Header() {
  return (
    <div className="header-container">
      <div className="imagen-principal"></div>
      <div className="header-content">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>
  );
}

export default Header;
