import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <div className='contenedor-footer'>
            <div className='contenedor-secciones'>
                <h5>Secciones</h5>
                <nav className='nav-link'>
                    <NavLink>Inicio</NavLink>
                    <NavLink>Productos</NavLink>
                    <NavLink>Contacto</NavLink>
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
                    <NavLink>Inicio</NavLink>
                    <NavLink>Productos</NavLink>
                </nav>
            </div>
        </div>
    </footer>
  )
}
