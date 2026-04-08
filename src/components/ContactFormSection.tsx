import React, { useState } from "react";
import { motion } from "motion/react";
import SectionIndicator from "./SectionIndicator";

const servicesList = [
  "WordPress Development",
  "Meta Ads",
  "Shopify Store Setup",
  "Meta Complete Business Setup",
  "SEO",
  "TikTok Ads",
  "Other"
];

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-tech-blue-light/30">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionIndicator />
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to <span className="text-neon-cyan">10x</span> Your Growth?</h2>
          <p className="text-gray-400 text-lg">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-tech-blue rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
          
          {isSuccess ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
              <p className="text-gray-400">We'll be in touch shortly to discuss your growth strategy.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-tech-blue-light border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                    placeholder=" M.Ali"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-tech-blue-light border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                    placeholder="ali@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-tech-blue-light border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                    placeholder="+92 300-0000000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Solution Needed</label>
                  <select 
                    required
                    defaultValue=""
                    className="w-full bg-tech-blue-light border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a service...</option>
                    {servicesList.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Estimated Budget Range</label>
                <select 
                  required
                  defaultValue=""
                  className="w-full bg-tech-blue-light border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors appearance-none"
                >
                  <option value="" disabled>Select budget range...</option>
                  <option value="under-10k">Under 10k PKR</option>
                  <option value="10k-20k">10,000 - 20,000 PKR</option>
                  <option value="30k-40k">30,000 - 40,000 PKR</option>
                  <option value="50k+">Above 50,000 PKR</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Additional Requirements</label>
                <textarea 
                  rows={4}
                  className="w-full bg-tech-blue-light border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors resize-none"
                  placeholder="Tell us about your business goals..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-neon-cyan text-tech-blue font-bold text-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
