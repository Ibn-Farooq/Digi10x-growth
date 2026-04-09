import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Laptop, Smartphone } from "lucide-react";
import SectionIndicator from './SectionIndicator';

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Floating Element (Laptop) */}
            <motion.div 
              className="hidden lg:flex col-span-3 justify-center"
              animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-48 h-48 bg-tech-blue-light rounded-2xl border border-neon-cyan/30 flex items-center justify-center box-glow transform -rotate-12">
                <Laptop size={64} className="text-neon-cyan" />
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/10 to-transparent rounded-2xl" />
              </div>
            </motion.div>

            {/* Center Content */}
            <div className="col-span-1 lg:col-span-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Center this indicator with the correct title */}
               <SectionIndicator title="Turning Clicks into Revenue" />
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  Scale Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green text-glow">10x</span> with Result-Driven Digital Marketing
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  WordPress, Shopify, Meta Ads, TikTok Ads & AI Automation — Everything you need to grow fast.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/book-appointment"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-neon-cyan text-tech-blue font-bold text-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all flex items-center justify-center gap-2 group"
                  >
                    Book Appointment
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                  <a
                    href="#services"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-gray-600 text-white font-medium text-lg hover:border-neon-cyan hover:text-neon-cyan transition-all"
                  >
                    Explore Services
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Floating Element (Phone) */}
            <motion.div 
              className="hidden lg:flex col-span-3 justify-center"
              animate={{ y: [15, -15, 15], rotate: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-32 h-56 bg-tech-blue-light rounded-3xl border border-neon-green/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,102,0.1)] transform rotate-12">
                <Smartphone size={48} className="text-neon-green" />
                <div className="absolute inset-0 bg-gradient-to-bl from-neon-green/10 to-transparent rounded-3xl" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}