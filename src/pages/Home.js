import Header from '../components/Header'
import MainBanner from '../components/MainBanner'
import FreeProposal from '../components/FreeProposal'
import Services from '../components/Services'
import HowTo from '../components/HowTo'
import SecondaryBanner from '../components/SecondaryBanner'
import SectionBeneficios from '../components/SectionBeneficios'
import TestimonialSwiper from '../components/Testimonials'
import SectionAnalytics from '../components/SectionAnalytics'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import {motion} from "framer-motion"


export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Header />
      <MainBanner />
      <FreeProposal />
      <Services />
      <HowTo />
      <SecondaryBanner />
      <SectionBeneficios />
      <TestimonialSwiper />
      <SectionAnalytics />
      <Contact />
      <Footer />
    </ motion.div>
  )
}
