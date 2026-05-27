/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Scissors, Menu, X, Phone, MessageSquare } from "lucide-react";
import { BRAND_NAME, PHONE_NUMBER, WHATSAPP_URL } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to toggle backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Quick active section check
      const sections = ["home", "about", "services", "why-choose", "gallery", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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

  const navLinks = [
    { name: "ABOUT", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "GALLERY", id: "gallery" },
    { name: "REVIEWS", id: "testimonials" },
    { name: "CONTACT", id: "contact" }
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/[0.06] py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-black/70 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          id="navbar-logo"
        >
          <div className="w-10 h-10 rounded-full border border-bronze/40 flex items-center justify-center bg-card-surface/70 shadow-[0_0_15px_rgba(112,78,38,0.2)] group-hover:border-bronze transition-colors duration-500">
            <Scissors className="w-5 h-5 text-bronze transform -rotate-45 group-hover:rotate-12 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg md:text-xl tracking-widest text-text-primary group-hover:text-bronze transition-colors duration-500">
              {BRAND_NAME}
            </span>
            <span className="font-sans text-[9px] tracking-[0.2em] text-text-muted">
              LUXURY GROOMING LOUNGE
            </span>
          </div>
        </button>

        {/* CENTER NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12" id="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`font-sans font-semibold text-xs tracking-[0.2em] hover:text-bronze transition-all duration-300 relative py-2 uppercase cursor-pointer ${
                activeSection === link.id ? "text-bronze" : "text-text-primary/70"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-bronze" />
              )}
            </button>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-4" id="navbar-actions">
          <a
            href="tel:+919827976556"
            className="flex items-center gap-2 px-4 py-2 border border-bronze/20 rounded-sm font-sans font-semibold text-[11px] tracking-widest text-[#B19474] hover:bg-[#1F150C] hover:border-bronze/60 transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">{PHONE_NUMBER}</span>
            <span className="lg:hidden">CALL</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#25D366]/40 text-[#25D366] rounded-sm font-sans font-bold text-[11px] tracking-widest hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all duration-300 shadow-[0_0_10px_rgba(37,211,102,0.1)]"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>WHATSAPP</span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary hover:text-bronze p-1 transition-colors focus:outline-none"
          id="mobile-menu-trigger"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-80 bg-black/95 backdrop-blur-xl border-l border-white/[0.08] z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        id="mobile-drawer"
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-card-surface/30 to-black p-8 pt-24 justify-between">
          <div className="flex flex-col gap-6">
            <span className="font-sans text-[10px] tracking-[0.3em] text-text-muted border-b border-white/[0.05] pb-4">
              EXPERIENCE MENU
            </span>
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left font-sans font-bold text-sm tracking-[0.25em] py-2 uppercase hover:text-bronze transition-colors ${
                    activeSection === link.id ? "text-bronze pl-2 border-l border-bronze" : "text-text-primary"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-auto border-t border-white/[0.05] pt-6">
            <span className="font-sans text-[9px] tracking-[0.1em] text-text-muted">
              PRESTIGE SERVICE
            </span>
            <a
              href="tel:+919827976556"
              className="flex items-center gap-3 p-3 bg-card-surface/55 rounded-sm border border-bronze/10 hover:border-bronze/30 text-text-primary transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-bronze" />
              <span className="font-sans tracking-wider">{PHONE_NUMBER}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-3 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] text-[#25D366] rounded-sm transition-all font-sans font-bold text-sm tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
