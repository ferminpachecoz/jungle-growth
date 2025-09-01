import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import "../styles/SectionAnalytics.scss"

export default function SectionAnalytics() {
  const [showMore, setShowMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.div
      className="section-analytics"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="contenedor d-flex flex-wrap align-items-center justify-content-between">

        {/* Columna de texto */}
        <motion.div
          className="col-lg-5 col-12"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>Datos que impulsan tu crecimiento en Amazon</h3>
          <p>
            Tu crecimiento no depende de la suerte, sino de los datos. Medimos métricas como <strong>ventas, tráfico, ACOS, TACOS, conversión y volumen de búsqueda</strong>  por palabras clave. Con estrategias publicitarias <b>impulsamos</b> ventas, visibilidad y mejoramos el posicionamiento orgánico de tus productos. 
          </p>

          {(!isMobile || showMore) && (
            <p>
              Con el entendimiento del algoritmo, <b>nuestra experiencia</b> en análisis de datos y una <b>visión estratégica</b> clara, logramos posicionar tus productos por encima de la competencia.
            </p>
          )}

          {isMobile && !showMore && (
            <div className='d-flex justify-content-center'>
              <button className="btn-mostrar-mas" onClick={() => setShowMore(true)}>
                Mostrar más
              </button>
            </div>
          )}
        </motion.div>

        {/* Imagen de laptop */}
        <motion.div
          className="col-lg-7 col-12 image"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            src="mockup-laptop.webp"
            loading='lazy'
            alt="Mockup Laptop"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </motion.div>

        {/* Ícono superpuesto */}
        <motion.span
          className="logo-container position-absolute"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/iconos/iconos-03.webp" loading="lazy" alt="Icono Jungle Growth" />
        </motion.span>
      </div>
    </motion.div>
  )
}
