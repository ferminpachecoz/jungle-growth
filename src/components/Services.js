import { motion } from "framer-motion"
import { TrendingUp, Search, BarChart3 } from "lucide-react"
import "../styles/Services.css"

const services = [
  {
    icon: TrendingUp,
    title: "Gestión de campañas PPC",
    subtitle: "Maximizamos tu ROAS",
    description:
      "Optimizamos tus campañas publicitarias en Amazon para generar más ventas con menor inversión. Estrategias data-driven que impulsan tu crecimiento.",
  },
  {
    icon: Search,
    title: "Optimización de listings",
    subtitle: "Posicionamiento que convierte",
    description:
      "Mejoramos tus productos para que aparezcan en las primeras posiciones. SEO especializado en Amazon que aumenta tu visibilidad y conversiones.",
  },
  {
    icon: BarChart3,
    title: "Análisis y estrategia",
    subtitle: "Decisiones basadas en datos",
    description:
      "Analizamos tu competencia y mercado para crear estrategias personalizadas. Reportes detallados que te ayudan a tomar las mejores decisiones.",
  },
]

export default function Services() {
  return (
    <section className="services-section position-relative overflow-hidden">
      {/* Fondo degradado */}
      <div className="services-background position-absolute w-100 h-100"></div>

      {/* Elementos decorativos de fondo */}
      <div className="decorative-elements position-absolute w-100 h-100">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>
        <div className="decoration decoration-4"></div>
      </div>

      <div className="container position-relative">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="services-title display-1 fw-bold mb-4 lh-sm">Lo que podemos hacer por vos</h2>
        </motion.div>

        {/* Grid de servicios */}
        <div className="row mb-5 justify-content-center">
          <div className="col-12">
            <div className="services-container d-flex gap-4 overflow-auto pb-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card-wrapper flex-shrink-0"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="service-card h-100 p-4 position-relative">
                    {/* Ícono */}
                    <motion.div
                      className="mb-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="service-icon d-flex align-items-center justify-content-center">
                        <service.icon size={32} className="icon-color" />
                      </div>
                    </motion.div>

                    {/* Contenido */}
                    <h3 className="service-title h4 fw-bold mb-3">{service.title}</h3>

                    <h4 className="service-subtitle h6 fw-semibold mb-3">{service.subtitle}</h4>

                    <p className="service-description lh-base">{service.description}</p>

                    {/* Efecto de brillo en hover */}
                    <div className="shimmer-effect position-absolute w-100 h-100"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.button
            className="cta-button btn btn-lg px-5 py-3 fw-semibold rounded-pill"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(239, 80, 38, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Empezar ahora
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
