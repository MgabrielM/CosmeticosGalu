import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const DetalleProducto = () => {

    let {id} = useParams();
    const [productoDetalle, setProductoDetalle] = useState([]);

    useEffect(() => {
        const referenciaProducto = doc(collection(db, 'productos'), id);
    
        getDoc(referenciaProducto)
          .then((res) => {
            if (res.exists()) {
              setProductoDetalle(res.data());
            } else {
              console.log('No such document!');
            }
          })
          .catch((error) => {
            console.error('Error getting document:', error);
          });
      }, [id]);
    
      if (!productoDetalle) {
        return <div>Cargando...</div>;
      }
    
      return (
        <div>
          <h2>Detalle del Producto {id}</h2>
          <p>Nombre: {productoDetalle.nombre}</p>
          <p>Descripción: {productoDetalle.detalle}</p>
          <p>Precio: {productoDetalle.precio}</p>
          <Link to="/productos">Volver</Link>
        </div>
      );
    }