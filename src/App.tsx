/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import WorkingHours from "./components/WorkingHours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { TESTIMONIALS as initialTestimonials } from "./data";
import { Testimonial } from "./types";

export default function App() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);

  const handleAddTestimonial = (newTestimonial: Testimonial) => {
    setTestimonials((prev) => [newTestimonial, ...prev]);
  };

  const handleScrollToSegment = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-black text-text-primary min-h-screen relative font-sans overflow-x-hidden antialiased">
      {/* Absolute master cinematic vignette overlay mapping */}
      <div className="vignette-overlay fixed inset-0 z-40 pointer-events-none" />

      {/* Global Scroll Banner or subtle luxury line detail */}
      <div className="h-[2px] w-full bg-gradient-to-r from-bronze via-[#F3DFCF] to-transparent fixed top-0 left-0 z-[60]" />

      {/* 1. STICKY GLASS NAVBAR */}
      <Navbar />

      {/* Intro Fade Sequence Wrap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* 2. Fullscreen IMMERSIVE HERO */}
        <Hero
          onServicesClick={() => handleScrollToSegment("services")}
          onContactClick={() => handleScrollToSegment("contact")}
        />

        {/* 3. EDITORIAL STORY SECTION */}
        <Story />

        {/* 4. PREMIUM CURATED SERVICES SECTION */}
        <Services />

        {/* 5. ELITE DISTINCTION FEATURE SECTION */}
        <WhyChooseUs />

        {/* 6. MASONRY VISUAL PORTFOLIO GALLERY */}
        <Gallery />

        {/* 7. CUSTOMER OPINION TESTIMONIALS */}
        <Testimonials testimonials={testimonials} />

        {/* 8. CENTRAL TIMING WORKING HOURS SIGN */}
        <WorkingHours />

        {/* 9. SCHEDULE BOOKINGS & CONTACT FORMS */}
        <Contact onAddTestimonial={handleAddTestimonial} />

        {/* 10. LUXURY MINIMAL FOOTER */}
        <Footer />
      </motion.div>
    </div>
  );
}
