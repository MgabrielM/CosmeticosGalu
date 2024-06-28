import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <div className='contenedor-footer'>
            <div className='contenedor-secciones'>
                <h5>Secciones</h5>
                <nav className='nav-link'>
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/productos">Productos</NavLink>
                    <NavLink to="/contacto">Contacto</NavLink>
                    <NavLink>Extra</NavLink>
                </nav>
            </div>
            <div className='contenedor-secciones'>
                <h5>Contacto</h5>
                <nav className='nav-link'>
                    <NavLink>Inicio</NavLink>
                    <NavLink>Productos</NavLink>
                    <NavLink>Contacto</NavLink>
                    <NavLink>Extra</NavLink>
                </nav>
            </div>
            <div className='contenedor-secciones'>
                <h5>Redes sociales</h5>
                <nav className='nav-link'>
                    <NavLink to="https://api.whatsapp.com/send?phone=+1164465110&text=!Hola!%20%C2%BFC%C3%B3mo%20estas?%20Mi%20consulta%20es" target="_blank">
                    Whatsapp</NavLink>
        <NavLink> Instagram</NavLink>
            </nav>
        </div>
    </div>
</footer>
  )
}
