"use client"

import { motion } from "framer-motion"
import "../styles/EquipoSection.scss"

const EquipoSection = () => {
  const equipo = [
    {
      nombre: "Fermin Pacheco Zapiola",
      puesto: "CEO & Amazon Strategist",
      imagen: "/equipo/fermin-pacheco-zapiola.webp",
    },
    {
      nombre: "Nicolás Blaksley",
      puesto: "Growth Manager & PPC Specialist",
      imagen: "/equipo/nicolas-blaksley.webp",
    },
    {
      nombre: "Segundo Blaksley",
      puesto: "Data Analytics & Performance",
      imagen: "/equipo/segundo-blaksley.webp",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="equipo-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="equipo-header"
        >
          <h2 className="equipo-titulo">
            El <span className="highlight-naranja">equipo estratégico</span> detrás de{" "}
            <span className="highlight-naranja">tu crecimiento</span>
          </h2>
          <p className="equipo-subtitulo">
            Profesionales especializados en Amazon y performance marketing, dedicados a impulsar tu marca hacia el éxito
          </p>
        </motion.div>

        <motion.div
          className="equipo-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {equipo.map((miembro, index) => (
            <motion.div key={index} className="equipo-card" variants={cardVariants}>
              <div className="card-inner">
                <div className="imagen-container">
                  <div className="imagen-wrapper">
                    <img src={miembro.imagen || "/placeholder.svg"} alt={miembro.nombre} />
                  </div>
                  <div className="overlay-gradient"></div>
                </div>
                <div className="info-container">
                  <h3 className="miembro-nombre">{miembro.nombre}</h3>
                  <p className="miembro-puesto">{miembro.puesto}</p>
                  <div className="decorative-line"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="equipo-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="cta-text">
            Un equipo multidisciplinario que combina experiencia en Amazon, análisis de datos y estrategia digital para
            llevarte al siguiente nivel.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EquipoSection
