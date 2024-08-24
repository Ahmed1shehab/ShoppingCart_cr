import{ useContext, useEffect, useReducer} from 'react';
import { createContext } from 'react';
import {cartReducer} from '../reducer/cartReducer';

const initialState = {
    cartList: JSON.parse(localStorage.getItem('cartList')) || [], // Load from localStorage
    total: JSON.parse(localStorage.getItem('total')) || 0 // Load from localStorage
}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
const [state, dispatch]=useReducer(cartReducer, initialState);
const addToCart = (product) => {
        const updateCartList = state.cartList.concat(product);
        updateTotal(updateCartList);
        dispatch({
            type: "ADD_TO_CART", 
            payload: {
                products: updateCartList
            }
        });
    }
    const removeFromCart = (product) => {
        const updateCartList = state.cartList.filter(current => current.id !== product.id);
        updateTotal(updateCartList);

        dispatch({
            type: "REMOVE_FROM_CART",
             payload: {
               products: updateCartList
             }});
    }
        const updateTotal =(products)=>{
            let total = 0;
            products.forEach(product => total = total +product.price);
            dispatch({
                type: "UPDATE_TOTAL",
                payload: {
                    total
                }
            })
        }
        useEffect(() => {
            localStorage.setItem('cartList', JSON.stringify(state.cartList));
            localStorage.setItem('total',JSON.stringify(state.total));
        },[state.cartList,state.total])
    const value ={
        total: state.total,
        cartList: state.cartList,
        removeFromCart,
        addToCart,
    };
    return(
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
    ) ;
} 
export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}
