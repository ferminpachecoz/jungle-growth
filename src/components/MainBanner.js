import React from 'react'
import "../styles/MainBanner.scss"

export default function MainBanner() {
  return (
    <div className='main-banner'>
      <img src="/textures/pexels-tarcila.webp" fetchPriority="high" decoding="async" alt="Fondo con hojas" />
      <div className='contenedor d-flex flex-column justify-content-center'>
        <h1>Descubre el <span>potencial</span> de tu marca en Amazon</h1>
        <button 
          className='d-block d-lg-none'
        >
          Empezar ya
        </button>
      </div>
    </div>
  )
}
