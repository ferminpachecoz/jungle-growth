import Header from '../components/Header'
import '../styles/MainBanner.scss'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import {motion} from "framer-motion"
import MainBannerVideo from '../components/MainBannerVideo'
import Segmento from '../components/Segmento'
import CuadroComparativo from '../components/CuadroComparativo'
import QuienesSomosAlt from '../components/QuienesSomosAlt'
import Caracteristicas from '../components/Caracteristicas'
import PaidMediaSection from '../components/PaidMediaSection'
import AISection from '../components/AISection'


export default function Home() {
  const caracteristicas = [
    {
      icon: "/iconos/deal.webp",
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
  const opcion1={
    title: "Paid Media",
    description: "Diseñamos y optimizamos campañas publicitarias basadas en datos para atraer clientes, escalar ventas y maximizar el retorno de inversión.",
    icon: "/paid-media.webp",
    link: "/paid-media"
  }
  const opcion2={
    title: "Amazon Growth",
    description: "Acompañamos marcas en su crecimiento dentro de Amazon, optimizando listings, publicidad y estrategia para aumentar visibilidad, ventas y rentabilidad.",
    icon: "/economic-growth.webp",
    link: "/amazon"
  }
  const agenciasClasicas = [
    "Usan la misma receta para todas las marcas, sin entender el negocio ni el contexto.",
    'Se enfocan en “gestionar tareas” en lugar de generar impacto real.',
    "Trabajan con procesos manuales, poco automatizados y dependientes de personas.",
    "No utilizan inteligencia artificial ni tecnología avanzada para optimizar decisiones.",
    "Aceptan demasiados clientes y sacrifican calidad y profundidad estratégica.",
    "Prometen resultados irreales y maquillan problemas cuando no llegan.",
    "Ven al cliente como un fee mensual, no como un socio a largo plazo.",
    "Gastan presupuesto publicitario sin criterio ni análisis profundo de datos.",
    "Aplican tácticas sueltas y de corto plazo, sin visión de escalado.",
    "Operan con procesos rígidos, lentos y poco adaptables al mercado.",
    "Entregan reportes genéricos, con poca claridad y escasa comunicación.",
    "Tienen un conocimiento generalista de e-commerce y paid media.",
    "Toman decisiones por intuición, sin respaldo real en datos."
  ]

  const jungleGrowth = [
    "Experiencia profunda en Amazon, Paid Media y ecosistemas digitales, desde lanzamiento hasta escalado.",
    "Estrategias 100% a medida según mercado, producto, canal y objetivos reales.",
    "Integración de inteligencia artificial, automatizaciones y software avanzado como parte central de la estrategia.",
    "Uso de IA para creación de contenido, optimización de campañas y análisis predictivo.",
    "Decisiones respaldadas por data analytics, dashboards claros y análisis profundo.",
    "Enfoque total en crecer la marca: posicionamiento, demanda, rentabilidad y escala.",
    "Gestión inteligente de presupuestos, orientada a performance, eficiencia y ROAS real.",
    "Portfolio limitado para brindar atención senior y foco estratégico.",
    "Transparencia radical: decimos la verdad, incluso cuando es incómoda.",
    "Visión de largo plazo con hoja de ruta clara y mejora continua.",
    "Agilidad operativa: iteramos rápido, reaccionamos con datos y optimizamos constantemente.",
    "Dominio avanzado de Paid Media (Google Ads, Meta Ads, TikTok Shop) integrado al negocio.",
    "Comunicación proactiva y estratégica: avances, aprendizajes y próximos pasos.",
    "Socios estratégicos: éxito compartido y relaciones a largo plazo.",
    'Decimos “no” cuando un producto o estrategia no tiene futuro, para proteger la inversión.',
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Header />
      {/* <MainBanner /> */}
      <MainBannerVideo video="video-banner.mp4" title={<>Tus guías en el <span>ecosistema digital</span></>} icons={true} />
      {/* <AppointmentSection /> */}
      <Segmento opcion1={opcion1} opcion2={opcion2} title={<>Fortalecé tu <span className='higlight'>presencia online</span> </>} />
      {/* <QuienesSomos /> */}
      <QuienesSomosAlt />
      <PaidMediaSection />
      <AISection />
      {/* <ClientsSection /> */}
      <CuadroComparativo agenciasClasicas={agenciasClasicas} jungleGrowth={jungleGrowth} amazon={false} />
      {/* <Estadisticas /> */}
      <Caracteristicas caracteristicas={caracteristicas} title="¿Qué <span class='highlight'>Ofrecemos</span>?" />
      {/*<Services array={services} title="¿Qué <span class='highlight'>Ofrecemos</span>?" />*/}      
      {/* <SectionAnalytics /> */}
      <Contact />
      <Footer />
    </ motion.div>
  )
}
