import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (

    <article className='articulo' key={producto.id}>
    

    <p className='nombres'> {producto.title}</p>
    <p> {producto.categori}</p>
    
    <img className='imagenes' src={producto.image} />
    <p>$ {producto.price}</p>
    <button><Link to="/item/id">ver mas</Link> </button>
    

 </article>
  )
}

export default Item