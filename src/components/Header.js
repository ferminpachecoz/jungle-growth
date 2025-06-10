import React from 'react'
import "../styles/Header.scss"

export default function Header() {
  return (
    <header className='header d-flex'>
      <div className='col-lg-6'>
        <img src="./logos/Logo-Simple-Blanco.png" alt="Logo Jungle Growth" />
      </div>
      <div className='col-lg-6 d-flex justify-content-between navegador align-items-center'>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#" className='button'>Contactanos</a>
      </div>
    </header>
  )
}
