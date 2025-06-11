import React from 'react'
import "../styles/FreeProposal.scss"
import { motion } from 'framer-motion'

export default function FreeProposal() {
  return (
    <motion.div
      className='free-proposal'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className='big-card d-flex flex-column flex-lg-row'
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          className='col-lg-5 col-12'
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>Lorem ipsum dolor</h3>
          <p>
            Nos destacamos por la cercanía y trabajo en equipo con nuestros
            clientes, lo que incluye servicio a la medida de tus necesidades.
          </p>
        </motion.div>

        <div className='col-lg-2 d-none d-lg-block'></div>

        <motion.div
          className='col-lg-5 col-12 d-flex justify-content-center align-items-center'
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Get your free proposal
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
