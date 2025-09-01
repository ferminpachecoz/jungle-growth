import { motion } from "framer-motion"
import "../styles/Segmento.scss"

const Segmento = () => {
  const handleCard1Click = () => {
    console.log("Potencia tu negocio - Saber más")
    // Aquí puedes agregar la navegación o modal
  }

  const handleCard2Click = () => {
    console.log("Lanza en Amazon - Saber más")
    // Aquí puedes agregar la navegación o modal
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="segmento-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h1 className="segmento-title">
            Incursiona en el <span className="highlight" style={{color: "var(--naranja)"}}>ecosistema AMZ</span>
          </h1>
        </motion.div>

        <div className="row g-4">
          {/* Card 1 - Potencia tu negocio */}
          <div className="col-lg-6">
            <motion.div
              className="segmento-card card-potencia"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="card-header">
                <motion.div className="card-icon" variants={iconVariants} whileHover="hover">
                  <img src="/enhance.png" alt="Potencia tu negocio" className="icon-image" />
                </motion.div>
              </div>

              <div className="card-body">
                <h3 className="card-title">Potencia tu negocio en Amazon</h3>
                <p className="card-description">
                  ¿Sos vendedor en Amazon y buscás potenciar tu marca al máximo? Somos los indicados para ayudarte a
                  alcanzar tus objetivos.
                </p>
              </div>

              <div className="card-footer">
                <a href="/advanced">
                  <motion.button
                    className="card-cta"
                    onClick={handleCard1Click}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Saber más</span>
                    <motion.span
                      className="arrow"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </a>
              </div>

              {/* Elemento decorativo */}
              <div className="card-decoration decoration-1"></div>
            </motion.div>
          </div>

          {/* Card 2 - Lanza en Amazon */}
          <div className="col-lg-6">
            <motion.div
              className="segmento-card card-lanza"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="card-header">
                <motion.div className="card-icon" variants={iconVariants} whileHover="hover">
                  <img src="/launch.png" alt="Lanza en Amazon" className="icon-image" />
                </motion.div>
              </div>

              <div className="card-body">
                <h3 className="card-title">Lanza en Amazon!</h3>
                <p className="card-description">
                  ¿Aún no vendes en Amazon? Te guiamos paso a paso para abrir tu cuenta y conquistar esta jungla
                  digital.
                </p>
              </div>

              <div className="card-footer">
                <a href="/beginner">
                  <motion.button
                    className="card-cta"
                    onClick={handleCard2Click}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Saber más</span>
                    <motion.span
                      className="arrow"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </a>
              </div>

              {/* Elemento decorativo */}
              <div className="card-decoration decoration-2"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Segmento
