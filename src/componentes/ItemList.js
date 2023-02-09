import React from 'react'
import Item from './Item'

const ItemList = ({producto}) => {
  return (
    <div className='itemList'>

            { producto.map((producto)=>{

            return(

                <Item producto={producto} key={producto.id}/>


                     
                )
  
})}


    </div>
  )
}

export default ItemList