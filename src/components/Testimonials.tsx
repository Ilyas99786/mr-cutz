/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "../types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/[0.04]"
    >
      {/* Decorative ambient background glow ball */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-bronze-glow/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-sans font-bold text-[10px] md:text-xs tracking-[0.4em] text-bronze uppercase">
              VOICES OF THE ELITE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary tracking-tight mt-3">
              Testimonials
            </h2>
            
            {/* Visual stars highlight directly beneath heading */}
            <div className="flex items-center justify-center gap-1 mt-4" id="testimonials-header-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-bronze fill-bronze" />
              ))}
            </div>
            <div className="w-12 h-[1px] bg-white/[0.08] mx-auto mt-6" />
          </motion.div>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" id="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group p-8 md:p-10 bg-[#1F150C]/30 border border-white/[0.05] hover:border-bronze/35 rounded-xs transition-all duration-500 relative bronze-glow-hover flex flex-col justify-between"
            >
              {/* Corner quote icon watermark */}
              <div className="absolute top-8 right-8 opacity-[0.08] group-hover:opacity-[0.14] text-bronze group-hover:scale-110 duration-500 ease-out transition-all">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              {/* Star line */}
              <div className="flex items-center gap-1.5 mb-6" id={`stars-${testimonial.id}`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-bronze fill-bronze" />
                ))}
              </div>

              {/* Quote details */}
              <p className="text-text-primary/95 font-serif italic text-[15px] md:text-[17px] leading-relaxed tracking-wide mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author bio details */}
              <div className="flex flex-col border-t border-white/[0.05] pt-5 mt-auto">
                <span className="font-serif font-bold text-sm tracking-widest text-[#B19474] uppercase">
                  {testimonial.author}
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] text-white/45 font-semibold uppercase mt-0.5">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
