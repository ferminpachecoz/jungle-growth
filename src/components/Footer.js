import React from 'react'
import "../styles/Footer.scss";
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <div className='footer d-flex row'>
      <div className='col-lg-3 col-12 p-4'>
        <img src="/logos/logo-amarillo.webp"  alt="Logo Simple Blanco" />
        <p>En Jungle Growth somos una agencia especializada en potenciar tu presencia en Amazon.</p>
      </div>
      <div className='col-lg-3 col-12 p-4'>
        <h3>Menú rápido</h3>
        <div className='menu-rapido'>
          <HashLink smooth to="/#quienes-somos">Quienes Somos</HashLink>
          <HashLink smooth to="/#services" className='servicios-lg'>Servicios</HashLink>
          <HashLink smooth to="/#analytics">Analytics</HashLink>
          <HashLink smooth to="/#contacto">Contacto</HashLink>
        </div>
      </div>
      <div className='col-lg-3 col-12 p-4'>
        <h3>Contacto</h3>
        <p>Mail: administracion@junglegrowth.net</p>
      </div>
      <div className='col-lg-3 col-12 p-4'>
        <h3>Redes Sociales</h3>
        <a href="https://www.linkedin.com/company/jungle-growth/">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  )
}
