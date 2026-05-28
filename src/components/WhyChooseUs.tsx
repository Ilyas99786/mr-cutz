/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Scissors, Flame, Gem, Armchair, Sparkles } from "lucide-react";
import { FEATURES } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Scissors,
  Flame,
  Gem,
  Armchair,
  Sparkles,
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose"
      className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/[0.04]"
    >
      {/* Ambient background glow ball */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bronze-glow/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header Display */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-sans font-bold text-[10px] md:text-xs tracking-[0.4em] text-bronze uppercase">
              THE DISTINCTION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary tracking-tight mt-3">
              Why the Elite Choose MR. CUTZ
            </h2>
            <div className="w-12 h-[1px] bg-bronze/40 mx-auto mt-6" />
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center" id="features-grid">
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || Scissors;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-8 md:p-10 bg-[#1F150C]/40 border border-white/[0.05] hover:border-bronze/30 hover:bg-[#1F150C]/60 rounded-xs transition-all duration-500 bronze-glow-hover"
              >
                {/* Custom Bronze Icon Box */}
                <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-card-surface to-black/80 border border-bronze/15 flex items-center justify-center mb-6 group-hover:border-bronze/50 group-hover:scale-105 transition-all duration-500">
                  <IconComponent className="w-5 h-5 text-bronze transform transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Information text */}
                <h3 className="text-[17px] md:text-[19px] font-serif font-medium text-text-primary tracking-wide mb-3 group-hover:text-bronze transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-text-muted/80 font-sans text-xs md:text-sm leading-relaxed tracking-wide font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
