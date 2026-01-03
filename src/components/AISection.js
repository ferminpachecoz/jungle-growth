import { motion } from "framer-motion"
import { Settings, Brain, TrendingUp, Rocket } from "lucide-react"
import "../styles/QuienesSomosAlt.css"

const features = [
  {
    icon: Brain,
    title: "Inteligencia aplicada",
    description: "Datos e IA para mejores decisiones",
  },
  {
    icon: Settings,
    title: "Automatización eficiente",
    description: "Optimizamos procesos y escalamos resultados",
  },
  {
    icon: TrendingUp,
    title: "Ventaja competitiva",
    description: "Anticipamos cambios y maximizamos performance",
  },
]

const stats = [
  { number: "500+", label: "Productos optimizados" },
  { number: "1500+", label: "Campañas creadas" },
  { number: "24/7", label: "Soporte especializado" },
]

export default function QuienesSomosAlt() {
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
              <h2 className="about-title display-4 fw-bold mb-4 lh-sm">
                <span className="highlight">Tecnología, Data e IA</span> al servicio del crecimiento
              </h2>

              <motion.p
                className="about-text fs-5 mb-4 lh-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                En <strong>Jungle Growth</strong> trabajamos con <strong>tecnologías de vanguardia</strong> para potenciar cada estrategia. Integramos <strong>análisis avanzado de datos</strong>, <strong>inteligencia artificial</strong> y <strong>automatizaciones</strong> que nos permiten <strong>tomar mejores decisiones</strong>, <strong>optimizar procesos</strong> y <strong>escalar resultados</strong> de forma eficiente.
              </motion.p>

              <motion.p
                className="about-text fs-5 mb-5 lh-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Utilizamos <strong>IA</strong> para la <strong>creación de contenido</strong>, la <strong>optimización de campañas</strong> y el <strong>análisis predictivo</strong>, combinando <strong>softwares</strong> y <strong>herramientas especializadas</strong> para <strong>maximizar performance</strong>, <strong>reducir fricción operativa</strong> y <strong>anticiparnos a cambios del mercado</strong>. Así, transformamos <strong>datos</strong> y <strong>tecnología</strong> en una <strong>ventaja competitiva real</strong> para las marcas con las que trabajamos.
              </motion.p>
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
                  <Rocket size={48} className="icon-main" />
                </motion.div>

                <h3 className="panel-title h4 fw-bold mb-4">Crecimiento impulsado por tecnología</h3>

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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
