import { motion } from "framer-motion"
import "../styles/AppointmentSection.scss"

const AppointmentSection = ({title, subtitle}) => {
  const handleScheduleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/administracion-junglegrowth/30min?hide_event_type_details=0&hide_gdpr_banner=0',
      });
    } else {
      console.warn("Calendly script not loaded yet.");
    }
  };

  return (
    <section className="cta-appointment">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="row align-items-center">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="cta-title">
                  {title}
                </h2>
                <p className="cta-subtitle">
                  {subtitle}
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="cta-button"
                  onClick={handleScheduleClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="button-text">Agendar Consulta Gratuita</span>
                  <motion.div
                    className="button-icon"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.div>
                </motion.button>
                <p className="cta-note">
                  <small>✓ Sin compromiso • ✓ 30 min • ✓ Estrategia personalizada</small>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Elementos decorativos */}
          <motion.div
            className="decoration-circle circle-1"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="decoration-circle circle-2"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          />
          
        </motion.div>
      </div>
    </section>
  )
}

export default AppointmentSection
