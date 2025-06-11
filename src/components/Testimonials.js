import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import "../styles/Testimonials.scss";

const testimonios = [
  {
    nombre: 'Martina Ríos',
    imagen: 'user-placeholder.webp',
    comentario:"Desde que arrancamos a trabajar con Orka logramos aumentar 6x el retorno de la inversión. Seguimos trabajando juntos para alcanzar objetivos cada vez mas ambiciosos.",
  },
  {
    nombre: 'E-commerce Pilar',
    imagen: 'user-placeholder.webp',
    comentario:"Desde que arrancamos a trabajar con Orka logramos aumentar 6x el retorno de la inversión. Seguimos trabajando juntos para alcanzar objetivos cada vez mas ambiciosos.",
  },
  {
    nombre: 'Tomás F.',
    imagen: 'user-placeholder.webp',
    comentario:"Desde que arrancamos a trabajar con Orka logramos aumentar 6x el retorno de la inversión. Seguimos trabajando juntos para alcanzar objetivos cada vez mas ambiciosos.",
  },
  {
    nombre: 'Laura S.',
    imagen: 'user-placeholder.webp',
    comentario:"Desde que arrancamos a trabajar con Orka logramos aumentar 6x el retorno de la inversión. Seguimos trabajando juntos para alcanzar objetivos cada vez mas ambiciosos.",
  },
  {
    nombre: 'Maximiliano D.',
    imagen: 'user-placeholder.webp',
    comentario:"Desde que arrancamos a trabajar con Orka logramos aumentar 6x el retorno de la inversión. Seguimos trabajando juntos para alcanzar objetivos cada vez mas ambiciosos.",
  },
  {
    nombre: 'Juan Carlos F.',
    imagen: 'user-placeholder.webp',
    comentario:"Desde que arrancamos a trabajar con Orka logramos aumentar 6x el retorno de la inversión. Seguimos trabajando juntos para alcanzar objetivos cada vez mas ambiciosos.",
  },
];

export default function TestimonialSwiper() {
  return (
    <section
      style={{ backgroundColor: '#EEF4E9', color: '#033220', padding: '4rem 0' }}
      className='testimonials'
    >
      <div className="container">
        <h1 className="text-center">
          Nuestros resultados hablan por sí solos
        </h1>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          loop={false}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {testimonios.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="card h-100"
                style={{
                  backgroundColor: '#033220',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
                  color: '#EEF4E9',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="row align-items-center mb-3">
                  <div className="col-4">
                    <img
                      src={t.imagen}
                      loading='lazy'
                      alt={t.nombre}
                      className="img-fluid rounded-circle"
                      style={{ width: '80px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-8 p-0">
                    <h6 className="mb-0">{t.nombre}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="mb-0">
                      “{t.comentario}”
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
