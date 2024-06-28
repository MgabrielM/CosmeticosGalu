import React from 'react'
import "../../css/style.css"
import { Link, NavLink } from 'react-router-dom'
import  logoGalu  from "../../../public/images/logo-galu.png"
import { Carrito } from './Carrito'


export const Header = () => {
  return (
    <header>
        <div className="header-contenedor">
            <Link to="/">
              <img className='logo-galu' src={logoGalu} alt="Logo de GaLu" />
            </Link>      
            <div className='contenedor-navegacion'>
              <nav className="nav-links">
                <NavLink to="/">INICIO</NavLink>
                <NavLink to="/productos">PRODUCTOS</NavLink>
                <NavLink to="/contacto">CONTACTO</NavLink>
                <NavLink>EXTRA</NavLink>
              </nav>
            </div>
            <Carrito/>
        </div>
    </header>
  )
}
