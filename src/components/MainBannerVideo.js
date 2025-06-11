import React, { useState } from 'react'
import "../styles/MainBannerVideo.scss"

export default function MainBannerVideo() {
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

      {/* Video de fondo (no bloquea LCP) */}
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

      {/* Contenido sobre el banner */}
      <div className="contenedor d-flex flex-column justify-content-center">
        <h1>
          Descubre el <span>potencial</span> de tu marca en Amazon
        </h1>
        <button className="d-block d-lg-none">Empezar ya</button>
      </div>
    </div>
  )
}
