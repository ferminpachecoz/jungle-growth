import Header from '../components/Header'
import MainBanner from '../components/MainBanner'
import Services from '../components/Services'
import HowTo from '../components/HowTo'
import SecondaryBanner from '../components/SecondaryBanner'
import SectionBeneficios from '../components/SectionBeneficios'
import TestimonialSwiper from '../components/Testimonials'
import SectionAnalytics from '../components/SectionAnalytics'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import {motion} from "framer-motion"
import MainBannerVideo from '../components/MainBannerVideo'
import QuienesSomos from '../components/QuienesSomos'
import ClientsSection from '../components/ClientSection'
import AppointmentSection from '../components/AppointmentSection'
import Segmento from '../components/Segmento'
import CuadroComparativo from '../components/CuadroComparativo'
import Estadisticas from '../components/Estadisticas'
import { TrendingUp, Search, BarChart3 } from "lucide-react"
import QuienesSomosAlt from '../components/QuienesSomosAlt'
import Caracteristicas from '../components/Caracteristicas'


export default function Home() {
  const services = [
    {
      icon: TrendingUp,
      title: "Socios de Confianza",
      description:
        " Construimos relaciones a largo plazo, convirtiéndonos en un aliado estratégico para tu negocio en Amazon.",
    },
    {
      icon: Search,
      title: "Servicio Limitado",
      description:
        "Priorizamos la calidad, gestionando un número limitado de cuentas para asegurar máxima dedicación en cada proyecto.",
    },
    {
      icon: BarChart3,
      title: "Innovación Continua",
      description:
        "Estamos siempre un paso adelante, aplicando inteligencia artificial y nuevas tecnologías para optimizar campañas en tiempo real y adaptarnos a los cambios del marketplace.",
    },
  ]
  const caracteristicas = [
    {
      icon: "🎯",
      titulo: "Socios de Confianza",
      descripcion:
        " Construimos relaciones a largo plazo, convirtiéndonos en un aliado estratégico para tu negocio en Amazon.",
    },
    {
      icon: "👥",
      titulo: "Servicio Limitado",
      descripcion:
        "Priorizamos la calidad, gestionando un número limitado de cuentas para asegurar máxima dedicación en cada proyecto.",
    },
    {
      icon: "♾️",
      titulo: "Innovación Continua",
      descripcion:
        "Estamos siempre un paso adelante, aplicando inteligencia artificial y nuevas tecnologías para optimizar campañas en tiempo real y adaptarnos a los cambios del marketplace.",
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Header />
      {/* <MainBanner /> */}
      <MainBannerVideo video="video-banner.mp4" />
      <AppointmentSection />
      <Segmento />
      {/* <QuienesSomos /> */}
      <QuienesSomosAlt />
      <ClientsSection />
      <CuadroComparativo />
      <Estadisticas />
      <Caracteristicas caracteristicas={caracteristicas} title="¿Qué <span class='highlight'>Ofrecemos</span>?" />
      {/*<Services array={services} title="¿Qué <span class='highlight'>Ofrecemos</span>?" />*/}      
      <SectionAnalytics />
      <Contact />
      <Footer />
    </ motion.div>
  )
}
