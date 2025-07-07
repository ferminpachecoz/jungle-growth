import React, { useState } from 'react'
import "../styles/Header.scss"

export default function Header() {
  const [display, setDisplay] = useState(false)
  
  return (
    <header className='header row g-0'>
      <div className='col-lg-6 col-6 d-flex justify-content-start align-items-center'>
        <img  src="/logos/logo-amarillo.webp" fetchPriority="high" alt="Logo Jungle Growth" />
      </div>
      <div className='burger-container col-6 d-flex justify-content-end align-items-center d-lg-none'>
        <i className="bi bi-list" onClick={()=>setDisplay(!display)}></i>
      </div>
      <div className={`col-lg-6 col-12 justify-content-between navegador align-items-center flex-lg-row flex-column ${display?"d-flex":"d-none"} d-lg-flex`}>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Testimonials</a>
        <a href="#">Analytics</a>
        {/*
          <a href="#" className='button'>Contactanos</a>
         */}
      </div>
    </header>
  )
}
