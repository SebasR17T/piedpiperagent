"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white pt-32 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="mb-8">
              <span className="bg-white/20 text-sm px-4 py-2 rounded-full font-medium mb-4 inline-block">
                🚀 Impulsa tu negocio digital
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300">
                Transformación Digital
              </span>{' '}
              para Pequeños Negocios
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-10">
              Creamos soluciones web inteligentes con IA para automatizar procesos, 
              atraer clientes y aumentar tus ventas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg
                         hover:shadow-2xl hover:shadow-cyan-300/30 transition-all duration-300 flex items-center gap-2"
              >
                <span>Iniciar Proyecto</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
              
              
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-lg opacity-30 
                            group-hover:opacity-40 transition duration-300" />
              
              <div className="relative bg-white/5 rounded-3xl p-1 backdrop-blur-xl border border-white/10 
                            transform transition-all duration-500 hover:scale-[1.02]">
                <Image 
                  src="/images/agente.jpg"
                  alt="Solución IA integrada"
                  width={640}
                  height={480}
                  className="rounded-2xl w-full h-auto"
                  priority
                />
                
                {/* Floating Element */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10
                              shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-cyan-400/20 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Análisis Automatizado</h3>
                      <p className="text-sm text-blue-200">Procesamiento en tiempo real</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}