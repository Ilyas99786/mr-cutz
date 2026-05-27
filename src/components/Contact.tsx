/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, MessageSquare, Send, CheckCircle, Star } from "lucide-react";
import { PHYSICAL_ADDRESS, PHONE_NUMBER, WHATSAPP_URL } from "../data";
import { Testimonial } from "../types";

interface ContactProps {
  onAddTestimonial: (testimonial: Testimonial) => void;
}

export default function Contact({ onAddTestimonial }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    role: "PREMIUM MEMBER",
    rating: 5,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert("Please check your input details. Name and Feedback message are required.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury feedback submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      const newTestimonial: Testimonial = {
        id: `testimonial-custom-${Date.now()}`,
        text: formData.message,
        author: formData.name,
        role: formData.role,
        rating: formData.rating
      };

      onAddTestimonial(newTestimonial);
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: "",
        role: "PREMIUM MEMBER",
        rating: 5,
        message: ""
      });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/[0.04]"
    >
      {/* Ambient backgrounds */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-bronze-glow/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Physical Visit Info */}
          <div className="lg:col-span-5" id="contact-visit-column">
            <span className="font-sans font-bold text-[10px] md:text-xs tracking-[0.35em] text-bronze uppercase mb-4 block">
              THE SANCTUARY
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary tracking-tight mb-10">
              Visit Us
            </h2>

            {/* Address & Phone list */}
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-card-surface/50 border border-bronze/15 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-bronze" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-text-muted text-xs tracking-[0.2em] uppercase mb-1.5">
                    LOCATION
                  </h4>
                  <p className="font-sans text-sm md:text-base text-text-primary/90 leading-relaxed font-light">
                    {PHYSICAL_ADDRESS}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-card-surface/50 border border-bronze/15 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-bronze" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-text-muted text-xs tracking-[0.2em] uppercase mb-1.5">
                    TELEPHONE
                  </h4>
                  <a
                    href="tel:+919827976556"
                    className="font-mono text-base md:text-lg text-text-primary hover:text-bronze transition-colors font-semibold tracking-wider"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded dark styled map container */}
            <div className="relative rounded-sm overflow-hidden border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.8)] aspect-video lg:aspect-[1.4/1]">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.5243324634283!2d86.9179998!3d21.4934991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ca756ac9af86d%3A0xe54e99f075908a8e!2sGolei%20Rd%2C%20Balasore%2C%20Odisha%20756001!5e0!3m2!1sen!2sin!4v1716896791141!5m2!1sen!2sin"
                className="w-full h-full filter invert grayscale contrast-[130%] opacity-40 hover:opacity-60 duration-500 transition-opacity"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border border-inset border-white/[0.05]" />
            </div>
          </div>

          {/* RIGHT COLUMN: Glassmorphism Feedback Form Card */}
          <div className="lg:col-span-7" id="contact-form-column">
            <div className="bg-glass-bg border border-bronze/12 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden backdrop-blur-md">
              
              <div className="absolute inset-x-0 top-0 h-[10px] bg-gradient-to-r from-transparent via-bronze/20 to-transparent" />

              <h3 className="text-2xl md:text-3xl font-serif font-bold text-text-primary tracking-tight mb-3">
                Your Feedback
              </h3>
              <p className="text-text-muted font-sans text-xs md:text-sm leading-relaxed tracking-wide font-light mb-8">
                We hope you enjoyed Balasore&apos;s most prestigious grooming lounge. Your feedback is precious to Pintu and the team.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" id="booking-form">
                
                {/* Rating Selector */}
                <div className="flex flex-col">
                  <label className="font-sans font-bold text-[9px] tracking-[0.25em] text-[#B19474] uppercase mb-2">
                    YOUR EXPERIENCE RATING
                  </label>
                  <div className="flex items-center gap-3 bg-card-surface/50 border border-white/[0.08] rounded-xs px-4 py-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                        className="focus:outline-none transition-all hover:scale-125 duration-200"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= formData.rating
                              ? "text-bronze fill-bronze transition-colors duration-200"
                              : "text-white/20 hover:text-bronze/50 transition-colors duration-200"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="font-sans font-bold text-[10px] tracking-wider text-bronze uppercase ml-2 animate-pulse">
                      {formData.rating === 5 ? "Exceptional" : formData.rating === 4 ? "Very Good" : formData.rating === 3 ? "Satisfactory" : formData.rating === 2 ? "Could Improve" : "Unsatisfactory"}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label className="font-sans font-bold text-[9px] tracking-[0.25em] text-[#B19474] uppercase mb-2">
                      YOUR FULL NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Liam Sterling"
                      className="bg-card-surface/50 border border-white/[0.08] focus:border-bronze rounded-xs px-4 py-3 text-sm text-text-primary placeholder:text-white/20 focus:outline-none transition-colors duration-300 font-sans"
                    />
                  </div>

                  {/* Role field */}
                  <div className="flex flex-col">
                    <label className="font-sans font-bold text-[9px] tracking-[0.25em] text-[#B19474] uppercase mb-2">
                      MEMBERSHIP OR TYPE
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="bg-card-surface/50 border border-white/[0.08] focus:border-bronze rounded-xs px-4 py-3 text-sm text-text-primary focus:outline-none transition-colors duration-300 font-sans cursor-pointer h-[46px]"
                    >
                      <option value="PREMIUM MEMBER" className="bg-card-surface">PREMIUM MEMBER</option>
                      <option value="LOYAL CLIENT" className="bg-card-surface">LOYAL CLIENT</option>
                      <option value="LOCAL RESIDENT" className="bg-card-surface">LOCAL RESIDENT</option>
                      <option value="FIRST TIME VISITOR" className="bg-card-surface">FIRST TIME VISITOR</option>
                    </select>
                  </div>
                </div>

                {/* Message / Feedback input */}
                <div className="flex flex-col">
                  <label className="font-sans font-bold text-[9px] tracking-[0.25em] text-[#B19474] uppercase mb-2">
                    YOUR REVIEW & FEEDBACK
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you liked, your service stylist, and details of your experience..."
                    rows={4}
                    className="bg-card-surface/50 border border-white/[0.08] focus:border-bronze rounded-xs px-4 py-3 text-sm text-text-primary placeholder:text-white/20 focus:outline-none transition-colors duration-300 font-sans resize-none"
                  />
                </div>

                {/* Submit button directly above other CTA actions */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-bronze text-black hover:bg-[#F3DFCF] rounded-xs font-sans font-bold text-[11px] tracking-[0.25em] transition-all duration-300 uppercase h-12 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 mr-0.5" />
                      Submit Feedback
                    </>
                  )}
                </button>

                <div className="w-full h-[1px] bg-white/[0.05]" />

                {/* Actions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+919827976556"
                    className="flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-transparent border border-bronze/30 text-bronze hover:bg-[#1F150C]/80 hover:border-bronze rounded-xs font-sans font-semibold text-[11px] tracking-[0.2em] transition-all duration-300 uppercase h-12"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    CALL NOW
                  </a>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-[#25D366] text-black hover:bg-[#1EBE57] rounded-xs font-sans font-bold text-[11px] tracking-[0.18em] transition-all duration-300 shadow-[0_10px_25px_rgba(37,211,102,0.2)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.35)] uppercase h-12"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    WHATSAPP US
                  </a>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Success Notification overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-6"
            id="success-modal"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="bg-card-surface border border-bronze/25 max-w-md w-full p-8 md:p-10 rounded-sm text-center shadow-2xl relative"
            >
              <div className="w-14 h-14 rounded-full border border-bronze/30 bg-bronze/10 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(177,148,116,0.15)]">
                <CheckCircle className="w-7 h-7 text-bronze" />
              </div>
              <h4 className="text-2xl font-serif text-text-primary tracking-wide mb-3">
                Feedback Published!
              </h4>
              <p className="text-text-muted font-sans text-xs md:text-sm leading-relaxed tracking-wide font-light mb-6">
                Thank thank you for sharing your experience. Your luxury feedback has been successfully published to our testimonials section!
              </p>
              <div className="border-t border-white/[0.05] pt-5">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="px-6 py-3 bg-bronze hover:bg-[#F3DFCF] text-black rounded-xs font-sans font-bold text-[10px] tracking-widest uppercase transition-all duration-300"
                >
                  CLOSE DIALOGUE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
