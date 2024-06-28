import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

 const [carrito, setCarrito] = useState([]);


    useEffect(()=>
        {           
                        
        }
    ), [carrito];

    const notificacionItemCargado = () => 
        Toastify({
          text: "Se ha cargado el item.", 
          duration: 3000,
          gravity: "bottom", 
          position: "left", 
          style: {
            background: "red",
            width: "250px",
          },
        }).showToast();;
   
      const guardarItemCarrito = (producto) =>{
  
        notificacionItemCargado();
  
      for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === producto.id) {
          const nuevoCarrito = [...carrito];
          nuevoCarrito[i].cantidad++;
          setCarrito(nuevoCarrito);
          console.log(nuevoCarrito);
          return; 
        }
      } 
        producto.cantidad = 1;
        setCarrito([...carrito, producto]);
        actualizarCantidadCarrito();        
      }

      const actualizarCantidadCarrito = () =>{
        let cantidad = 0;
  
        if (carrito){
          for (let i = 0; i < carrito.length; i++){
            cantidad = carrito[i].cantidad + cantidad;
          }
        }
  
        return cantidad;
      }



    return(
        <CartContext.Provider value={{guardarItemCarrito, actualizarCantidadCarrito}}>
            {children}
        </CartContext.Provider>
    )

}