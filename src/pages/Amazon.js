import Header from '../components/Header'
import MainBannerVideo from '../components/MainBannerVideo'
import {motion} from "framer-motion"
import Footer from '../components/Footer'
import AppointmentSection from '../components/AppointmentSection'
import Segmento from '../components/Segmento'
import QuienesSomosAlt from '../components/QuienesSomosAlt'
import ClientsSection from '../components/ClientSection'
import SectionAnalytics from '../components/SectionAnalytics'
import CuadroComparativo from '../components/CuadroComparativo'
import Estadisticas from '../components/Estadisticas'
import Contact from '../components/Contact'
import Caracteristicas from '../components/Caracteristicas'
import { Helmet } from 'react-helmet';


export default function Amazon() {
  const opcion1={
    title: "Lanza en Amazon!",
    description: "¿Aún no vendés en Amazon? Te guiamos paso a paso para abrir tu cuenta y conquistar esta jungla digital.",
    icon: "/iconos/launch.webp",
    link: "/amazon/beginner"
  }
  const opcion2={
    title: "Potencia tu negocio en Amazon",
    description: "Sos vendedor en Amazon y buscás potenciar tu marca al máximo? Somos los indicados para ayudarte a alcanzar tus objetivos.",
    icon: "/iconos/enhance.webp",
    link: "/amazon/advanced"
  }
  const agenciasClasicas=[
    "Conocimiento generalista de e-commerce.",
    "Usan la misma receta para todas las marcas.",
    "Se enfocan en “gestionar tareas”.",
    "Aceptan demasiados clientes y bajan la calidad.",
    "Prometen resultados irreales y maquillan problemas.",
    "Ven al cliente como un fee mensual.",
    "Gastan presupuesto sin criterio.",
    "Tácticas sueltas y de corto plazo.",
    "Procesos rígidos y lentos.",
    "Reportes genéricos y poca comunicación.",
  ]
  const jungleGrowth=[
    "Experiencia profunda en Amazon (lanzamiento y escalado, PPC y cuenta).",
    "Estrategia 100% a medida según mercado, producto y objetivos.",
    "Nos enfocamos en crecer la marca: posicionamiento, demanda y rentabilidad.",
    "Portfolio limitado para dar atención senior y resultados.",
    "Transparencia radical: decimos la verdad, incluso si es difícil.",
    "Socios estratégicos: éxito compartido y relaciones a largo plazo.",
    "Decimos “no” cuando un producto no tiene futuro para no quemar inversión.",
    "Hoja de ruta y mejora continua para consolidar y escalar.",
    "Agilidad: iteramos con datos y reaccionamos rápido al mercado.",
    "Comunicación proactiva y claridad en avances, aprendizajes y próximos pasos.",
  ]
  const services = [
    {
      icon: "/iconos/deal-3.webp",
      titulo: "Socios de Confianza",
      descripcion:
        " Construimos relaciones a largo plazo, convirtiéndonos en un aliado estratégico para tu negocio en Amazon.",
    },
    {
      icon: "/iconos/quality.webp",
      titulo: "Servicio Limitado",
      descripcion:
        "Priorizamos la calidad, gestionando un número limitado de cuentas para asegurar máxima dedicación en cada proyecto.",
    },
    {
      icon: "/iconos/innovation.webp",
      titulo: "Innovación Continua",
      descripcion:
        "Estamos siempre un paso adelante, aplicando inteligencia artificial y nuevas tecnologías para optimizar campañas en tiempo real y adaptarnos a los cambios del marketplace.",
    },
  ]
  return (
    <>
      <Helmet>
        <title>Jungle Growth | Agencia experta en Amazon: PPC, SEO y crecimiento</title>
        <meta
          name="description"
          content="Lanzamos y escalamos marcas en Amazon. PPC rentable, SEO de listings y A+ Content, analítica y reporting claro. Más visibilidad, más conversiones, más ventas."
        />
      </Helmet>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Header />
      <MainBannerVideo video="video-banner.mp4" title={<>Descubre el <span>potencial</span> de tu marca en Amazon</>} icons={false} />
      <AppointmentSection title={<>¿Sabías que <span className="highlight">4 de cada 10</span> compras online ocurren en Amazon?</>} subtitle={"Descubre cómo maximizar tus resultados y dominar esta jungla digital."} />
      <Segmento opcion1={opcion1} opcion2={opcion2} title={<>Incursiona en el <span>sistema AMZ</span></>} />
      <QuienesSomosAlt>
        <h2 className="about-title display-4 fw-bold mb-4 lh-sm">
          <span className="highlight">Tus guías</span> dentro de Amazon
        </h2>
        <motion.p
          className="about-text fs-5 mb-4 lh-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          En <b>Jungle Growth</b> trabajamos junto a marcas que buscan crecer, escalar y consolidarse dentro del <b>ecosistema de Amazon</b>. No nos limitamos a ejecutar acciones aisladas: <b>diseñamos estrategias integrales</b> que conectan producto, mercado, publicidad y rentabilidad.
        </motion.p>
        <motion.p
          className="about-text fs-5 mb-5 lh-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Con un <b>conocimiento profundo</b> del e-commerce y del funcionamiento interno de los algoritmos de <b>Amazon</b>, acompañamos a cada marca en su proceso de <b>crecimiento</b>, desde la optimización inicial hasta el escalado sostenido, siempre con foco en <b>resultados reales y medibles</b>.
        </motion.p>
      </QuienesSomosAlt>
      <ClientsSection />
      <CuadroComparativo agenciasClasicas={agenciasClasicas} jungleGrowth={jungleGrowth} amazon={true} />
      <Estadisticas />
      <Caracteristicas caracteristicas={services} title={"¿Qué <span classname='highlight'>Ofrecemos?</span>"} />
      <SectionAnalytics />
      <Contact />
      <Footer />
    </motion.div>
    </>
  )
}
