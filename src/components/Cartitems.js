import './Cartitems.css'
import { useCart } from "../context/CartContext";

export const Cartitems = ({product}) => {
  const { removeFromCart } = useCart();
    const { name, price, image} = product;
  
  return (
    <div className='cartitems'>
        <img src={image} alt={name} />
        <p>{name}</p>
        <span>{price}$</span>
        <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  )
}


