import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config';
import { useForm } from 'react-hook-form';

export const Admin = () => {

  let [pedidos, setPedidos] = useState([]);
  let [baseProductos, setBaseProductos] = useState([]);
  const {register, handleSubmit} = useForm();

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

  const agregarProducto = (item) =>{

    console.log(item);

    const cargarConsulta = collection(db, "productos");
    addDoc(cargarConsulta, item)
    .then((res) =>
      {
        console.log("Producto cargado con el ID: "+ res.id)
      })
  }


  return (
    <div className='contenedor-creacion-productos'>
      <h4>Panel de gestion</h4>
      <div>
        <h5>Cargar productos</h5>
        <div>
        <form className="formulario-ingreso-producto" onSubmit={handleSubmit(agregarProducto)}>
            <div className="input-group">
              <h6>Nombre de producto</h6>
              <input
                type="text"
                {...register('nombre', { required: true })}
              />
            </div>
            <div className="input-group">
              <h6>ID producto</h6>
              <input
                type="number"
                {...register('idProducto', { required: true })}
              />
            </div>
            <div className="input-group">
              <h6>Precio</h6>
              <input
                type="number"
                {...register('precio', { required: true })}
              />
            </div>
            <div className="input-group">
              <h6>Marca</h6>
              <input
                type="text"
                {...register('marca', { required: true })}
              />
            </div>
            <div className="input-group">
              <h6>Clasificación</h6>
              <input
                type="text"
                {...register('clasificacion', { required: true })}
              />
              </div>
              <div className="input-group">
              <h6>Categoria</h6>
              <input
                type="text"
                {...register('categoria', { required: true })}
              />
              </div>
            <div className="input-group">
              <h6>ID imagen</h6>
              <input
                type="number"
                {...register('idImagen', { required: true })}
              />
            </div>
            <div className="input-group">
              <h6>Detalle</h6>
              <textarea
                {...register('detalle')}
              />
            </div>
            <button type="submit">Agregar producto</button>
          </form>
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
      //   <div className='contenedor-productosDB'>
      //     <p>
      //       ID pedido
      //       {pedido.id}
      //     </p>
      //     <p>
      //       Items diferentes
      //       {pedido.productos.length}
      //     </p>
      //     <p>
      //       Total
      //       {pedido.precioTotal}
      //     </p> 
      //     <p>
      //       Total
      //       {pedido.precioTotal}
      //     </p>           
      //   </div> 
      // )) 
        <div key={pedido.idProducto} className="product">
            <p>ID pedido: {pedido.id}</p>
            <p>Items diferentes: {pedido.productos.length}</p>
            <p>Precio tota: ${pedido.precioTotal}</p>
        </div>))
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
        <div key={prod.idProducto} className="product">
            <p>ID producto: {prod.idProducto}</p>
            <p>Marca: {prod.marca}</p>
            <p>Categoría: {prod.categoria}</p>
            <p>Imagen: {prod.idImagen}</p>
            <p>Precio: ${prod.precio}</p>
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
