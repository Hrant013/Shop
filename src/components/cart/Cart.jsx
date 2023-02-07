import CartItem from "./CartItem/CartItem";

export default function Cart({ cart, setCart, price }) {

  const handleDelete = (index) => {
    setCart(cart.filter((val , id) => id !== index));
  }




  return (
    <div className='shop_cart'>
      <h3>Cart Items</h3>
      <div>
        {cart.map((product, index) => {
          return (
            <CartItem title={product.title} price={product.price} image={product.image} id={product.id} handleDelete={handleDelete} index={index}/>
          )
        })}
      </div>
    </div>
  )
}
