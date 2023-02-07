// import React, { useState } from 'react'
// import Cart from '../cart/Cart';



export default function Product({id, title, price, description, image, setCart, cart}) {
  
  const handleClick = () => {
    setCart((prev) => [...prev, {
      id,
      title,
      price,
      description,
      image,
      
    }])
  }

  return (
    <div className='product'>
      <img src={image} alt="error404" />
      <h2>{title}</h2>
      {/* <p>{description}</p> */}
      <b>${price}</b>
      <button className='add_to_cart' id={id} onClick={handleClick}>Add to cart</button>
    </div>
  )
}
