import { useTitle } from "../assets/hooks/useTitle"
import { Cartitems } from "../components/Cartitems";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  useTitle("Cart");
   const {total, cartList} = useCart();

  return (
  <main>
    <section className="cart">
    <h1>Cart Items: {cartList.length} ${total}</h1>
      {cartList.map((product) => <Cartitems key={product.id} product={product} />)}
    </section>
  </main>
  
  )
}

 
