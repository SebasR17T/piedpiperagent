"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Bot, Menu, X, Rocket } from "lucide-react";

interface NavbarProps {
  servicesRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

export default function Navbar({ servicesRef, contactRef }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Servicios", action: () => scrollToSection(servicesRef), isCta: true },
    { name: "Demos", href: "/demos", isCta: true },
    { name: "Contacto", action: () => scrollToSection(contactRef), isCta: true }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-blue-600/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 group-hover:from-blue-700 group-hover:to-blue-900 transition-colors">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">
              <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                Pied-Piper
              </span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="px-6 py-2.5 rounded-full font-medium bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm flex items-center gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    {item.name}
                  </a>
                ) : (
                  <button
                    onClick={item.action}
                    className="px-6 py-2.5 rounded-full font-medium bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm flex items-center gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    {item.name}
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-blue-600/95 backdrop-blur-lg shadow-lg"
          >
            <div className="px-4 sm:px-6 py-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="border-b last:border-0 border-white/10"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block py-4 text-white/90 hover:text-white font-medium transition-colors flex items-center gap-2"
                    >
                      <Rocket className="w-5 h-5" />
                      {item.name}
                    </a>
                  ) : (
                    <button
                      onClick={item.action}
                      className="block w-full py-4 text-left text-white/90 hover:text-white transition-colors font-medium flex items-center gap-2"
                    >
                      <Rocket className="w-5 h-5" />
                      {item.name}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}