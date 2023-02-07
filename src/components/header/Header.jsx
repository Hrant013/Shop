import React, { useState } from 'react'
import { MdOutlineShoppingCart} from "react-icons/md" 
import Cart from '../cart/Cart'
import { BiCategory } from "react-icons/bi"



export default function Header({cart, setCart}) {
    const [cartOpen, setCartOpen] = useState(false)

    const openCart = () => {
        setCartOpen(!cartOpen)
    }

    const [categoriesOpen, setCategoriesOpen] = useState(false)

    const openCategories = () => {
        setCategoriesOpen(!categoriesOpen)
    }

    return (
        <header>
            <div className='header'>
                <span className='logo'>MyShop</span>
                <div className='menu'>
                    <MdOutlineShoppingCart onClick={openCart} className={`cart_button ${cartOpen && 'active'}`} />
                    {cartOpen && (
                        <Cart cart={cart} setCart={setCart} />
                    )}
                    <label><BiCategory /></label>
                </div>
            </div>
            <div className='presentation'>
                <div className='presentation_text'>
                    <span>Guaranteed quality</span>
                    <h3 className="pres_low_price">Low prices</h3>
                </div>
            </div>

        </header>
    )
}
