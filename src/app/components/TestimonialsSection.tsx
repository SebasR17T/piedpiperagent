"use client";

import { Star, StarHalf, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Andrés Gómez",
    company: "Empanadas 'El Parce'",
    rating: 5,
    image: "/images/reseña1.jpg",
    text: "¡Increíble! El equipo de Pied-Piper me desarrolló una página web increíble para mi negocio. Las ventas han aumentado muchísimo, ¡estoy muy contento! El bot que implementaron atiende a los clientes de lujo, superando hasta mis expectativas."
  },
  {
    name: "Carolina Martínez",
    company: "Peluquería 'Puro Visaje'",
    rating: 4.5,
    image: "/images/reseña2.jpg",
    text: "Oigan, estos pelados son una cosa seria. Me armaron una página súper chévere y un bot que agenda los turnos sin enredos. Ya no tengo que estar pendiente del WhatsApp 24/7, ¡qué ganancia! Quedé enamorada, todo muy profecional."
  },
  {
    name: "Juan David Restrepo",
    company: "Cafetería 'El Despelote'",
    rating: 5,
    image: "/images/reseña3.jpg",
    text: "¡Qué maravilla! Pied-Piper me ayudó a automatizar mi cafetería con un bot que toma pedidos y envía notificaciones. Ahora puedo atender a más clientes sin perder calidad en el servicio. ¡Gracias por tanto!"}
];

const RatingStars = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <motion.div
        key={`star-${i}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
      </motion.div>
    );
  }
  
  if (hasHalfStar) {
    stars.push(
      <motion.div
        key="half-star"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <StarHalf className="w-6 h-6 fill-yellow-400 text-yellow-400" />
      </motion.div>
    );
  }
  
  while (stars.length < 5) {
    stars.push(
      <motion.div
        key={`empty-star-${stars.length}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Star className="w-6 h-6 text-gray-200" />
      </motion.div>
    );
  }

  return <div className="flex gap-1">{stars}</div>;
};

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full mb-6">
            <Quote className="w-5 h-5 mr-2" />
            <span className="font-semibold">Testimonios Reales</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Historias de Éxito{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              que Inspiran
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cómo estamos transformando negocios con tecnología innovadora
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative overflow-hidden rounded-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-white/20 group-hover:border-transparent transition-all"
                      width={64}
                      height={64}
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <RatingStars rating={testimonial.rating} />
                </div>

                <blockquote className="relative">
                  <Quote className="absolute -top-4 left-0 w-8 h-8 text-blue-100/40" />
                  <p className="text-gray-600 leading-relaxed pl-8">
                    {testimonial.text}
                  </p>
                </blockquote>

                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}