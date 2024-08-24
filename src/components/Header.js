import{ Link, NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/logo.png';
import { useCart } from '../context/CartContext';
export const Header = () => {
  const {cartList} = useCart();
  return (
    <header className='header'>
  
        <Link to="/" className='logo'>
        <img src={Logo} alt="Logo"/>
        <span>Shopping Cart</span>
        </Link>

      <nav className='navigation'>
        <NavLink to="/" className="link">Home</NavLink   >
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>

      <div>
      <Link to="/cart" className='items'>
      <span>Cart: {cartList.length}</span>
        </Link>
      </div>

    </header>
  )
}

