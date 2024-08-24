import './Products.css'
import { useCart } from "../context/CartContext";
import { useEffect, useState } from 'react';
export const Products = ({product}) => {
    const { id,name, price, image} = product
    const { addToCart, removeFromCart, cartList } = useCart();
    const [isAdded, setIsAdded] = useState(false);
    useEffect(() => {
      const check =cartList.find((cartitem)=>{return cartitem.id === id})
      if(check){
        setIsAdded(true);
      }else{
        setIsAdded(false);
      }
    },[cartList,id])

  return (
    <div className="products">
        <img src={image} alt={name} />
        <p>{name}</p>
        <div className="quantity">
            <span className='price'>{price}$</span>
            {isAdded ?  <button className='remove' onClick={() => {removeFromCart(product)}}>Remove</button>: <button className='add' onClick={() => {addToCart(product)}}>Add To Cart</button>}
           
        </div>      
    </div>
  )
}

