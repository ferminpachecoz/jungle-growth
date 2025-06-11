import { motion } from 'framer-motion'
import "../styles/SectionAnalytics.scss"

export default function SectionAnalytics() {
  return (
    <motion.div
      className="section-analytics"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="contenedor d-flex flex-wrap align-items-center justify-content-between">

        {/* Columna de texto */}
        <motion.div
          className="col-lg-4 col-12"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>Lorem ipsum dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis.
          </p>
        </motion.div>

        {/* Imagen de laptop */}
        <motion.div
          className="col-lg-8 col-12 image"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            src="mockup-laptop.png"
            alt="Mockup Laptop"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </motion.div>

        {/* Ícono superpuesto */}
        <motion.span
          className="logo-container position-absolute"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/iconos/iconos-03.png" alt="Icono Jungle Growth" />
        </motion.span>
      </div>
    </motion.div>
  )
}
