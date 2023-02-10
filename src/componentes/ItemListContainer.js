import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [producto, setProducto] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    let filter;
    if (categoria) {
      filter = query(productosCollection, where("category", "==", categoria));
    } else {
      filter = productosCollection;
    }
    const productosDb = getDocs(filter);
    productosDb
      .then((respuesta) => {
        const productos = respuesta.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProducto(productos);
      })
      .catch((error) => {
        console.log("error");
      });
  }, [categoria]);

  return (
    <div className="contendor">
      {producto.length === 0 ? <h1>Cargando productos...</h1> : null}

      <ItemList producto={producto} />
    </div>
  );
};
export default ItemListContainer;
