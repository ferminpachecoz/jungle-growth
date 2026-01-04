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
          <img  src="/logos/Logo-Full-Amarillo-Naranja.webp" fetchPriority="high" alt="Logo Jungle Growth" />
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
            <HashLink to="/paid-media" className='mb-3'>Paid Media</HashLink>
            <HashLink to="/amazon">Amazon Growth</HashLink>
          </span>  
        </HashLink>
        <HashLink to="#" className='services-mobile'>
          <p onClick={()=>setVisible(!visible)}>
            Servicios 
            <i className="bi bi-caret-right-fill"></i>
          </p>
          {visible &&
            <span className='links-container'>
              <HashLink to="/paid-media">Paid Media</HashLink>
              <HashLink to="/amazon">Amazon Growth</HashLink>
            </span>
          }
        </HashLink>
        <HashLink smooth to="/#beneficios">Beneficios</HashLink>
        <HashLink smooth to="/#contacto">Contacto</HashLink>
        {/*
          <a href="#" className='button'>Contactanos</a>
         */}
      </div>
    </header>
  )
}
