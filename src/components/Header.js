import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import "../styles/Header.scss"

export default function Header() {
  const [display, setDisplay] = useState(false)
  const [visible, setVisible] = useState(false)
  return (
    <header className='header row g-0' id="top">
      <div className='col-lg-6 col-6 d-flex justify-content-start align-items-center'>
        <HashLink smooth to="/#top">
          <img  src="/logos/logo-amarillo.webp" fetchPriority="high" alt="Logo Jungle Growth" />
        </HashLink>
      </div>
      <div className='burger-container col-6 d-flex justify-content-end align-items-center d-lg-none'>
        <i className="bi bi-list" onClick={()=>setDisplay(!display)}></i>
      </div>
      <div className={`col-lg-6 col-12 justify-content-between navegador align-items-center flex-lg-row flex-column ${display?"d-flex":"d-none"} d-lg-flex`}>
        <HashLink smooth to="/#quienes-somos">Quienes Somos</HashLink>
        <HashLink smooth to="/#services" className='servicios-lg'>
          Servicios
          <span className='services-menu'>
            <HashLink to="/advanced" className='mb-3'>Vendo en Amazon</HashLink>
            <HashLink to="/beginner">Quiero empezar</HashLink>
          </span>  
        </HashLink>
        <HashLink to="#" className='services-mobile'>
          <p onClick={()=>setVisible(!visible)}>
            Servicios 
            <i className="bi bi-caret-right-fill"></i>
          </p>
          {visible &&
            <span className='links-container'>
              <HashLink to="/advanced">Potenciar mi negocio</HashLink>
              <HashLink to="/beginner">Quiero empezar</HashLink>
            </span>
          }
        </HashLink>
        <HashLink smooth to="/#analytics">Analytics</HashLink>
        <HashLink smooth to="/#contacto">Contacto</HashLink>
        {/*
          <a href="#" className='button'>Contactanos</a>
         */}
      </div>
    </header>
  )
}
