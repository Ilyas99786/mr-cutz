/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scissors } from "lucide-react";
import { BRAND_NAME } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
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
    <footer className="bg-[#000000] text-text-primary/70 border-t border-white/[0.05] py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/[0.04] pb-10">
          {/* Logo & Tagline */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-3">
              <Scissors className="w-4 h-4 text-bronze transform -rotate-45" />
              <span className="font-serif font-bold text-lg tracking-widest text-text-primary">
                {BRAND_NAME}
              </span>
            </div>
            <span className="font-sans text-[10px] tracking-[0.25em] text-text-muted uppercase">
              CRAFTED FOR THE MODERN GENTLEMAN
            </span>
          </div>

          {/* Center Links */}
          <div className="md:col-span-5 flex justify-center flex-wrap gap-x-6 gap-y-3">
            {[
              { name: "ABOUT", id: "about" },
              { name: "SERVICES", id: "services" },
              { name: "GALLERY", id: "gallery" },
              { name: "REVIEWS", id: "testimonials" },
              { name: "CONTACT", id: "contact" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-sans text-[10px] tracking-widest text-[#B19474] hover:text-white transition-colors duration-300 uppercase focus:outline-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Trademark and location indicator */}
          <div className="md:col-span-3 flex justify-center md:justify-end text-center md:text-right">
            <span className="font-sans text-[10px] tracking-[0.15em] text-text-primary/30 uppercase">
              RESERVED AT BALASORE, INDIA
            </span>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] font-sans tracking-wider text-text-primary/40 gap-4">
          <div className="flex items-center gap-6">
            <a href="#story" className="hover:text-bronze transition-colors">PRIVACY POLICY</a>
            <a href="#services" className="hover:text-bronze transition-colors">TERMS OF SERVICE</a>
          </div>
          <div className="text-center sm:text-right">
            &copy; {currentYear} {BRAND_NAME}. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
}
