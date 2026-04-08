import React, { useState } from "react";
import { motion } from "framer-motion"; // Note: ensure your import matches your package (framer-motion or motion)
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

// Helper to encode form data for Netlify
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    solution: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset form after success
        setFormData({ name: "", email: "", phone: "", solution: "", budget: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch(error => {
        console.error(error);
        setIsSubmitting(false);
        alert("There was an error sending your message. Please try again.");
      });
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
            /* 1. Added data-netlify attributes */
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* 2. Hidden input for Netlify bot discovery */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Full Name</label>
                  <input 
                    required
                    name="name" // 3. Added name attribute
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-tech-blue-light border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                    placeholder="M. Ali"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address</label>
                  <input 
                    required
                    name="email" // 3. Added name attribute
                    value={formData.email}
                    onChange={handleChange}
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
                    name="phone" // 3. Added name attribute
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    className="w-full bg-tech-blue-light border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                    placeholder="+92 348-7347022"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Solution Needed</label>
                  <select 
                    required
                    name="solution" // 3. Added name attribute
                    value={formData.solution}
                    onChange={handleChange}
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
                  name="budget" // 3. Added name attribute
                  value={formData.budget}
                  onChange={handleChange}
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
                  name="message" // 3. Added name attribute
                  value={formData.message}
                  onChange={handleChange}
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