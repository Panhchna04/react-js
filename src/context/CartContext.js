import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        setCartCount((prevCount) => prevCount + 1);
    };
    
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };
    const clearCart = () => {
        setCart([]);
    };
    const getTotalCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };
    const increaseCount = (productId) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === productId 
                    ? { ...item, count: item.count + 1 } 
                    : item
            )
        );
    };

    const decreaseCount = (productId) => {
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === productId 
                    ? { ...item, count: Math.max(1, item.count - 1) } // Ensure count doesn't go below 1
                    : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart,increaseCount, decreaseCount,
         addToCart, removeFromCart,clearCart,getTotalCount, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};