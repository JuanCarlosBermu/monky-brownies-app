import React,{createContext,useState, useContext, Children} from "react";

// Creamos el contexto
const CartContext = createContext();

//Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
    const[cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
        );
};

export const useCart = () => useContext(CartContext);