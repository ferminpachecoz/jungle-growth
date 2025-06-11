import React from 'react'
import { motion } from 'framer-motion'
import "../styles/Contact.scss"

export default function Contact() {
  return (
    <motion.div
      className='contact'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contactanos
      </motion.h1>

      <div className='wrapp position-relative'>
        <motion.img
          src="/textures/pexels-tarcila.jpg"
          className='fondo-jg'
          alt="Imagen de fondo con hojas"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        />

        <div className='contenedor d-flex flex-wrap'>
          {/* Formulario */}
          <motion.div
            className='col-lg-6 col-12'
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <form>
              <motion.div
                className='mb-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label className='form-label'>Name</label>
                <input type="text" placeholder='Name' className='form-control' />
              </motion.div>

              <motion.div
                className='mb-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label className='form-label'>Email</label>
                <input type="email" placeholder='Email' className='form-control' />
              </motion.div>

              <motion.div
                className='mb-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label className='form-label'>Message</label>
                <textarea
                  cols="30"
                  rows="10"
                  className='form-control'
                  placeholder='Message'
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Imagen del logo */}
          <motion.div
            className='col-lg-6 d-lg-flex d-none align-items-center justify-content-center'
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.img
              src="/iconos/iconos-10.png"
              className='logo-jg'
              alt="Icono Jungle Growth Naranja"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
