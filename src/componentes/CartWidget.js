import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCarrito } from "./CustomProvider";

const CartWidget = () => {
  const { cantidad } = useCarrito();
  return (
    <Link to="/carrito">
      <div className="container_carrito">
        <span className="carrito">
          <FaShoppingCart />
        </span>
        <span className="cantidad">{cantidad}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
