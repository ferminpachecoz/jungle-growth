import React, { useState } from 'react'
import "../styles/MainBannerVideo.scss"
import { HashLink } from 'react-router-hash-link'


export default function MainBannerVideo({video, title, icons}) {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <div className="main-banner position-relative">
      
      {/* Imagen optimizada para el LCP */}
      <img
        src="/textures/pexels-tarcila.webp"
        alt="Fondo con hojas"
        fetchPriority="high"
        decoding="async"
        className={`banner-placeholder ${videoReady ? 'hidden' : ''}`}
      />

      {/* Video de fondo */}
      <video
        className={`banner-video ${videoReady ? 'visible' : ''}`}
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onCanPlay={() => setVideoReady(true)}
      />

      <div className="video-overlay" />

      {/* Contenido del banner */}
      <div className="contenedor d-flex flex-column justify-content-center">
        <h1>
          {title}
        </h1>
        {/* Boton Viejo */}
        <HashLink to="/#contact" className="d-block d-lg-none">Empezar ya</HashLink>
        {/* Botón nuevo */}
        {
          icons &&
          <div className='iconos-contenedor'>
            <img src="/iconos/amazon-partner.webp" alt="Amazon partner logo" className='amazon-partner' />
            <img src="/iconos/Meta-Business-Partner-Badge-Webtopia.webp" alt="Meta partner logo" className='amazon-partner' />
            <img src="/iconos/google-partner-2.webp" alt="Google Partner Logo" />
            <img src="/iconos/tiktok-partner.webp" alt="Tiktok Partner Logo" />
          </div>
        }
      </div>
    </div>
  )
}
