import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/config"
import React, { useEffect, useState } from 'react'

export const Productos = () => {

    const [productos, setProductos] = useState(undefined);

    // useEffect(() =>{
    //     const productosRef = collection(db, "productos");

    //     getDocs(productosRef)
    //     .then((res) => 
    //         setProductos(res.docs.map((doc) => 
    //             {
    //                 return { ...doc.data(), id: doc.id }
    //             }
    //         ))
    //     )
    // }, [])

  return (
    <>
{/*         
        <div className="product-container">
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
                <button className="add-to-cart">Añadir al Carrito</button>
                </div>
            </div>
            )
        )
        : "Cargando el portafolio de productos"    
        }
        </div> */}
    </>
  )
}
