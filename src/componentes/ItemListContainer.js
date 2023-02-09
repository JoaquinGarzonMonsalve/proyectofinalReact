import React from "react";
import ItemList from "./ItemList";
import {useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";



const ItemListContainer = (props) => {
  const [open, setOpen] = useState(true);
  const[producto, setProducto] = useState([]);
  const params=useParams();
  console.log(params.categoria);


  

  useEffect(() =>{

    
    setTimeout(() =>{
      

      const productosCollection =collection(db,"productos")
      
      const productosDb=getDocs(productosCollection);
      console.log(productosDb);

      productosDb
          .then((respuesta) =>{
            
            const producto = []
            
            respuesta.docs.forEach(doc=> {
              // const producto = doc.data()
              // producto.id=doc.id;
              // console.log(producto);

              // const producto={...doc.data(), id:doc.id}
              
              // producto.push(product);

              const productoo=respuesta.docs.map(doc=>({...doc.data(), id:doc.id}))

              if(params.categoria=="ropa"){
                setProducto(productoo.category.filter(params.categoria))
                console.log("if ropa")
                
              }

              else if(params.categoria=="joyas"){
                setProducto(productoo.category.filter(params.categoria))
                console.log("if joyas")
              }

              else{
                console.log("ningun else")
              }

             
              setProducto(productoo)
              setOpen(false);
              
             

            });

          })
          .catch(err =>{('error')});
      // const productos=fetch('https://fakestoreapi.com/products/')
      // console.log("cargando base de datos")

      // productos
      //       .then(res=>res.json())
            
      //       .then(res=> setProducto(res))
            
      //       .catch((error) => console.log(error))
            
      //       .finally(() =>
      //       {   
              
      //         console.log("promesa terminada")
      //         setOpen(false)
      //         console.log(producto)
      //       })

    },2000)

    
  },[params])
  
      // create a array of products

  

  return (
    <div className="contendor">
      <h1>{open ? "cargando ": " termino de cargar "}</h1>

      {console.log(producto)}
      <ItemList producto={producto}/>
      
      
    
    
    </div>
    

  );
};
export default ItemListContainer;
