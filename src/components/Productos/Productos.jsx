import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Productos = () => {

    const {productos, marcas, guardarItemCarrito, botonMenosCantidadCarrito} = useContext(CartContext);

    const menosCantidadItem = (producto) =>{
        botonMenosCantidadCarrito(producto);
      }
    
      const masCantidadItem = (producto) =>{
        guardarItemCarrito(producto);
      }

  return (
    <div>
        <div>Productos</div>
        <div className='contenedor-productoss'>
            <div>
                {
                    marcas ? marcas.map((doc) => (
                        <div>
                            {doc.nombre}
                        </div>
                    )             )
                    : 
                    <div class="spinner-border text-info" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
            </div>
            <div>
            <div className="product-container">
                {
                    
                    productos ? productos.map((prod) => (
                        
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
            <Link to={`/productos/${prod.id}`} prod={{prod}}>Ver + Info</Link>
        </div>
    </div>
   
                    )):
                    <div class="spinner-border text-info" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
            </div>
            </div>
        </div>
    </div>
)
}
