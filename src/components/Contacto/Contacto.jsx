import React, { useState } from 'react'
import { Timestamp, addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useForm } from 'react-hook-form';


export const Contacto = () => {

    const {register, handleSubmit} = useForm();
    let [consultaId, setConsultaId] = useState("")

    const comprar = (data) =>{

      const contacto = {
        cliente: data,
        fechaConsulta: Timestamp.now()
      }

      const cargarConsulta = collection(db, "contacto");
      addDoc(cargarConsulta, contacto)
      .then((res) =>
        {
          setConsultaId(res.id);
        }
    )       

    }

    return (
      <>
        {consultaId ? (
          <div className="mensaje-enviado">
            <p>Su mensaje ha sido enviado satisfactoriamente, ¡Muchas gracias!</p>
            <p>(ID de consulta creada: {consultaId})</p>
          </div>
        ) : (
          <form className="formulario-compra" onSubmit={handleSubmit(comprar)}>
            <h5>¡Entra en contacto con nosotros!</h5>
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
              <h6>Consulta</h6>
              <textarea
                placeholder="Ingrese su consulta"
                {...register('consulta')}
              />
            </div>
            <button type="submit">ENVIAR CONSULTA</button>
          </form>
        )}
      </>
    );
  };
