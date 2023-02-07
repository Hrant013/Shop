import React from 'react'
import { FaTrash, FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { useState } from "react";



export default function CartItem({image, title, price, id, index, handleDelete}) {
    

  const [count, setCount] = useState(1)

    const handlePlus = () => {
        setCount(count + 1);
      }
    
      const handleMinus = () => {
        if(count > 1){
          setCount(count - 1)
        }
      }

  return (
    <div className="cart_items">
              <img src={image} alt="" />
              <h2>{title}</h2>
              <b>${price * count}</b>
              <FaTrash className="delete_button" id={id} onClick={() => handleDelete(index)} />
              <div className="counter_div">
                <FaMinusSquare id={id} onClick={handleMinus} />
                <h2>{count}</h2>
                <FaPlusSquare id={id} onClick={handlePlus} />
              </div>
            </div>
  )
}
