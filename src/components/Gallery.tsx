/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { IMAGES } from "../data";

export default function Gallery() {
  const galleryItems = [
    {
      id: "gallery-1",
      image: IMAGES.closeup,
      alt: "Master hands styling precision cut",
      title: "PRECISE SCULPTING",
      size: "lg:col-span-8 lg:row-span-2 aspect-[4/3] md:aspect-video"
    },
    {
      id: "gallery-2",
      image: IMAGES.tools,
      alt: "Gold premium shaving shears and accessories",
      title: "IMPERIAL UTENSILS",
      size: "lg:col-span-4 aspect-square"
    },
    {
      id: "gallery-3",
      image: IMAGES.interior,
      alt: "Prestige salon chairs symmetrical lining",
      title: "PRESTIGE SANCTUARY",
      size: "lg:col-span-4 aspect-square"
    },
    {
      id: "gallery-4",
      image: IMAGES.barberChair,
      alt: "Luxe styling chair with warm neon lights",
      title: "CHROME & COMFORT",
      size: "lg:col-span-4 aspect-square"
    },
    {
      id: "gallery-5",
      image: IMAGES.heroBg,
      alt: "Master oil massage beard contouring",
      title: "CRAFTED EXCELLENCE",
      size: "lg:col-span-8 aspect-video md:aspect-[2.1/1]"
    }
  ];

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Gallery Title Block */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-sans font-bold text-[10px] md:text-xs tracking-[0.4em] text-bronze uppercase">
              VISUAL PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-text-primary tracking-tight mt-3">
              Gallery of Excellence
            </h2>
            <div className="w-12 h-[1px] bg-bronze/40 mx-auto mt-6" />
          </motion.div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15 }}
              className={`group relative overflow-hidden bg-card-surface/20 border border-white/[0.06] rounded-xs shadow-2xl overflow-hidden cursor-pointer ${item.size}`}
            >
              <div className="w-full h-full relative">
                {/* Slow zoom background */}
                <img
                  src={item.image}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale brightness-[75%] contrast-[105%] group-hover:grayscale-0 group-hover:brightness-[100%] group-hover:scale-105 duration-700 ease-out transition-all"
                />
                
                {/* Visual shade gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Details overlay appearing on hover */}
                <div className="absolute inset-x-6 bottom-6 flex flex-col justify-end translate-y-3 group-hover:translate-y-0 transition-transform duration-500 z-10">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-bronze uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    MR. CUTZ CHRONICLES
                  </span>
                  <h3 className="text-lg md:text-xl font-serif text-text-primary tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
