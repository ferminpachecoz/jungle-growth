import { motion } from "framer-motion"
import { TrendingUp, Target, Award, BarChart3, Zap } from "lucide-react"
import "../styles/QuienesSomosAlt.css"
import "../styles/QuienesSomos.scss"

const features = [
  {
    icon: BarChart3,
    title: "Estrategias basadas en datos",
    description: "Decisiones respaldadas por análisis profundos",
  },
  {
    icon: Target,
    title: "Optimización constante",
    description: "Mejora continua de tus resultados",
  },
  {
    icon: Zap,
    title: "Algoritmos de Amazon",
    description: "Dominio completo del ecosistema",
  },
]

const stats = [
  { number: "500+", label: "Productos optimizados" },
  { number: "1500+", label: "Campañas creadas" },
  { number: "24/7", label: "Soporte especializado" },
]

export default function QuienesSomosAlt({children}) {
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }
  return (
    <section className="about-section position-relative overflow-hidden" id="quienes-somos">
      {/* Fondo */}
      <div className="about-background position-absolute w-100 h-100"></div>

      {/* Elementos decorativos */}
      <div className="decorative-elements position-absolute w-100 h-100">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>
      </div>

      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">
          {/* Contenido principal */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {children}

              {/* Estadísticas */}
              <div className="row g-4">
                {stats.map((stat, index) => (
                  <div key={index} className="col-4">
                    <motion.div
                      className="stat-item text-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="stat-number h3 fw-bold mb-1">{stat.number}</div>
                      <div className="stat-label small">{stat.label}</div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Panel interactivo */}
          <div className="col-lg-6">
            <motion.div
              className="interactive-panel position-relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Panel principal */}
              <div className="main-panel p-5 rounded-4 position-relative">
                <motion.div
                  className="panel-icon mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <TrendingUp size={48} className="icon-main" />
                </motion.div>

                <h3 className="panel-title h4 fw-bold mb-4">Tu crecimiento es nuestro éxito</h3>

                {/* Features grid */}
                <div className="features-grid">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="feature-item d-flex align-items-start mb-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="feature-icon me-3">
                        <feature.icon size={24} />
                      </div>
                      <div>
                        <h5 className="feature-title h6 fw-semibold mb-1">{feature.title}</h5>
                        <p className="feature-description small mb-0">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Elemento flotante */}
                <motion.div
                  className="floating-element position-absolute"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Award size={32} className="floating-icon" />
                </motion.div>
              </div>

              {/* Elementos decorativos del panel */}
              <div className="panel-decoration panel-decoration-1"></div>
              <div className="panel-decoration panel-decoration-2"></div>
            </motion.div>
          </div>
          
          {/* Nuestro Equipo */}
          {/* <motion.div className="col-12 mt-5" variants={itemVariants}>
            <h4 className="founders-title">Nuestro Equipo</h4>
            <div className="founders-container">
              <motion.div
                className="founder-circle"
                variants={circleVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(3, 50, 32, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="user-placeholder.webp"
                  alt="Socio 1 - Jungle Growth"
                  className="founder-image"
                />
                <div className="founder-info">
                  <h5 className="founder-name">Segundo Blaksley</h5>
                  <p className="founder-role">CEO & Amazon Strategist</p>
                </div>
                <div className="founder-decoration"></div>
              </motion.div>

              <motion.div
                className="founder-circle"
                variants={circleVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(3, 50, 32, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="user-placeholder.webp"
                  alt="Socio 2 - Jungle Growth"
                  className="founder-image"
                />
                <div className="founder-info">
                  <h5 className="founder-name">Nicolás Blaksley</h5>
                  <p className="founder-role">CTO & Data Analyst</p>
                </div>
                <div className="founder-decoration"></div>
              </motion.div>

              <motion.div
                className="founder-circle"
                variants={circleVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(3, 50, 32, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="user-placeholder.webp"
                  alt="Socio 2 - Jungle Growth"
                  className="founder-image"
                />
                <div className="founder-info">
                  <h5 className="founder-name">Fermín Pacheco</h5>
                  <p className="founder-role">Full Stack Developer</p>
                </div>
                <div className="founder-decoration"></div>
              </motion.div>

              <motion.div
                className="founder-circle"
                variants={circleVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(3, 50, 32, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="user-placeholder.webp"
                  alt="Socio 2 - Jungle Growth"
                  className="founder-image"
                />
                <div className="founder-info">
                  <h5 className="founder-name">Maia Ledesma</h5>
                  <p className="founder-role">Graphic Designer</p>
                </div>
                <div className="founder-decoration"></div>
              </motion.div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
