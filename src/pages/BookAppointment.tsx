import { motion } from "motion/react";
import ContactFormSection from "@/components/ContactFormSection";

export default function BookAppointment() {
  return (
    <main className="pt-24 min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="container mx-auto px-6 md:px-12 pt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Your <span className="text-neon-cyan text-glow">Strategy Call</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
              Let's discuss how we can scale your business. Choose a time that works for you or fill out the form below.
            </p>
          </motion.div>
        </div>
        
        {/* We reuse the ContactFormSection here, or we could embed a Calendly link. 
            The prompt asks for the ContactFormSection to have specific fields, so we'll just show it here too. */}
        <div className="-mt-12">
          <ContactFormSection />
        </div>
      </div>
    </main>
  );
}
