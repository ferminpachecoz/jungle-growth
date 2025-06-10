import React from 'react'
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <div className='footer d-flex'>
      <div className='col-lg-3 p-4'>
        <img src="/logos/Logo-Simple-Blanco.png" alt="Logo Simple Blanco" />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
      </div>
      <div className='col-lg-3 p-4'>
        <h3>Menú rápido</h3>
        <div className='menu-rapido'>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
        </div>
      </div>
      <div className='col-lg-3 p-4'>
        <h3>Contacto</h3>
        <p>Mail: info@junglegrowth.com</p>
        <p>Teléfono: +54 11 2222-3333</p>
      </div>
      <div className='col-lg-3 p-4'>
        <h3>Redes Sociales</h3>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-linkedin"></i>
      </div>
    </div>
  )
}
