import { motion } from "framer-motion"
import "../styles/CuadroComparativo.scss"

const CuadroComparativo = ({agenciasClasicas, jungleGrowth, amazon}) => {
  

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className="cuadro-comparativo-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="section-title">
            ¿Por qué elegir <span className="highlight">Jungle Growth</span>?
          </h2>
          <p className="section-subtitle">La diferencia está en los detalles y el compromiso real con tu éxito</p>
        </motion.div>

        <div className="row g-4">
          {/* Card Agencias Clásicas */}
          <div className="col-lg-6">
            <motion.div
              className="comparison-card classic-agencies"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-header">
                <h3 className="card-title">
                  <span className="title-icon">⚠️</span>
                  Agencias Clásicas
                </h3>
                <div className="card-badge negative">Lo que NO querés</div>
              </div>

              <div className="card-body">
                <ul className="comparison-list">
                  {agenciasClasicas.map((item, index) => (
                    <motion.li
                      key={index}
                      className="list-item negative"
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <span className="item-icon">❌</span>
                      <span className="item-text">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Card Jungle Growth */}
          <div className="col-lg-6">
            <motion.div
              className="comparison-card jungle-growth"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="card-header jungle">
                <h3 className="card-title">
                  <span className="title-icon">🚀</span>
                  Jungle Growth
                </h3>
                <div className="card-badge positive">Tu mejor elección</div>
              </div>

              <div className="card-body">
                <ul className="comparison-list">
                  {jungleGrowth.map((item, index) => (
                    <motion.li
                      key={index}
                      className="list-item positive"
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <span className="item-icon">✅</span>
                      <span className="item-text">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Elemento destacado */}
              <div className="premium-badge">
                <span>⭐ Enfoque Premium</span>
              </div>
            </motion.div>
          </div>
        </div>

        {amazon &&
          <motion.div
            className="comparison-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="cta-text">¿Listo para trabajar con una agencia que realmente entiende Amazon?</p>
          </motion.div>
        }
        {/* Call to action final */}
      </div>
    </section>
  )
}

export default CuadroComparativo
