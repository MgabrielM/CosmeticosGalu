import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

export const ProductosListado = ({productos}) => {

  const { guardarItemCarrito} = useContext(CartContext);
  const handlerCarrito = (prod) =>{
        guardarItemCarrito(prod);
  }
  
  return (
    <div className="product-container">
        <h3>Productos</h3>
          {
          productos ? 
          productos.slice(0,5).map(prod => (
          <div className="product-card" key={prod.id}>
              <div className="image-container">
              <img src={`images/${prod.idImagen}.jpg`} alt="Nombre del Producto" className="product-image" />
              </div>
              <div className="product-details">
              <h2 className="product-name">{prod.nombre}</h2>
              <p className="product-category">Marca: {prod.marca}</p>
              <p className="product-brand">Categoría: {prod.categoria}</p>
              <p className="product-price">Precio: ${prod.precio}</p>
              <button className="add-to-cart" onClick={(e) => handlerCarrito(prod)}>Añadir al Carrito</button>
              </div>
          </div>
          )
        )
        : "Cargando el portafolio de productos"    
        }
    </div> 
  )
}
