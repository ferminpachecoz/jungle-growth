import {motion} from "framer-motion"
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainBannerVideo from '../components/MainBannerVideo'
import AppointmentSection from '../components/AppointmentSection'
import PaidMediaSection from '../components/PaidMediaSection'
import Caracteristicas from '../components/Caracteristicas'
import HowTo from '../components/HowTo'
import { ChartColumnBig, DatabaseBackup, Settings2, BrainCircuit} from "lucide-react"
import Contact from '../components/Contact'
import { Helmet } from 'react-helmet';
import { Lightbulb, Layers, Target, Atom } from "lucide-react"


export default function PaidMedia() {
  const array=[
    {
      icon: "/iconos/meta.webp",
      titulo: "Meta Ads",
      descripcion: "Ideales para generación de demanda, construcción de marca y performance. Nos permiten trabajar audiencias, creatividades y mensajes de forma precisa, impactando tanto en etapas tempranas como en conversión y remarketing."
    },
    {
      icon: "/iconos/google.webp",
      titulo: "Google Ads",
      descripcion: "Fundamental para capturar demanda existente. Trabajamos Search, Display y YouTube para estar presentes cuando el usuario ya está buscando soluciones, productos o marcas, maximizando intención y conversión."
    },
    {
      icon: "/iconos/tik-tok.webp",
      titulo: "TikTok Ads",
      descripcion: "Clave para captar atención, generar descubrimiento y escalar con creatividad nativa.Utilizamos TikTok para impulsar awareness, testear mensajes rápidamente y conectar con audiencias nuevas de manera auténtica y dinámica."
    },
  ]
  const steps=[
    {
      number: "01",
      title: "Análisis de datos publicitarios",
      description: "El diferencial no está solo en las plataformas, sino en cómo se interpretan los datos.Analizamos en profundidad métricas clave para entender qué funciona, por qué funciona y cómo escalarlo",
      icon: DatabaseBackup
    },
    {
      number: "02",
      title: "Integración con herramientas de medición",
      description: "Integramos plataformas publicitarias con sistemas de analítica, dashboards personalizados y herramientas de atribución, asegurando claridad y control sobre cada inversión.",
      icon: ChartColumnBig
    },
    {
      number: "03",
      title: "Estrategias, hipótesis y accionables",
      description: "Convertimos datos en accionables concretos, optimizando audiencias, creatividades, mensajes, estructuras de campaña y presupuestos para mejorar performance de manera sostenida.",
      icon: Settings2
    },
    {
      number: "04",
      title: "Inteligencia Artificial y automatizaciones",
      description: "Incorporamos inteligencia artificial y automatizaciones como parte central de nuestro sistema de Paid Media. Utilizamos IA para optimizar campañas, analizar patrones, mejorar creatividades y acelerar procesos operativos.",
      icon: BrainCircuit
    },
  ]
  const paidMedia = {
    sectionTitle: 'Expertos en <span class="highlight">Paid Media</span> & <span class="highlight">Data Analytics</span>',
    mainIcon: Atom,
    benefitsTitle: "Nuestro enfoque en Paid Media",
    benefits: [
      {
        icon: Lightbulb,
        titulo: "Estrategia guiada por datos",
        descripcion: "Decisiones basadas en datos reales, no en intuición.",
      },
      {
        icon: Layers,
        titulo: "Tecnología e inteligencia artificial aplicada",
        descripcion: "IA para optimizar campañas, acelerar iteraciones y mejorar eficiencia.",
      },
      {
        icon: BrainCircuit,
        titulo: "Automatización para escalar performance",
        descripcion: "Automatizamos procesos para escalar sin perder control ni precisión.",
      },
      {
        icon: Target,
        titulo: "Optimización continua del funnel",
        descripcion: "Optimizamos cada etapa del funnel para maximizar conversión y rentabilidad.",
      },
    ]
  }
  const herramientas = [
    {
      icon: "/iconos/google-analytics.webp",
      titulo: "Google Analytics",
      descripcion: "Entendemos el comportamiento del usuario y medimos el impacto real de cada campaña."
    },
    {
      icon: "/iconos/looker-studio.webp",
      titulo: "Looker Studio",
      descripcion: "Visualizamos datos clave en dashboards claros para tomar decisiones rápidas y estratégicas."
    },
    {
      icon: "/iconos/semrush.webp",
      titulo: "Semrush",
      descripcion: "Analizamos mercado, competencia y oportunidades para optimizar estrategia, mensajes y performance."
    },
  ]
  return (
    <>
      <Helmet>
        <title>Jungle Growth | Escalá tu negocio con Paid Media</title>
        <meta
          name="description"
          content="Diseñamos y optimizamos campañas de Paid Media basadas en datos para escalar ventas, maximizar rentabilidad y generar crecimiento sostenible en cada etapa del funnel."
        />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Header />
        <MainBannerVideo video="video-banner-4.mp4" title={<>Jungle Media Studio <span>escalá con inteligencia</span></>} icons={false} />
        <AppointmentSection title={<>Transformá la publicidad en un <span className='highlight'>motor real de crecimiento</span> para tu negocio</>} subtitle={"Usamos Paid Media estratégico para convertir inversión publicitaria en resultados medibles, sostenibles y escalables."} />
        <PaidMediaSection data={paidMedia}>
          <p className="main-description">
            En <strong>Jungle Growth</strong> abordamos el <strong>Paid Media</strong> como un sistema de crecimiento, donde la tecnología,la creatividad, los datos y la inteligencia artificial trabajan en conjunto para tomar <strong>mejores decisiones</strong> y <strong>escalar resultados</strong> de forma sostenible.
          </p>
          <p className="main-description">
            No ejecutamos campañas de manera aislada: <strong>construimos estructuras</strong> publicitarias basadas en <strong>análisis profundo</strong>, <strong>automatización</strong> y <strong>aprendizaje continuo</strong>, integrando <strong>performance marketing</strong> con <strong>data analytics</strong> para optimizar cada punto del funnel y <strong>maximizar la rentabilidad</strong>.
          </p>
        </PaidMediaSection>
        <Caracteristicas caracteristicas={array} title={"Plataformas donde <span classname='highlight'>activamos y por qué</span>"} />
        <Caracteristicas caracteristicas={herramientas} title={"Datos que <span>impulsan crecimiento<span/>"} />
        <HowTo steps={steps}/>
        <Contact />
        <Footer />
      </ motion.div>
    </>
  )
}
