import React from 'react'
import { Timestamp, addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useForm } from 'react-hook-form';


export const Contacto = () => {

    const {register, handleSubmit} = useForm();

    const comprar = (data) =>{

    }

    return (
        <form className="formulario-compra" onSubmit={handleSubmit(comprar)}>
          <h5>¡Entra en contacto con nosotros!</h5>
          <p>Es necesario completar el siguiente formulario para poder finalizar la compra</p>
          <div className="input-group">
            <h6>Nombre y apellido</h6>
            <input type="text" placeholder="Ingresar nombre" {...register("nombre", { required: true })} />
          </div>
          <div className="input-group">
            <h6>Celular</h6>
            <input type="tel" placeholder="Ingresar número de celular" {...register("celular", { required: true })} />
          </div>
          <div className="input-group">
            <h6>Correo electrónico</h6>
            <input type="email" placeholder="Ingresar correo" {...register("correo", { required: true })} />
          </div>
          <div className="input-group">
            <h6>Consulta</h6>
            <textarea placeholder="Ingrese su consulta" {...register("consulta")} />
          </div>
          <button type="submit">FINALIZAR COMPRA</button>
        </form>
      );
    }
