import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Target, TrendingUp, Users, Zap } from "lucide-react";
import SectionIndicator from "./SectionIndicator";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10 bg-tech-blue">
      <div className="container mx-auto px-6 md:px-12">
        <SectionIndicator />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Don't Just Get Clicks. <br/>
              <span className="text-neon-cyan">We Drive Revenue.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                At Digi 10x Growth, we believe that vanity metrics are useless if they don't translate to your bottom line. Our mission is simple: to scale your business 10x through data-driven, aggressive, and highly optimized digital marketing strategies.
              </p>
              <p>
                Whether you need a high-converting Shopify store, a lightning-fast WordPress site, or Meta and TikTok ad campaigns that print money, our team of experts is obsessed with your ROI.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-neon-cyan pl-4">
                <div className="text-3xl font-bold text-white mb-1">10x</div>
                <div className="text-sm text-gray-400">Growth Focus</div>
              </div>
              <div className="border-l-2 border-neon-green pl-4">
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-neon-cyan text-neon-cyan font-bold hover:bg-neon-cyan hover:text-tech-blue transition-all box-glow-hover"
              >
                Work With Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Target, title: "Results-Driven", desc: "Every campaign is optimized for maximum ROI." },
              { icon: Zap, title: "Fast Execution", desc: "We move fast and break records, not budgets." },
              { icon: TrendingUp, title: "Data-Backed", desc: "Decisions based on analytics, not guesswork." },
              { icon: Users, title: "Dedicated Team", desc: "Your personal growth partners." }
            ].map((item, index) => (
              <div key={index} className="bg-tech-blue-light p-6 rounded-2xl border border-gray-800 hover:border-neon-cyan/30 transition-colors">
                <item.icon className="text-neon-cyan mb-4" size={32} />
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
