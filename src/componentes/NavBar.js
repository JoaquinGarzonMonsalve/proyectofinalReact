import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <>
      <div className="contenedor_navbar">
        <h2> DeTodo </h2>
        <nav className={props.isclase}>
          
          <Link to="/"> HOME</Link>
          <Link to="/productos/ropa"> ropa</Link>
          <Link to="/productos/joyas"> joyas</Link>

          
          <Link to="/carrito" >

            <div className="container_carrito">
            
              <span className="carrito">
                <FaShoppingCart />
              </span>
              <span className="cantidad">4</span>
            </div>
          
          </Link>
          
        </nav>
      </div>
    </>
  );
};

export default NavBar;
