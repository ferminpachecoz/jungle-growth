import React from 'react'
import "../styles/Contact.scss"

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contactanos</h1>
      <div className='wrapp'>
        <img src="/textures/pexels-tarcila.jpg" className='fondo-jg' alt="Imagen de fondo con hojas" />
        <div className='contenedor d-flex'>
          <div className='col-lg-6'>
            <form>
              <div className='mb-4'>
                <label className='form-label'>Name</label>
                <input type="text" placeholder='Name' className='form-control' />
              </div>
              <div className='mb-4'>
                <label className='form-label'>Email</label>
                <input type="email" placeholder='Name' className='form-control' />
              </div>
              <div className='mb-4'>
                <label className='form-label'>Message</label>
                <textarea cols="30" rows="10" className='form-control' placeholder='Message'></textarea>
              </div>
              <button>Send Message</button>
            </form>
          </div>
          <div className='col-lg-6 d-flex align-items-center justify-content-center'>
            <img src="/iconos/iconos-10.png" className='logo-jg' alt="Icono Jungle Growth Naranja" />
          </div>
        </div>
      </div>
    </div>
  )
}
