import MainBannerVideo from '../components/MainBannerVideo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { TrendingUp, Search, BarChart3, CheckCircle, Target } from "lucide-react"
import Services from '../components/Services'
import HowTo from '../components/HowTo'
import PreguntasIdentificacion from '../components/PreguntasIdentificacion'
import Caracteristicas from '../components/Caracteristicas'
import Contact from '../components/Contact'
import { Helmet } from 'react-helmet';

export default function Advanced() {
  let array=[
    {
      icon: TrendingUp,
      title: "Análisis",
      description: "Nos tomamos el tiempo para entender tu marca, tus metas y los retos que enfrentas. Luego, analizamos las métricas clave de tu cuenta, auditamos listados, campañas y precios, y estudiamos a la competencia para descubrir en qué podemos superarla. Convertimos esos hallazgos en una ruta personalizada que transforma oportunidades resultados tangibles de ventas y beneficios a largo plazo."
    },
    {
      icon: Search,
      title: "Lanzamiento",
      description: "Pulimos cada listing con SEO de palabras clave, títulos persuasivos, imágenes optimizadas y A+ Content que refuerza la confianza del cliente. Tras dejar tus páginas de producto en su punto óptimo, lanzamos campañas PPC estructuradas y segmentadas por intención de compra y alineadas con los objetivos definidos en la fase de análisis."
    },
    {
      icon: BarChart3,
      title: "Escalabilidad",
      description: "Con los datos en mano y nuestra experiencia, diseñamos estrategias de posicionamiento y escalabilidad que maximizan el rendimiento de tu marca en Amazon. Optimizamos campañas y métricas clave de forma continua para superar objetivos y expandir tu negocio de manera sostenible."
    },
  ]
  const steps = [
    {
      number: "01",
      title: "Descubrimiento",
      description:
        "Conocemos tu marca y competencia, analizamos listados y trazamos un plan estratégico alineado a tus objetivos y recursos.",
      icon: Target,
    },
    {
      number: "02",
      title: "Preparación Estratégica del Lanzamiento",
      description:
        "Analizamos métricas clave, optimizamos listados y campañas, y generamos tráfico para maximizar conversiones en lanzamientos o relanzamientos.",
      icon: TrendingUp,
    },
    {
      number: "03",
      title: "Lanzamiento",
      description:
        "Lanzamos productos con campañas estratégicas y keywords relevantes, generando tráfico masivo, posicionamiento en Amazon y crecimiento rentable sostenido.",
      icon: CheckCircle,
    },
    {
      number: "04",
      title: "Seguimiento y Optimización",
      description:
        "Monitoreamos productos y optimizamos campañas constantemente, ajustando estrategias y métricas clave para lograr escalabilidad sostenible y rentable en Amazon.",
      icon: CheckCircle,
    },
  ]
  const preguntas=[
    "¿Cómo puedo hacer que mis productos aparezcan en la primera página de Amazon?",
    "¿Qué estrategias existen para aumentar mis ventas sin depender solo de la publicidad?",
    "¿Cómo puedo optimizar mis listados para mejorar la conversión?",
    "¿Cómo aprovechar las palabras clave para mejorar el posicionamiento orgánico?",
    "¿Cómo puedo escalar mis ventas de manera sostenible a largo plazo?",
    "¿Qué tácticas ayudan a diferenciarme de la competencia en mi categoría?",
  ]
  const caracteristicas = [
    {
      icon: "/iconos/strategy-development-2.webp",
      titulo: "Acompañamiento Estratégico",
      descripcion:
        "No solo gestionamos tu cuenta: nos convertimos en tu socio estratégico para escalar tu negocio en Amazon con una visión a largo plazo.",
    },
    {
      icon: "/iconos/team-2.webp",
      titulo: "Equipo Multidisciplinario",
      descripcion:
        "Asignamos un equipo de especialistas en marketing, data y creatividad que trabajan en conjunto para potenciar tu marca.",
    },
    {
      icon: "/iconos/economic-growth-2.webp",
      titulo: "Crecimiento Escalable",
      descripcion:
        "Diseñamos un plan a medida que te permite crecer de manera rentable y sostenible dentro de Amazon.",
    },
  ]
  return (
    <>
      <Helmet>
        <title>Potenciá tu marca en Amazon | Escalá ventas con PPC + SEO</title>
        <meta
          name="description"
          content="Si ya vendés en Amazon, te ayudamos a escalar: auditoría, optimización de listings, PPC eficiente, mejora de conversión y analítica avanzada para crecer con rentabilidad."
        />
      </Helmet>
      <Header />
      <MainBannerVideo 
        video="/video-banner-amz-subs.mp4" 
        title={<>¡Haz crecer <span>tu negocio</span> en Amazon!</>}
        opacity="0.4"
      />
      <Services 
        array={array} 
        title="Acelera <span class='highlight'>tus ventas</span> en AMZ y lleva tu marca al <span class='highlight'>siguiente nivel</span>" 
      />
      <HowTo steps={steps} />
      <PreguntasIdentificacion preguntas={preguntas} />
      <Caracteristicas caracteristicas={caracteristicas} />
      <Contact />
      <Footer />
    </>
  )
}
