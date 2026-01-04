import { motion } from "framer-motion"
import "../styles/PaidMediaSection.scss"
import { Lightbulb, Layers, Target, Atom } from "lucide-react"

const PaidMediaSection = () => {
  const estadisticas = [
    { numero: "5M+", label: "Invertidos en campañas" },
    { numero: "400%", label: "ROI promedio" },
    { numero: "24/7", label: "Monitoreo y optimización" },
  ]

  const beneficios = [
    {
      icon: Lightbulb,
      titulo: "Decisiones inteligentes",
      descripcion: "Datos que impulsan resultados reales",
    },
    {
      icon: Layers,
      titulo: "Escalabilidad rentable",
      descripcion: "Invertís mejor, creces de forma sostenible",
    },
    {
      icon: Target,
      titulo: "Performance Marketing",
      descripcion: "Foco total en resultados medibles",
    },
  ]

  return (
    <section className="paid-media-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Columna Izquierda - Card de Beneficios */}
          <motion.div
            className="col-lg-5 order-2 order-lg-1 benefits-column"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="benefits-card">
              <div className="card-icon">
                <div className="icon-gradient">
                  <Atom size={48} />
                </div>
              </div>

              <h3 className="card-title">Publicidad inteligente impulsada por datos</h3>

              <div className="benefits-list">
                {beneficios.map((beneficio, index) => (
                  <motion.div
                    key={index}
                    className="benefit-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="benefit-icon">
                      <beneficio.icon size={24} />
                    </div>
                    <div className="benefit-content">
                      <h4>{beneficio.titulo}</h4>
                      <p>{beneficio.descripcion}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="card-decoration"></div>
            </div>
          </motion.div>
          {/* Columna Derecha - Contenido */}
          <motion.div
            className="col-lg-7 order-1 order-lg-2 content-column"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Expertos en <span className="highlight">Paid Media</span> & <span className="highlight">Data Analytics</span>
            </h2>

            <p className="main-description">
              En <strong>Jungle Growth</strong> impulsamos el crecimiento de marcas mediante <strong>estrategias avanzadas de Paid Media</strong> y <strong>data analytics</strong>. No solo invertimos en publicidad: tomamos <strong>decisiones inteligentes</strong>, <strong>precisas</strong> y orientadas a <strong>resultados reales y sostenibles</strong>.
            </p>

            <p className="secondary-description">
              Gestionamos campañas en <strong>Google Ads</strong>, <strong>Meta Ads</strong>, <strong>TikTok Shop</strong> y otros canales, apoyándonos en <strong>análisis de datos</strong> para <strong>optimizar presupuestos</strong> y <strong>escalar lo que funciona</strong>. Integramos <strong>performance marketing</strong> y <strong>analítica avanzada</strong> para <strong>medir el funnel</strong> y <strong>maximizar la rentabilidad</strong>.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default PaidMediaSection
