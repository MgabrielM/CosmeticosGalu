import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Productos = () => {
    const { productos = [], marcas, guardarItemCarrito, botonMenosCantidadCarrito } = useContext(CartContext);
    const [catalogo, setCatalogo] = useState(productos);

    const menosCantidadItem = (producto) => {
        botonMenosCantidadCarrito(producto);
    };

    const masCantidadItem = (producto) => {
        guardarItemCarrito(producto);
    };

    const enviarMarca = (marcaProducto) => {        

        if (marcaProducto === "Todas"){
            setCatalogo(productos);            
        } else {
            const catalogoFiltrado = productos.filter((doc) => doc.marca.toString() === marcaProducto.toString());
            setCatalogo(catalogoFiltrado);
        }
    };

    useEffect(() => {
        if (catalogo.length === 0) {
            setCatalogo(productos);
        }
    }, [productos]);

    return (
        <div className='contenedor-contenido-productos'>
            <h3>CATALOGO DE PRODUCTOS</h3>
            <div className='contenedor-productos'>
                <div className='contenedor-marcas'>
                    <button onClick={()=> enviarMarca("Todas")}>Todas las marcas</button>
                    {marcas ? (
                        marcas.map((doc) => (
                            <div key={doc.nombre}>
                                <button onClick={() => enviarMarca(doc.nombre)}>{doc.nombre}</button>
                            </div>
                        ))
                    ) : (
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}
                </div>
                    <div className="product-container">
                        {catalogo.length > 0 ? (
                            catalogo.map((prod) => (
                                <div className="product-card" key={prod.id}>
                                    <div className="image-container">
                                        <img
                                            src={`images/${prod.idImagen}.jpg`}
                                            alt="Nombre del Producto"
                                            className="product-image"
                                        />
                                    </div>
                                    <div className="product-details">
                                        <h2 className="product-name">{prod.nombre}</h2>
                                        <p className="product-category">Marca: {prod.marca}</p>
                                        <p className="product-brand">Categoría: {prod.categoria}</p>
                                        <p className="product-price">Precio: ${prod.precio}</p>
                                        <div className='product-cantidad'>
                                            <button className='button-producto-menos' onClick={() => menosCantidadItem(prod)}>
                                                -
                                            </button>
                                            <div>{prod.cantidad > 0 ? prod.cantidad : "0"}</div>
                                            <button className='button-producto-mas' onClick={() => masCantidadItem(prod)}>
                                                +
                                            </button>
                                        </div>
                                        <Link to={`/productos/${prod.id}`} prod={{ prod }}>Ver + Info</Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="spinner-border text-info" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    );
};