import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const itemReference = doc(itemCollection, id);
    const itemDb = getDoc(itemReference);
    itemDb
      .then((respuesta) => {
        const producto = respuesta.data();
        setItem(producto);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
