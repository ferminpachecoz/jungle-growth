import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "../styles/Contact.scss"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ show: false, ok: true, msg: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setToast({ show: true, ok: false, msg: "Completá todos los campos." })
      setTimeout(() => setToast({ show: false, ok: true, msg: "" }), 3000)
      return
    }
    setLoading(true)
    try {
      const result = await emailjs.send(
        "service_2hhjoph",
        "template_rr8ehh5",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "Iu0IuGSghU1fZ8doS"
      )
      console.log("EmailJS result:", result.text)
      setToast({ show: true, ok: true, msg: "¡Mensaje enviado con éxito!" })
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("EmailJS error:", err)
      setToast({ show: true, ok: false, msg: "Error al enviar. Intentá de nuevo." })
    } finally {
      setLoading(false)
      setTimeout(() => setToast({ show: false, ok: true, msg: "" }), 3000)
    }
  }

  return (
    <motion.div
      className='contact'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      id="contact"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contactanos
      </motion.h1>

      <div className='wrapp position-relative' id='contacto'>
        <motion.img
          src="/textures/pexels-tarcila.webp"
          className='fondo-jg'
          alt="Imagen de fondo con hojas"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        />

        {/* Toast/Pop-up */}
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`jg-toast ${toast.ok ? "jg-toast--ok" : "jg-toast--err"}`}
            role="alert"
          >
            {toast.msg}
          </motion.div>
        )}

        <div className='contenedor d-flex flex-wrap'>
          {/* Formulario */}
          <motion.div
            className='col-lg-6 col-12'
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <motion.div
                className='mb-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label className='form-label'>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder='Name'
                  className='form-control'
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div
                className='mb-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label className='form-label'>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder='Email'
                  className='form-control'
                  value={form.email}
                  onChange={handleChange}
                  required
                />
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
                  name="message"
                  cols="30"
                  rows="10"
                  className='form-control'
                  placeholder='Message'
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className='btn btn-primary'
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {loading ? "Enviando..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Imagen del logo */}
          <motion.div
            className='col-lg-6 d-lg-flex d-none align-items-center justify-content-center'
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src="/iconos/iconos-10.webp"
              loading='lazy'
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
