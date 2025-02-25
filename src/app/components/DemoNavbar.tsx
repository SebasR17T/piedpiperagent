'use client';

import { motion, useScroll } from 'framer-motion';
import Link from "next/link";
import { Bot, Rocket } from "lucide-react";
import { useEffect, useState } from 'react';

export default function DemoNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-blue-600/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo animado */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 group-hover:from-blue-700 group-hover:to-blue-900 transition-colors">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white transition-colors">
                <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                  Pied-Piper
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Botón de contacto animado */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full font-medium bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  <span>Contacto</span>
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}