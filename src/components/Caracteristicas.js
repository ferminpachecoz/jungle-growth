import { motion } from "framer-motion"
import "../styles/Caracteristicas.scss"

const Caracteristicas = ({caracteristicas, title}) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="caracteristicas-premium-section" id="beneficios">
      {title &&
        <h2 dangerouslySetInnerHTML={{__html: title}}></h2>
      }
      <div className="container">
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caracteristicas.map((caracteristica, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <motion.div
                className="caracteristica-card"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="caracteristica-icon"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={caracteristica.icon} className="icon" />
                </motion.div>

                <div className="caracteristica-content">
                  <h3 className="caracteristica-titulo">{caracteristica.titulo}</h3>
                  <p className="caracteristica-descripcion">{caracteristica.descripcion}</p>
                </div>

                {/* Elemento decorativo */}
                <div className="card-decoration"></div>

                {/* Efecto de brillo */}
                <div className="shine-effect"></div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Caracteristicas
