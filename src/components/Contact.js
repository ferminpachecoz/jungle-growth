import React, { useState } from "react"
import { motion } from "framer-motion"
import "../styles/Contact.scss"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ show: false, ok: true, msg: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
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
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background */}
      <motion.img
        src="/textures/pexels-tarcila.webp"
        className="contact__bg"
        alt="Imagen de fondo con hojas"
        initial={{ scale: 1.08, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Toast */}
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`jg-toast ${toast.ok ? "jg-toast--ok" : "jg-toast--err"}`}
          role="alert"
          aria-live="polite"
        >
          {toast.msg}
        </motion.div>
      )}

      <div className="contact__container" id="contacto">
        <motion.h2
          className="contact__title"
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contactanos
        </motion.h2>

        <div className="contact__grid">
          {/* Form */}
          <motion.div
            className="contact__panel"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="contact__input"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="contact__input"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__textarea"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={7}
                />
              </div>

              <motion.button
                type="submit"
                className="contact__button"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </motion.button>
            </form>
          </motion.div>

          {/* Logo */}
          <motion.div
            className="contact__side"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src="/iconos/iconos-10.webp"
              loading="lazy"
              className="contact__logo"
              alt="Icono Jungle Growth Naranja"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
