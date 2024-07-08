import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config';

export const DatosComprador = () => {

  let {carrito, actualizarPrecioTotal} = useContext(CartContext)
  const {register, handleSubmit} = useForm();
  let [consultaId, setConsultaId] = useState("");

  const comprar = (data) =>{

    const contacto = {
      cliente: data,
      productos: carrito,
      fechaConsulta: Timestamp.now(),
      precioTotal: actualizarPrecioTotal()
    }

    const cargarConsulta = collection(db, "pedidos");
    addDoc(cargarConsulta, contacto)
    .then((res) =>
      {
        setConsultaId(res.id);
      }
  )     


  }
  return (
    <div>
    <div>Datos del comprador</div>
    <form className="formulario-compra" onSubmit={handleSubmit(comprar)}>
            <h5>Para poder finalizar la compra, necesitamos que completes con tus siguientes datos:</h5>
            <p></p>
            <div className="input-group">
              <h6>Nombre y apellido</h6>
              <input
                type="text"
                placeholder="Ingresar nombre"
                {...register('nombre', { required: true })}
                />
            </div>
            <div className="input-group">
              <h6>Celular</h6>
              <input
                type="tel"
                placeholder="Ingresar número de celular"
                {...register('celular', { required: true })}
                />
            </div>
            <div className="input-group">
              <h6>Correo electrónico</h6>
              <input
                type="email"
                placeholder="Ingresar correo"
                {...register('correo', { required: true })}
                />
            </div>
            <div className="input-group">
              <h6>Dirección de entrega</h6>
              <input
                type="text"
                placeholder="Ingresar dirección"
                {...register('direccion', { required: true })}
                />
            </div>
            <div className="input-group">
              <h6>N°</h6>
              <input
                type="tel"
                placeholder=""
                {...register('correo', { required: true })}
                />
            </div>
            <button type="submit">FINALIZAR COMPRA</button>
            { consultaId ? consultaId : ""}
          </form>

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
            <div className='product-cantidad'>{prod.cantidad}</div>
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
      </div>
    </div>
      </div>
  )
}
