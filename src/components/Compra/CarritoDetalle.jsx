import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

export const CarritoDetalle = () => {

    let {carrito, actualizarPrecioTotal} = useContext(CartContext);





  return (
    <div className='contenedor-carrito-detalle'>
      <h4>INFORMACIÓN DE SU CARRITO:</h4>
      <div className='carrito-tabla'>
        <div className='carrito-fila carrito-encabezado'>
          <div className='carrito-celda'>Cantidad</div>
          <div className='carrito-celda'>Marca</div>
          <div className='carrito-celda'>Nombre</div>
          <div className='carrito-celda'>Precio</div>
        </div>
        {carrito.map((prod) => (
          <div className='carrito-fila' key={prod.id}>
            <div className='carrito-celda'>{prod.cantidad}</div>
            <div className='carrito-celda'>{prod.marca}</div>
            <div className='carrito-celda'>{prod.nombre}</div>
            <div className='carrito-celda'>${prod.precio}</div>
          </div>
        ))}
        <div className='carrito-fila carrito-encabezado total'>
          <div className='carrito-celda'></div>
          <div className='carrito-celda'></div>
          <div className='carrito-celda'>TOTAL</div>
          <div className='carrito-celda'>{actualizarPrecioTotal()}</div>
        </div>
            <div className='contenedor-botones'>
                <button className='carrito-boton-volver'>Volver</button>
                <button className='carrito-boton'>Avanzar con la compra</button>
            </div>
      </div>
    </div>
  )
}
