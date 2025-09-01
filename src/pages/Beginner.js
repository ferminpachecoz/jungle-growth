import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Services from '../components/Services'
import MainBannerVideo from '../components/MainBannerVideo'
import { TrendingUp, Search, BarChart3 } from "lucide-react"
import HowTo from '../components/HowTo'
import PreguntasIdentificacion from '../components/PreguntasIdentificacion'

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
  return (
    <>
      <Header />
      <MainBannerVideo video="video-banner-2.mp4" title="El <span class='highlight'>futuro de tu marca</span> comienza en Amazon" />
      <Services 
        array={array} 
        title="Lo que <span class='highlight'>podemos</span> hacer por vos" 
      />
      <HowTo />
      <PreguntasIdentificacion preguntas={preguntas} />
      <Footer />
    </>
  )
}
