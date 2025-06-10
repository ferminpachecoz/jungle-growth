import React from 'react'
import "../styles/SectionBeneficios.scss"
import { motion } from 'framer-motion'

export default function SectionBeneficios() {
  const array = [
    {
      icon: "/iconos/creativity.png",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    },
    {
      icon: "/iconos/creativity.png",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    },
    {
      icon: "/iconos/creativity.png",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    },
  ]

  return (
    <motion.div
      className='section-beneficios g-5'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className='contenedor row justify-content-between'>
        {array.map((item, index) => (
          <motion.div
            key={index}
            className='col'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className='content'
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className='image-container'>
                <motion.span
                  className='image'
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img src={item.icon} alt={item.title} />
                </motion.span>
              </div>
              <p className='title'>{item.title}</p>
              <p className='description'>{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
