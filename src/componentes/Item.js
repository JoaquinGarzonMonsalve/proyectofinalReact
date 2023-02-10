import React from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "./CustomProvider";

const Item = ({ producto }) => {
  const { agregarAlCarrito } = useCarrito();

  const addProduct = () => {
    agregarAlCarrito(producto, 1);
  };
  return (
    <article className="articulo" key={producto.id}>
      <p className="nombres"> {producto.title}</p>
      <p> {producto.category}</p>

      <img className="imagenes" src={producto.image} alt={producto.title} />
      <p>$ {producto.price}</p>
      <div className="botoneraDetalle">
        <button onClick={addProduct} className="botonesDetalle">
          Añadir al carrito
        </button>
        <Link to={`/item/${producto.id}`} className="botonesDetalle aNone">
          Ver mas
        </Link>
      </div>
    </article>
  );
};

export default Item;
