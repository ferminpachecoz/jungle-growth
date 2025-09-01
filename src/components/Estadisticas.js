import { motion } from "framer-motion"
import "../styles/Estadisticas.scss"

const Estadisticas = () => {
  const stats = [
    {
      number: "+10M",
      currency: "USD",
      description: "en ventas generadas",
    },
    {
      number: "+1M",
      currency: "USD",
      description: "invertidos en campañas",
    },
    {
      number: "+15",
      currency: "",
      description: "categorías trabajadas",
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
    <section className="estadisticas-section">
      <div className="container">
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <motion.div
                className="stat-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-number">
                  <span className="number">{stat.number}</span>
                  {stat.currency && <span className="currency">{stat.currency}</span>}
                </div>
                <div className="stat-description">{stat.description}</div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Estadisticas
