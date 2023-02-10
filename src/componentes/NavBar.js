import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
  return (
    <>
      <div className="contenedor_navbar">
        <h2> DeTodo </h2>
        <nav className={props.isclase}>
          <Link to="/"> HOME</Link>
          <Link to="/productos/ropa"> ropa</Link>
          <Link to="/productos/joyas"> joyas</Link>
          <CartWidget />
        </nav>
      </div>
    </>
  );
};

export default NavBar;
