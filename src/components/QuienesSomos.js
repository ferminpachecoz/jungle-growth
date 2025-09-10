import { motion } from "framer-motion"
import "../styles/QuienesSomos.scss"

const QuienesSomos = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  }

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
    <section className="quienes-somos-section" id="quienes-somos">
      <div className="container">
        <motion.div
          className="row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Título */}
          <motion.div className="col-12 text-center mb-5" variants={itemVariants}>
            <h2 className="section-title">Quienes Somos</h2>
          </motion.div>

          {/* Contenido principal */}
          <div className="col-lg-6 col-md-12 mb-4">
            <motion.div className="content-wrapper" variants={itemVariants}>
              <div className="padding-aux">
                <h3 className="content-subtitle">Especialistas en el ecosistema de Amazon Marketplace</h3>
              </div>
              <p className="content-text">
                En <strong>Jungle Growth</strong> somos una agencia especializada en <strong>potenciar</strong> tu presencia en Amazon. Con <strong>amplia experiencia</strong> en el ecosistema de e-commerce, nos convertimos en tu socio estratégico para <strong>maximizar</strong> ventas y visibilidad en la plataforma más grande del mundo.
              </p>
              <p className="content-text">
                Nuestro enfoque combina estrategias basadas en datos, <strong>optimización constante</strong> y un profundo entendimiento de los algoritmos de Amazon, garantizando <strong>resultados excepcionales</strong> y un crecimiento sostenido para nuestros clientes.
              </p>

              {/* Elementos visuales decorativos */}
            </motion.div>
          </div>

          {/* Imagen representativa */}
          {/* <div className="col-lg-6 col-md-12 mb-4">
            <motion.div className="image-wrapper" variants={itemVariants}>
              <img
                src="/imagen-stats.jpg"
                alt="Jungle Growth - Amazon Marketing Agency"
                className="main-image"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <span className="overlay-text">Crecimiento Garantizado</span>
                </div>
              </div>
            </motion.div>
          </div> */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="stats-container">
              <motion.div className="stat-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span className="stat-number">1000+</span>
                <span className="stat-label">Productos Optimizados</span>
              </motion.div>
              <motion.div className="stat-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span className="stat-number">1500+</span>
                <span className="stat-label">Campañas Creadas</span>
              </motion.div>
            </div>
            <div className="stats-container">
              <motion.div className="stat-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span className="stat-number">1000+</span>
                <span className="stat-label">Productos Optimizados</span>
              </motion.div>
              <motion.div className="stat-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span className="stat-number">1500+</span>
                <span className="stat-label">Campañas Creadas</span>
              </motion.div>
            </div>
          </div>

          {/* Socios */}
          <motion.div className="col-12 mt-5" variants={itemVariants}>
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
          </motion.div>
        </motion.div>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="background-elements">
        <div className="bg-element element-1"></div>
        <div className="bg-element element-2"></div>
        <div className="bg-element element-3"></div>
      </div>
    </section>
  )
}

export default QuienesSomos
