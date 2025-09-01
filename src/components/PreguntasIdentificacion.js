import { motion } from "framer-motion"
import "../styles/PreguntasIdentificacion.scss"

const PreguntasIdentificacion = ({preguntas}) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="preguntas-identificacion-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="section-title">
            ¿Te identificas con <span className="highlight">alguna de estas preguntas</span>?
          </h2>
        </motion.div>

        <div className="preguntas-container">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {preguntas.map((pregunta, index) => (
              <motion.div
                key={index}
                className="pregunta-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="pregunta-numero">
                  <span>{index + 1}</span>
                </div>
                <div className="pregunta-texto">{pregunta}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="section-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="footer-text">
            Si respondiste <strong>"SÍ"</strong> a al menos 2 preguntas, podemos ayudarte a transformar tu negocio en
            Amazon
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PreguntasIdentificacion
