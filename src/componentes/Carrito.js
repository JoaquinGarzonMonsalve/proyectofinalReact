import React from "react";
import { useCarrito } from "./CustomProvider";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, vaciarCarrito, eliminarProducto } = useCarrito();
  return (
    <div>
      <ul>
        {carrito.map((item) => {
          return (
            <li key={item.title} className="cartProducto">
              <h1>{item.title}</h1>
              <img
                src={item.image}
                alt={item.title}
                className="cartImagenesCarrito"
              />
              <h1>Cantidad: {item.cantidad}</h1>
              <h1>Precio: {item.price}</h1>
              <button
                onClick={() => eliminarProducto(item)}
                className="botonesDetalle"
              >
                Eliminar producto
              </button>
            </li>
          );
        })}
      </ul>
      {carrito.length === 0 ? (
        <h1>No hay productos</h1>
      ) : (
        <>
          <h1>
            Total: ${" "}
            {carrito
              .map((item) => item.cantidad * item.price)
              .reduce((a, b) => a + b, 0)}
          </h1>
          <div className="botoneraDetalle">
            <Link to="/checkout" className="aNone botonesDetalle">
              Confirmar compra
            </Link>
            <button onClick={vaciarCarrito} className="botonesDetalle">
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
