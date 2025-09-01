import React from 'react'
import "../styles/HowTo.scss"
import { CheckCircle, Target, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function HowTo() {
  const steps = [
    {
      number: "01",
      title: "Descubrimiento",
      description:
        "Conocemos tu marca y competencia, analizamos oportunidades y trazamos un plan estratégico alineado a tus objetivos.",
      icon: Target,
    },
    {
      number: "02",
      title: "Preparación Estratégica del Lanzamiento",
      description:
        "Diseñamos estrategias personalizadas, optimizamos listados y campañas, y generamos alto tráfico para maximizar conversiones en lanzamientos o relanzamientos.",
      icon: TrendingUp,
    },
    {
      number: "03",
      title: "Lanzamiento",
      description:
        "Lanzamos productos con campañas estratégicas, segmentación y keywords relevantes, generando tráfico masivo, posicionamiento en Amazon y crecimiento rentable sostenido.",
      icon: CheckCircle,
    },
    {
      number: "04",
      title: "Seguimiento y Optimización",
      description:
        "Seguimos y optimizamos campañas diariamente, ajustando estrategias y métricas clave para maximizar rentabilidad y lograr crecimiento sostenible en Amazon.",
      icon: CheckCircle,
    },
  ]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const mockupVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 3,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      rotate: 0,
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  }
  return (
    <>
    <section className="section-bg py-5">
        <div className="container">
          {/* Título principal */}
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-4 fw-bold title-color mb-5">
              ¿<span style={{color: "var(--naranja)"}}>Cómo</span> lo hacemos?
            </h2>
          </motion.div>

          {/* Contenido principal en una fila con dos columnas */}
          <div className="row align-items-center">
            {/* Columna izquierda - Mockup con hojas */}
            <div className="col-lg-6 mb-4 mb-lg-0 image">
              {/* Mockup sobresaliendo */}
              <motion.div
                className='mockup-cont'
                style={{ zIndex: 10 }}
                variants={mockupVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                whileHover="hover"
              >
                <img src="mockup-phone.webp" loading="lazy" className='mockup-img' alt="Mockup phone" />
              </motion.div>
            </div>

            {/* Columna derecha - Pasos */}
            <div className="col-lg-6 pasos">
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                {steps.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <motion.div key={index} className="d-flex mb-4" variants={itemVariants}>
                      {/* Número del paso */}
                      <div className="flex-shrink-0 me-4">
                        <div className="step-number d-flex align-items-center justify-content-center">
                          {step.number}
                        </div>
                      </div>

                      {/* Contenido del paso */}
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center mb-3">
                          <IconComponent className="step-icon me-3" />
                          <h3 className="step-title mb-0">{step.title}</h3>
                        </div>
                        <p className="step-description mb-0">{step.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
