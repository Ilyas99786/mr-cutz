/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Clock } from "lucide-react";

export default function WorkingHours() {
  return (
    <section
      id="working-hours"
      className="relative py-24 bg-gradient-to-b from-black via-card-surface/10 to-black overflow-hidden border-t border-white/[0.04]"
    >
      {/* Decorative ambient background glow ball */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-bronze-glow/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mx-auto"
        >
          {/* Centered Glass Card */}
          <div className="bg-glass-bg border border-bronze/15 p-8 md:p-14 rounded-sm shadow-2xl relative overflow-hidden backdrop-blur-md">
            
            {/* Subtle glow rim edge */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-bronze/35 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-bronze/10 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-bronze/10 to-transparent" />

            {/* Emblem icon */}
            <div className="w-14 h-14 rounded-full border border-bronze/25 bg-[#000000]/60 flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(112,78,38,0.15)]">
              <Clock className="w-6 h-6 text-bronze animate-pulse" />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary tracking-tight mb-10">
              Working Hours
            </h2>

            {/* Timings List */}
            <div className="max-w-md mx-auto space-y-6 text-sm" id="working-hours-lines">
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="font-serif font-bold text-[#B19474] tracking-widest text-[13px] text-left uppercase mb-1 sm:mb-0">
                  MORNING RITUALS
                </span>
                <span className="font-mono text-xs md:text-sm text-text-primary font-medium tracking-widest text-right">
                  9:00 AM - 2:00 PM
                </span>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="font-serif font-bold text-[#B19474] tracking-widest text-[13px] text-left uppercase mb-1 sm:mb-0">
                  EVENING EXCELLENCE
                </span>
                <span className="font-mono text-xs md:text-sm text-text-primary font-medium tracking-widest text-right">
                  4:00 PM - 10:00 PM
                </span>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2">
                <span className="font-serif font-bold text-[#B19474]/50 tracking-widest text-[13px] text-left uppercase mb-1 sm:mb-0">
                  THURSDAY
                </span>
                <span className="font-sans text-xs md:text-sm text-bronze font-bold tracking-[0.2em] text-right uppercase">
                  CLOSED FOR BEST MAINTENANCE
                </span>
              </div>
            </div>

            {/* Bottom italic annotation */}
            <div className="mt-10 font-sans text-[10px] tracking-[0.2em] text-text-muted/60 uppercase">
              * APPOINTMENTS FOR THE MODERN GENTLEMAN RESPECTFULLY APPRECIATED *
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
