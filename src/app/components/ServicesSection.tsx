"use client";

import { Code, Bot, CheckCircle, Star, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ServicesSectionProps {
  servicesRef: React.RefObject<HTMLElement>;
}

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, rápidos y optimizados para todos los dispositivos.",
    color: "bg-blue-500"
  },
  {
    icon: Bot,
    title: "Agentes IA",
    description: "Automatiza tareas repetitivas con asistentes inteligentes personalizados.",
    color: "bg-purple-500"
  },
  {
    icon: CheckCircle,
    title: "Soluciones a Medida",
    description: "Adaptamos nuestras soluciones a tu presupuesto y necesidades específicas.",
    color: "bg-teal-500"
  }
];

export default function ServicesSection({ servicesRef }: ServicesSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={servicesRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-2 rounded-full mb-6">
            <Rocket className="w-5 h-5 mr-2" />
            <span className="font-semibold">Lo que ofrecemos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Soluciones Digitales <span className="text-blue-600">Integrales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología avanzada adaptada a las necesidades reales de tu negocio
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative h-full bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`mb-6 p-4 rounded-xl ${service.color} w-fit`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="flex items-center text-blue-600 font-medium">
                  <span className="mr-2">Explorar servicio</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">4.9/5 en satisfacción</span>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}