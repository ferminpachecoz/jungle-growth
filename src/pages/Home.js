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
import { Lightbulb, Layers, Target, Atom } from "lucide-react"
import EquipoSection from '../components/EquipoSection'

export default function Home() {
  const caracteristicas = [
    {
      icon: "/iconos/deal-3.webp",
      titulo: "Socios de Confianza",
      descripcion:
        " Construimos relaciones a largo plazo, convirtiéndonos en un aliado estratégico para tu negocio.",
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
        "Estamos siempre un paso adelante, aplicando inteligencia artificial y nuevas tecnologías para optimizar campañas en tiempo real y adaptarnos a los cambios del mercado.",
    },
  ]
  const opcion1={
    title: "Paid Media",
    description: "Diseñamos y optimizamos campañas publicitarias basadas en datos para atraer clientes, escalar ventas y maximizar el retorno de inversión.",
    icon: "/iconos/paid-media.webp",
    link: "/paid-media"
  }
  const opcion2={
    title: "Amazon Growth",
    description: "Acompañamos marcas en su crecimiento dentro de Amazon, optimizando listings, publicidad y estrategia para aumentar visibilidad, ventas y rentabilidad.",
    icon: "/iconos/economic-growth.webp",
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
    "Aplican tácticas sueltas y de corto plazo, sin visión de escalado.",
    "Entregan reportes genéricos, con poca claridad y escasa comunicación.",
  ]

  const jungleGrowth = [
    "Experiencia profunda en Amazon, Paid Media y ecosistemas digitales, desde lanzamiento hasta escalado.",
    "Estrategias 100% a medida según mercado, producto, canal y objetivos reales.",
    "Integración de inteligencia artificial, automatizaciones y software avanzado como parte central de la estrategia.",
    "Uso de IA para creación de contenido, optimización de campañas y análisis predictivo.",
    "Decisiones respaldadas por data analytics, dashboards claros y análisis profundo.",
    "Portfolio limitado para brindar atención senior y foco estratégico.",
    "Transparencia radical: decimos la verdad, incluso cuando es incómoda.",
    "Comunicación proactiva y estratégica: avances, aprendizajes y próximos pasos.",
    "Socios estratégicos: éxito compartido y relaciones a largo plazo.",
  ]

  const paidMedia = {
    sectionTitle: 'Expertos en <span class="highlight">Paid Media</span> & <span class="highlight">Data Analytics</span>',
    mainIcon: Atom,
    benefitsTitle: "Publicidad inteligente impulsada por datos",
    benefits: [
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
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Header />
      {/* <MainBanner /> */}
      <MainBannerVideo 
        video="video-banner.mp4" 
        title={<>Tus guías en el <span>ecosistema digital</span></>} 
        animacion={true} 
        icons={true} 
        opacity="0.4"
      />
      {/* <AppointmentSection /> */}
      <Segmento opcion1={opcion1} opcion2={opcion2} title={<>Fortalecé tu <span className='higlight'>presencia online</span> </>} />
      {/* <QuienesSomos /> */}
      <QuienesSomosAlt>
        <h2 className="about-title display-4 fw-bold mb-4 lh-sm">
          Especialistas en el ecosistema de <span className="highlight">Amazon Marketplace</span>
        </h2>
        <motion.p
          className="about-text fs-5 mb-4 lh-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          En Jungle Growth somos una agencia especializada en <b>potenciar tu presencia</b> en Amazon. <b>Con amplia experiencia</b> en el ecosistema de e-commerce, nos convertimos en tu socio estratégico para <b>maximizar ventas y visibilidad</b> en la plataforma más grande del mundo.
        </motion.p>
        <motion.p
          className="about-text fs-5 mb-5 lh-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Nuestro enfoque <b>combina estrategias</b> basadas en datos, <b>optimización constante</b> y un <b>profundo entendimiento</b> de los algoritmos de Amazon, garantizando resultados excepcionales y un <b>crecimiento sostenido</b> para nuestros clientes.
        </motion.p>
      </QuienesSomosAlt>
      <PaidMediaSection data={paidMedia}>
        <p className="main-description">
          En <strong>Jungle Growth</strong> impulsamos el crecimiento de marcas mediante <strong>estrategias avanzadas de Paid Media</strong> y <strong>data analytics</strong>. No solo invertimos en publicidad: tomamos <strong>decisiones inteligentes</strong>, <strong>precisas</strong> y orientadas a <strong>resultados reales y sostenibles</strong>.
        </p>
        <p className="secondary-description">
          Gestionamos campañas en <strong>Google Ads</strong>, <strong>Meta Ads</strong>, <strong>TikTok Shop</strong> y otros canales, apoyándonos en <strong>análisis de datos</strong> para <strong>optimizar presupuestos</strong> y <strong>escalar lo que funciona</strong>. Integramos <strong>performance marketing</strong> y <strong>analítica avanzada</strong> para <strong>medir el funnel</strong> y <strong>maximizar la rentabilidad</strong>.
        </p>
      </PaidMediaSection>
      <AISection />
      {/* <EquipoSection /> */}
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
