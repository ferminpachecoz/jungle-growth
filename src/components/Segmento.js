import { motion } from "framer-motion"
import "../styles/Segmento.scss"

const Segmento = ({opcion1, opcion2, title}) => {
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
    <section className="segmento-section" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h1 className="segmento-title">
            {title}
          </h1>
        </motion.div>

        <div className="row g-5">
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
                  <img src={opcion1.icon} alt="Potencia tu negocio" className="icon-image" />
                </motion.div>
              </div>

              <div className="card-body">
                <h3 className="card-title">{opcion1.title}</h3>
                <p className="card-description">
                  {opcion1.description}
                </p>
              </div>

              <div className="card-footer">
                <a href={opcion1.link}>
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
                  <img src={opcion2.icon} alt="Lanza en Amazon" className="icon-image" />
                </motion.div>
              </div>

              <div className="card-body">
                <h3 className="card-title">{opcion2.title}</h3>
                <p className="card-description">
                  {opcion2.description}
                </p>
              </div>

              <div className="card-footer">
                <a href={opcion2.link}>
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Segmento
