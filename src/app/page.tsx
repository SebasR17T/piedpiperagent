"use client";

import { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AdvantagesSection from "./components/AdvantagesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactFormSection from "./components/ContactFormSection";
import Footer from "./components/Footer";

export default function Home() {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="min-h-screen relative">
      <Navbar servicesRef={servicesRef} contactRef={contactRef} />
      <HeroSection />
      <ServicesSection servicesRef={servicesRef} /> 
      <AdvantagesSection />
      <TestimonialsSection />
      <ContactFormSection contactRef={contactRef} />
      <Footer />
    </main>
  );
}
