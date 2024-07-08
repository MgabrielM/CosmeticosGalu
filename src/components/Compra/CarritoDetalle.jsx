import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export const CarritoDetalle = () => {

    let {carrito, actualizarPrecioTotal, guardarItemCarrito, botonMenosCantidadCarrito} = useContext(CartContext);

    const menosCantidadItem = (producto) =>{
      botonMenosCantidadCarrito(producto);
    }
  
    const masCantidadItem = (producto) =>{
      guardarItemCarrito(producto);
    }    

    const navigate = useNavigate();

    const avanzarCompra = () => {
      navigate("/informacionCompra");
    }

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
            <div className='product-cantidad'>
                <button onClick={(e) => menosCantidadItem(prod)}>
                  -
                </button>
                <div>{prod.cantidad}</div>
                <button onClick={(e) => masCantidadItem(prod)}>
                  +
                </button>
              </div>
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
                <Link to="../../productos">Seguir Comprando</Link>
                <button className='carrito-boton' onClick={avanzarCompra} >Avanzar con la compra</button>
            </div>
      </div>
    </div>
  )
}
