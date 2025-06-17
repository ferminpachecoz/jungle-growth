import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import "../styles/MainBannerVideo.scss"

const words = ["potencial", "impacto", "alcance"]

export default function MainBannerVideo() {
  const [videoReady, setVideoReady] = useState(false)
  const [index, setIndex] = useState(0)

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
        src="video-banner.mp4"
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
        <img src="/iconos/amazon-partner.webp" alt="Amazon partner logo" className='amazon-partner' />
        <button className="d-block d-lg-none">Empezar ya</button>
      </div>
    </div>
  )
}
