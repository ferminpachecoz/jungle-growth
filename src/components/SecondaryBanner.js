import React from 'react'
import "../styles/SecondaryBanner.scss"
import { motion } from 'framer-motion'

export default function SecondaryBanner() {
  return (
    <motion.div
      className='secondary-banner d-none d-lg-flex'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className='col-lg-7 d-flex align-items-center'
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1>Confiá tu estrategia digital en nosotros</h1>
      </motion.div>

      <motion.div
        className='col-lg-5 image position-relative'
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img
          src="/textures/pexels-anete-lusina.jpg"
          loading='lazy'
          className='back'
          alt="Image of sand"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.span
          className='logo-container'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src="/logos/Logo-Simple-Blanco.webp" alt="Logo Simple Blanco" />
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
