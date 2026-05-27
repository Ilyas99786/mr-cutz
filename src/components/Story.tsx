/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Star } from "lucide-react";
import { IMAGES, STATS } from "../data";

export default function Story() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/[0.04]"
    >
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-bronze-glow/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Luxury barber chair card */}
          <div className="lg:col-span-6" id="story-image-column">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative group cursor-pointer"
            >
              {/* Outer soft bronze shadow */}
              <div className="absolute -inset-1.5 bg-bronze-glow/10 rounded-sm blur-lg opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              {/* Image Frame */}
              <div className="relative overflow-hidden aspect-[4/3] rounded-sm border border-bronze/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <img
                  src={IMAGES.barberChair}
                  alt="Elite Barber Chair"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform duration-700 ease-out scale-100 group-hover:scale-105 group-hover:brightness-110 grayscale group-hover:grayscale-0 filter contrast-[110%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Float Accent Label */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 border border-bronze/25 rounded-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-bronze animate-pulse" />
                <span className="font-mono text-[9px] tracking-[0.25em] text-text-primary uppercase">
                  MASTER WORKSPACE
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Editorial text block */}
          <div className="lg:col-span-6 flex flex-col justify-center" id="story-text-column">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              {/* Section Tag */}
              <span className="font-sans font-bold text-[10px] md:text-xs tracking-[0.35em] text-bronze uppercase mb-4 block">
                OUR LEGACY
              </span>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary tracking-tight leading-tight mb-6">
                Mastering the Art
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-bronze to-white font-serif italic font-normal mt-1">
                  of the Blade
                </span>
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 text-text-muted font-sans text-sm md:text-base leading-relaxed tracking-wide font-light mb-8">
                <p>
                  MR. CUTZ is more than just a barber shop—it&apos;s a sanctuary for the modern man. 
                  Since 2018, Pintu and his elite team of grooming artisans have defined grooming 
                  standards in Balasore, masterfully fusing traditional shaving philosophies with 
                  high-fashion, contemporary hair profiles.
                </p>
                <p>
                  Every appointment begins with an in-depth facial structure consultation, utilizing 
                  bespoke oils and specialized clippers to deliver precise cuts that don&apos;t just 
                  clean your appearance, but redefine your personal presence.
                </p>
              </div>

              {/* Symmetrical Stats Section */}
              <div className="grid grid-cols-2 gap-6 border-t border-white/[0.08] pt-8" id="story-stats-grid">
                {STATS.map((stat) => (
                  <div key={stat.id} className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-serif font-bold text-bronze mb-1">
                      {stat.value}
                    </span>
                    <span className="font-sans text-[10px] tracking-[0.2em] text-white/50 font-semibold uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
