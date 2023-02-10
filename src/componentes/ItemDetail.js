import React, { useState } from "react";
import { useCarrito } from "./CustomProvider";

const ItemDetail = ({ item }) => {
  const { agregarAlCarrito } = useCarrito();
  const [count, setCount] = useState(1);

  const removeCount = () => {
    setCount(count - 1);
  };

  const addCount = () => {
    setCount(count + 1);
  };

  const addProduct = () => {
    agregarAlCarrito(item, count);
  };

  if (!item) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div className="itemDetail">
      <div className="itemDescripcion">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>Precio: ${item.price}</p>
        <p>Categoria: {item.category}</p>
        <div className="botoneraDetalle">
          <button onClick={removeCount} className="botonesDetalle">
            -
          </button>
          <span>{count}</span>
          <button onClick={addCount} className="botonesDetalle">
            +
          </button>
          <button onClick={addProduct} className="botonesDetalle">
            Agregar al carrito
          </button>
        </div>
      </div>
      <img src={item.image} alt={item.title} className="cartImagenes" />
    </div>
  );
};

export default ItemDetail;
