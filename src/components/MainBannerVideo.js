import React, { useState, useEffect } from 'react'
import "../styles/MainBannerVideo.scss"
import { HashLink } from 'react-router-hash-link'


export default function MainBannerVideo({video, title, icons, animacion, opacity}) {
  const [videoReady, setVideoReady] = useState(false)

  // Lógica para las palabras dinámicas
  const words = ["el ecosistema ", "la selva ", "la jungla "];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, [words.length]);

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

      <div 
        className="video-overlay" 
        style={{backgroundColor: `rgba(0, 0, 0, ${opacity})`}} 
      />

      {/* Contenido del banner */}
      <div className="contenedor d-flex flex-column justify-content-center">
        {animacion?
          <h1 className="titulo-dinamico">
            Tus guías en <br />
            <span key={words[index]} className="word-fade highlight">
              {words[index]}
            </span>
            {" digital"}
          </h1>
          : 
          <h1>
            {title}
          </h1>
        }
        {/* Boton Viejo */}
        <HashLink to="/#contact" className="d-block d-lg-none">Empezar ya</HashLink>
        {/* Botón nuevo */}
        {
          icons &&
          <div className='iconos-contenedor'>
            <div className='square-cont'>
              <img src="/iconos/amazon.webp" alt="Amazon Logo" />
            </div>
            <div className='square-cont'>
              <img src="/iconos/meta.webp" alt="Meta Logo" />
            </div>
            <div className='square-cont'>
              <img src="/iconos/google.webp" alt="Google Logo" />
            </div>
            <div className='square-cont'>
              <img src="/iconos/tik-tok.webp" alt="Tik Tok Logo" />
            </div>
          </div>
        }
      </div>
    </div>
  )
}
