/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ChevronRight, Calendar, Sparkles } from "lucide-react";
import { IMAGES, WHATSAPP_URL } from "../data";

interface HeroProps {
  onServicesClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onServicesClick, onContactClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 px-6 md:px-10"
    >
      {/* Background Image Container with Slow Zoom Effect */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Shadow overlays mapping exact screenshot vignette styles */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
        
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.55 }}
          transition={{ duration: 3.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={IMAGES.heroBg}
            alt="Cinematic Luxe Barbering Lounge"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter contrast-[105%] brightness-[80%]"
          />
        </motion.div>
      </div>

      {/* Atmospheric film grain pattern emulation */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4xIi8+Cjwvc3ZnPg==')]"
      />

      {/* Floating abstract decorative ambient glow ball */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bronze-glow/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Center Elite Content Card */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Est tag badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="h-[1px] w-8 bg-bronze/35" />
          <span className="font-sans font-semibold text-[10px] md:text-xs tracking-[0.4em] text-bronze uppercase">
            EST. 2018 • BALASORE
          </span>
          <span className="h-[1px] w-8 bg-bronze/35" />
        </motion.div>

        {/* Master Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-text-primary tracking-tight leading-[1.08] mb-6"
        >
          Premium Men&apos;s
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-bronze via-[#F5E6D8] to-bronze font-serif italic font-normal">
            Grooming Excellence
          </span>
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          className="max-w-xl md:max-w-2xl text-text-muted font-sans text-sm md:text-base leading-relaxed tracking-wide font-light mb-12 border-t border-white/[0.05] pt-6"
        >
          Precision, tradition, and modern artistry. Experience Balasore&apos;s supreme
          grooming sanctuary calibrated exclusively for the modern gentleman of taste.
        </motion.p>

        {/* Interfacing Interaction Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0"
        >
          <button
            onClick={onServicesClick}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-bronze hover:bg-[#F3DFCF] text-black font-sans font-bold text-xs tracking-[0.25em] h-13 rounded-sm transition-all duration-300 shadow-[0_10px_25px_rgba(112,78,38,0.2)] hover:shadow-[0_15px_30px_rgba(112,78,38,0.35)] hover:-translate-y-0.5 group cursor-pointer"
          >
            OUR SERVICES
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform animate-pulse" />
          </button>
        </motion.div>
      </div>

      {/* Slow mouse reactive down arrow accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="font-sans text-[9px] tracking-[0.3em] text-text-muted/60 mb-2 uppercase">
          EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-bronze/60 to-transparent"
        />
      </div>
    </section>
  );
}
