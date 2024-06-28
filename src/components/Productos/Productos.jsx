import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/config"
import React, { useContext, useEffect, useState } from 'react'
import { ProductosListado } from './ProductosListado';

export const Productos = () => {

    const [productos, setProductos] = useState(undefined);

    useEffect(() =>{
        const productosRef = collection(db, "productos");

        getDocs(productosRef)
        .then((res) => 
            setProductos(res.docs.map((doc) => 
                {
                    return { ...doc.data(), id: doc.id }
                }
            ))
        )
    }, [])


  return (
    <>      
      <ProductosListado productos={productos}/>                    
    </>
  )
}
