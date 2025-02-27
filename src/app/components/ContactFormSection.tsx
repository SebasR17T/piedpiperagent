'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Rocket, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import type { RefObject } from 'react';

interface ContactFormSectionProps {
  contactRef: RefObject<HTMLElement>;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubmissionStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const API_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_API || 'https://n8n.crecimientocapilar.com/webhook/6915be48-178c-4d95-a901-a1e4609f9f0e';

const ContactFormSection = ({ contactRef }: ContactFormSectionProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>({
    type: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (submissionStatus.type) {
      const timer = setTimeout(() => {
        setSubmissionStatus({ type: null, message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus({
          type: 'success',
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
        });
        formRef.current?.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus({
        type: 'error',
        message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      ref={contactRef}
      id="contact"
      className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 opacity-5 [background-image:radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-24"
        >
          {/* Left Column */}
          <motion.div 
            variants={formVariants}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full mb-6">
              <Rocket className="w-5 h-5 mr-2" />
              <span className="font-semibold">Contacto Rápido</span>
            </div>
            
            <motion.h2 
              id="contact-heading"
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transformemos tu{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Visión en Realidad
              </span>
            </motion.h2>
            
            <motion.p
              className="text-lg lg:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Completa el formulario y nuestro equipo de expertos se pondrá en contacto contigo en menos de 24 horas.
            </motion.p>

            <motion.div 
              className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-200/50 shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                Nuestro Proceso
              </h3>
              <ul className="space-y-4">
                {['Análisis detallado de necesidades', 'Propuesta técnica personalizada', 'Estimación de tiempos y costos'].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-blue-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            variants={formVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-white/50" />
            <div className="relative space-y-6">
              {(['name', 'email', 'message'] as (keyof FormData)[]).map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <label 
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-2 ml-1"
                  >
                    {{
                      name: 'Nombre completo',
                      email: 'Correo electrónico',
                      message: 'Detalles del proyecto'
                    }[field]}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      required
                      rows={5}
                      className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
                      placeholder="Describe tus objetivos y requerimientos..."
                      value={formData[field as keyof FormData]}
                      onChange={(e) => setFormData({...formData, [field as keyof FormData]: e.target.value})}
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      required
                      className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
                      placeholder={{
                        name: 'Ej. Juan Pérez',
                        email: 'ejemplo@empresa.com'
                      }[field]}
                      value={formData[field]}
                      onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                    />
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <span className="group-hover:translate-x-2 transition-transform">
                        Enviar solicitud
                      </span>
                      <Send className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform" />
                    </>
                  )}
                </button>
              </motion.div>

              {submissionStatus.type && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-4 rounded-xl border ${
                    submissionStatus.type === 'success' 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  } flex items-start gap-3`}
                >
                  {submissionStatus.type === 'success' ? (
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                  )}
                  <span>{submissionStatus.message}</span>
                </motion.div>
              )}
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;