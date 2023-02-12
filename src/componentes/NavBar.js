import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
  return (
    <>
      <div className="contenedor_navbar">
        <h2 className="nombreTienda"> MODA FGM </h2>
        <nav className={props.isclase}>
          <Link to="/"> HOME</Link>
          <Link to="/productos/ropa"> Ropa</Link>
          <Link to="/productos/joyas"> Joyas</Link>
          <CartWidget />
        </nav>
      </div>
    </>
  );
};

export default NavBar;
