import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import "../styles/MainBannerVideo.scss"

const words = ["potencial", "impacto", "alcance"]

export default function MainBannerVideo({video, title}) {
  const [videoReady, setVideoReady] = useState(false)
  const [index, setIndex] = useState(0)

  const handleScheduleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/ferminpacheco87/30min?hide_event_type_details=0&hide_gdpr_banner=0',
      });
    } else {
      console.warn("Calendly script not loaded yet.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
        {title?
        <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
        :
        <h1>
          Descubre el{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-block' }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>{" "}
          de tu marca en Amazon
        </h1>
        }
        {/* Boton Viejo */}
        <button className="d-block d-lg-none">Empezar ya</button>
        {/* Botón nuevo */}
        {/*
          <motion.button
            className="cta-banner"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScheduleClick}
          >
            Agendar Consulta Gratuita
          </motion.button>
        */}
        <img src="/iconos/amazon-partner.webp" alt="Amazon partner logo" className='amazon-partner' />
      </div>
    </div>
  )
}
