import React, { createContext, useState, useContext } from "react";

export const context = createContext();
const Provider = context.Provider;

export const useCarrito = () => {
  const valorDeContexto = useContext(context);
  return valorDeContexto;
};

const CustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  const agregarAlCarrito = (item, count) => {
    if (!carrito.some((e) => e.title === item.title)) {
      item.cantidad = count;
      setCarrito([...carrito, item]);
    } else {
      carrito.find((e) => e.title === item.title).cantidad += count;
    }
    setCantidad(cantidad + count);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setCantidad(0);
  };

  const eliminarProducto = (item) => {
    setCarrito(carrito.filter((e) => e.title !== item.title));
    setCantidad(cantidad - item.cantidad);
  };

  const valorDeContexto = {
    carrito,
    setCarrito,
    cantidad,
    setCantidad,
    agregarAlCarrito,
    vaciarCarrito,
    eliminarProducto,
  };

  return <Provider value={valorDeContexto}>{children}</Provider>;
};

export default CustomProvider;
