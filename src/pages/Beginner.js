import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Services from '../components/Services'
import MainBannerVideo from '../components/MainBannerVideo'
import { TrendingUp, Search, BarChart3, Target, CheckCircle } from "lucide-react"
import HowTo from '../components/HowTo'
import PreguntasIdentificacion from '../components/PreguntasIdentificacion'
import Caracteristicas from '../components/Caracteristicas'
import Contact from '../components/Contact'

export default function Beginner() {
  let array=[
    {
      icon: TrendingUp,
      title: "Análisis",
      description: "Nos tomamos el tiempo para entender tu marca, tus metas y los retos que enfrentas. Luego miramos el mercado y a la competencia para detectar oportunidades reales. Con todo eso, trazamos una ruta simple y a tu medida para entrar a Amazon y lanzar con confianza."
    },
    {
      icon: Search,
      title: "Lanzamiento",
      description: "Creamos y pulimos cada listing con SEO de palabras clave, títulos persuasivos, imágenes optimizadas y A+ Content que refuerza la confianza del cliente. Tras dejar tus páginas de producto en su punto óptimo, lanzamos campañas PPC estructuradas y segmentadas por intención de compra y alineadas con los objetivos definidos en la fase de análisis."
    },
    {
      icon: BarChart3,
      title: "Escalabilidad",
      description: "Con los primeros datos del lanzamiento, transformamos insights en decisiones: afinamos audiencias, creatividades y mensajes, priorizamos lo que ya traccion descartamos lo que no. Así consolidamos visibilidad, aceleramos las primeras ventas y preparamos a tu marca para escalar."
    },
  ]
  let preguntas=[
    "¿Cómo creo y gestiono campañas publicitarias exitosas?",
    "¿Cuánto dinero debo invertir al inicio para lanzar mis primeros productos?",
    "¿Mis productos van a ser competitivos en el marketplace?",
    "¿Vender en Amazon me dará ganancias rápidas o es un plan a mediano plazo?",
    "¿Cómo gestiono los envíos dentro de la plataforma?",
    "¿Puedo escalar mi negocio en Amazon aunque arranque con pocos productos?",
  ]
  const steps = [
      {
        number: "01",
        title: "Descubrimiento",
        description:
          "Conocemos tu marca y competencia, analizamos oportunidades y trazamos un plan estratégico alineado a tus objetivos.",
        icon: Target,
      },
      {
        number: "02",
        title: "Preparación Estratégica del Lanzamiento",
        description:
          "Diseñamos estrategias personalizadas, optimizamos listados y campañas, y generamos alto tráfico para maximizar conversiones en lanzamientos o relanzamientos.",
        icon: TrendingUp,
      },
      {
        number: "03",
        title: "Lanzamiento",
        description:
          "Lanzamos productos con campañas estratégicas, segmentación y keywords relevantes, generando tráfico masivo, posicionamiento en Amazon y crecimiento rentable sostenido.",
        icon: CheckCircle,
      },
      {
        number: "04",
        title: "Seguimiento y Optimización",
        description:
          "Seguimos y optimizamos campañas diariamente, ajustando estrategias y métricas clave para maximizar rentabilidad y lograr crecimiento sostenible en Amazon.",
        icon: CheckCircle,
      },
    ]
  const caracteristicas = [
    {
      icon: "🎯",
      titulo: "Personalización",
      descripcion:
        "Tu proyecto es único, por eso diseñamos una estrategia exclusiva para ti, con un único objetivo: conseguir los mejores resultados.",
    },
    {
      icon: "👥",
      titulo: "Equipo Dedicado",
      descripcion:
        "Desde el inicio se asignará un equipo de 4 especialistas en las diferentes áreas, con dedicación full focus en escalar tu negocio.",
    },
    {
      icon: "💎",
      titulo: "Servicio Premium",
      descripcion:
        "Priorizamos la calidad de nuestros servicios, por ello no gestionamos más de 30 marcas para asegurar la máxima dedicación.",
    },
  ]
  return (
    <>
      <Header />
      <MainBannerVideo video="video-banner-2.mp4" title="El <span class='highlight'>futuro de tu marca</span> comienza en Amazon" />
      <Services 
        array={array} 
        title="Lo que <span class='highlight'>podemos</span> hacer por vos" 
      />
      <HowTo steps={steps} />
      <PreguntasIdentificacion preguntas={preguntas} />
      <Caracteristicas caracteristicas={caracteristicas} />
      <Contact />
      <Footer />
    </>
  )
}
