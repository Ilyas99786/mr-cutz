/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Clock, Tag } from "lucide-react";
import { SERVICES } from "../data";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-gradient-to-b from-black via-card-surface/20 to-black overflow-hidden border-t border-white/[0.04]"
    >
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-bronze-glow/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] bg-bronze-glow/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Title Sequence */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-sans font-bold text-[10px] md:text-xs tracking-[0.4em] text-bronze uppercase">
              CRAFTED MENU
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary tracking-tight mt-3">
              Professional Services
            </h2>
            <div className="w-12 h-[1px] bg-bronze/40 mx-auto mt-6" />
          </motion.div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center" id="services-grid">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative flex flex-col bg-card-surface/70 border border-white/[0.06] hover:border-bronze/35 rounded-sm overflow-hidden shadow-2xl transition-all duration-500 bronze-glow-hover"
            >
              {/* Service background image container */}
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transform duration-700 brightness-50"
                />
              </div>

              {/* Card visual feedback ambient spotlight */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              {/* Main Content Info */}
              <div className="relative z-20 p-8 flex flex-col justify-between h-full min-h-[290px]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] tracking-[0.25em] text-bronze uppercase">
                      MR. CUTZ SELECT
                    </span>
                    <span className="text-bronze-glow bg-bronze/10 rounded-full px-3 py-1 font-sans text-[10px] font-semibold tracking-wider flex items-center gap-1.5 border border-bronze/10">
                      <Clock className="w-3 h-3 text-bronze" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-semibold text-text-primary tracking-wide mb-3 group-hover:text-bronze transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-text-muted/80 font-sans text-xs md:text-sm leading-relaxed tracking-wide font-light line-clamp-3 mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-end border-t border-white/[0.05] pt-5 mt-auto">
                  {/* Micro interaction indicator */}
                  <span className="font-sans font-bold text-[10px] tracking-[0.25em] text-[#B19474] group-hover:text-bronze transition-colors duration-300 uppercase">
                    SELECT SERVICE
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
