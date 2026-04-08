import { motion } from "motion/react";
import { Link } from "react-router-dom";
import SectionIndicator from "./SectionIndicator";

const projects = [
  {
    id: 1,
    title: "E-Commerce Scaling",
    category: "Meta Ads & Shopify",
    description: "Scaled a local fashion brand from 1 Million to 10 Million PKR/mo using targeted Meta Ads and Shopify optimization.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Local Service Lead Gen",
    category: "Meta Ads & Landing Page",
    description: "Generated 500+ high-quality leads for a real estate agency in 30 days.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "SaaS Platform Launch",
    category: "WordPress & SEO",
    description: "Built a high-converting WordPress site and ranked top 3 for core keywords.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Viral TikTok Campaign",
    category: "TikTok Ads",
    description: "Achieved 2M+ views and a 5x ROAS for a beauty product launch.",
    image: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "B2B Tech Rebrand",
    category: "WordPress Development",
    description: "Complete website overhaul resulting in a 40% increase in demo requests.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Dropshipping Success",
    category: "Shopify & Meta Setup",
    description: "Built and scaled a dropshipping store to 7-figures PKR in under 6 months.",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative z-10 bg-tech-blue-light/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionIndicator />
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-neon-cyan">Work</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real results for real businesses. See how we've helped our clients achieve 10x growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-tech-blue border border-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-tech-blue/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-6 relative z-20 bg-tech-blue transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="text-xs font-bold text-neon-green mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/book-appointment"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-neon-cyan text-tech-blue font-bold text-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all"
          >
            Start Your Success Story
          </Link>
        </div>
      </div>
    </section>
  );
}
