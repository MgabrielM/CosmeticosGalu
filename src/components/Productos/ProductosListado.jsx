import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';

export const ProductosListado = ({productos}) => {

  const {guardarItemCarrito, botonMenosCantidadCarrito} = useContext(CartContext);
 
  const menosCantidadItem = (producto) =>{
    botonMenosCantidadCarrito(producto);
  }

  const masCantidadItem = (producto) =>{
    guardarItemCarrito(producto);
  }

  return (
    <div className="product-container">
        <h3>Productos</h3>
          {
          productos ? 
          productos.map(prod => (
          <div className="product-card" key={prod.id}>
              <div className="image-container">
              <img src={`images/${prod.idImagen}.jpg`} alt="Nombre del Producto" className="product-image" />
              </div>
              <div className="product-details">
              <h2 className="product-name">{prod.nombre}</h2>
              <p className="product-category">Marca: {prod.marca}</p>
              <p className="product-brand">Categoría: {prod.categoria}</p>
              <p className="product-price">Precio: ${prod.precio}</p>  
              <div className='product-cantidad'>
                <button className='button-producto-menos' onClick={(e) => menosCantidadItem(prod)}>
                  -
                </button>
                <div>{prod.cantidad > 0 ?  prod.cantidad : "0"}</div>
                <button className='button-producto-mas' onClick={(e) => masCantidadItem(prod)}>
                  +
                </button>
              </div>
              </div>
          </div>
          )
        )
        : "Cargando el portafolio de productos"    
        }
    </div> 
  )
}
