import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

 const [carrito, setCarrito] = useState([]);

    const guardarItemCarrito = (item) =>{
        setCarrito([...carrito, item]);
        console.log();
    }    

    useEffect(()=>
        {
            
        }
    ), [];



    return(
        <CartContext.Provider value={{guardarItemCarrito}}>
            {children}
        </CartContext.Provider>
    )

}