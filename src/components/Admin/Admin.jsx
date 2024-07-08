import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config';

export const Admin = () => {

  let [pedidos, setPedidos] = useState([]);
  let [baseProductos, setBaseProductos] = useState([]);

  useEffect(()=>{

    const referenciaPedidos = collection(db, "pedidos");
    getDocs(referenciaPedidos)
    .then((res) =>
      setPedidos(res.docs.map((doc) =>{
        return {...doc.data(), id: doc.id}
      }))
    )

    const referenciaProductos = collection(db, "productos");
    getDocs(referenciaProductos)
    .then((res) =>
      setBaseProductos(res.docs.map((doc) =>{
        return {...doc.data(), id: doc.id}
      }))
    )

  })

  console.log(pedidos);

  return (
    <div>
      <h4>Panel de gestion</h4>
      <div>
        <h5>Cargar productos</h5>
        <div>

        </div>
      </div>

      <div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Pedidos creados
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      {pedidos.length > 0 ? 
      pedidos.map((pedido) => (
        <div>
          <p>
            ID pedido
            {pedido.id}
          </p>
          <p>
            Total
            {pedido.precioTotal}
          </p>          
        </div> 
      )) 
      
      : 
      <div class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>}  
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Productos cargados
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      {baseProductos.length > 0 ? 
      baseProductos.map((prod) => (
        <div>
          <p>
            Producto: 
            {prod.idProducto}
          </p>
          <p>
            Precio: 
            {prod.precio}
          </p>  
          <p>
            Categoria: 
            {prod.categoria}
          </p>
          <p>
            Marca:  
            {prod.marca}
          </p>        
        </div> 
      )) 
      : 
      <div class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>}        
      </div>
    </div>
  </div>  
</div>
      </div>
    </div>
    
  )
}
