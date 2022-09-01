import React from 'react'
import velador from "../../images/velador.png"


const NavbarComponent = () => {
  return (
    <>
    <header>
    <div className="menu">
      <img src={velador} alt=""/>
      <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Tienda</a></li>
            <li><a href="/">Contacto</a></li>
            <li><a href="/">Mi Cuenta</a></li>
          </ul>
      </nav>
    </div>
    </header>
    </>
  )
}

export default NavbarComponent