import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import React from "react";
import { useCarrito } from "./CustomProvider";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { carrito, vaciarCarrito } = useCarrito();

  const navigate = useNavigate();

  const enviarDatos = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    value.fecha = serverTimestamp();
    value.total = carrito
      .map((item) => item.cantidad * item.price)
      .reduce((a, b) => a + b, 0);
    value.carrito = carrito;
    const ventasCollection = collection(db, "ventas");
    const ventas = value;
    addDoc(ventasCollection, ventas)
      .then((docRef) => {
        console.log("venta agregada", docRef.id);
        vaciarCarrito();
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al agregar venta", error);
      });
  };
  return (
    <div>
      <h1>
        Total: $
        {carrito
          .map((item) => item.cantidad * item.price)
          .reduce((a, b) => a + b, 0)}
      </h1>
      <form onSubmit={enviarDatos}>
        <div className="formInput">
          <label>Nombre:</label>
          <input type="text" required name="nombre" />
        </div>
        <div className="formInput">
          <label>Apellido:</label>
          <input type="text" required name="apellido" />
        </div>
        <div className="formInput">
          <label>Telefono:</label>
          <input type="text" required name="telefono" />
        </div>
        <div className="formInput">
          <label>Email:</label>
          <input type="text" required name="email" />
        </div>
        <div className="formInput">
          <label>Direccion:</label>
          <input type="text" required name="direccion" />
        </div>
        <div className="formInput">
          <label>Localidad:</label>
          <input type="text" required name="localidad" />
        </div>
        <div className="formInput">
          <label>Provincia:</label>
          <input type="text" required name="provincia" />
        </div>
        <div className="formInput">
          <label>Codigo Postal:</label>
          <input type="text" required name="codigoPostal" />
        </div>
        <div className="formInput">
          <label>Tarjeta:</label>
          <input type="text" required name="tarjeta" />
        </div>
        <div className="formInput">
          <label>Fecha de vencimiento:</label>
          <input type="text" required name="fechaVencimiento" />
        </div>
        <div className="formInput">
          <label>CVV:</label>
          <input type="text" required name="cvv" />
        </div>
        <button type="submit" className="botonesDetalle">
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
