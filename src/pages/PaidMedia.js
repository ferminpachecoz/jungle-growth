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
        <MainBannerVideo video="video-banner-4.mp4" title={<>Paid Media orientado a <span>crecimiento real</span></>} icons={false} />
        <AppointmentSection title={<>Transformá la publicidad en un <span className='highlight'>motor real de crecimiento</span> para tu negocio</>} subtitle={"Usamos Paid Media estratégico para convertir inversión publicitaria en resultados medibles, sostenibles y escalables."} />
        <PaidMediaSection />
        <Caracteristicas caracteristicas={array} title={"Plataformas donde <span classname='highlight'>activamos y por qué</span>"} />
        <HowTo steps={steps}/>
        <Contact />
        <Footer />
      </ motion.div>
    </>
  )
}
