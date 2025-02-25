"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, Zap, ShieldCheck, LayoutTemplate, BarChart, TrendingUp } from "lucide-react";

export default function AdvantagesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const advantages = [
    {
      icon: Zap,
      title: "Automatización 24/7",
      emoji: "🤖",
      description: "Chatbots inteligentes que atienden clientes, procesan pedidos y gestionan consultas incluso fuera de horario laboral, aumentando tu productividad un 40%.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: ShieldCheck,
      title: "Reducción de Errores",
      emoji: "📉",
      description: "Sistemas de IA con 99.5% de precisión en tareas repetitivas, minimizando fallos en inventario, facturación y atención al cliente.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BarChart,
      title: "Decisiones Informadas",
      emoji: "📊",
      description: "Analítica predictiva en tiempo real que identifica patrones de compra, optimiza precios y predice demandas del mercado.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: LayoutTemplate,
      title: "Presencia Online Permanente",
      emoji: "🌐",
      description: "Sitio web responsive que muestra tu marca las 24 horas, compatible con todos los dispositivos y navegadores modernos.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Rocket,
      title: "Control Total de Marca",
      emoji: "🎨",
      description: "Diseño web personalizado que refleja tu identidad corporativa.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: TrendingUp,
      title: "Generación de Leads Calificados",
      emoji: "🚀",
      description: "Estrategias SEO y landing pages optimizadas que aumentan conversiones hasta un 200% mediante formularios inteligentes y CTAs efectivos.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full mb-6">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-semibold">Ventajas Competitivas</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
              Potencia tu Negocio con Soluciones{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Tecnológicas Integrales
              </span>
            </h2>
          </motion.div>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${advantage.color}`}>
                      <advantage.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-4xl">{advantage.emoji}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 mb-6">{advantage.description}</p>
                  
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`w-8 h-8 bg-gradient-to-br ${advantage.color} rounded-full`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="mt-16 text-center"
          >
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium px-4 bg-gradient-to-r from-blue-50 to-teal-50 py-6 rounded-2xl border border-blue-100">
              Combinando automatización con IA y una presencia web profesional, nuestras soluciones aumentan un{" "}
              <strong className="text-blue-600">150% la eficiencia operativa</strong> mientras construyen una{" "}
              <strong className="text-teal-600">imagen corporativa sólida</strong>
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced Banner Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
            alt="Technology Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
        </motion.div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-left max-w-2xl"
          >
            <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
              Transformación Digital{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                para el Futuro
              </span>
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Descubre cómo nuestras soluciones pueden escalar tu empresa en la era digital
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
            >
              Agenda una Demostración
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}