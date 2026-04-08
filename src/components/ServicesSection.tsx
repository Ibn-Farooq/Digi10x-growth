import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Code, Megaphone, ShoppingCart, Settings, Search, Video } from "lucide-react";
import SectionIndicator from "./SectionIndicator";

const services = [
  {
    id: "wordpress",
    title: "WordPress Development",
    description: "High-performance, custom WordPress websites designed to convert visitors into paying customers.",
    features: ["Custom Themes", "Speed Optimization", "Secure Setup"],
    icon: Code,
    color: "from-blue-400 to-neon-cyan"
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    description: "Laser-targeted Facebook & Instagram campaigns that maximize your ROAS and drive qualified leads.",
    features: ["Audience Targeting", "A/B Testing", "Retargeting"],
    icon: Megaphone,
    color: "from-neon-cyan to-blue-500"
  },
  {
    id: "shopify",
    title: "Shopify Store Setup",
    description: "End-to-end Shopify store creation, optimized for seamless checkout and maximum sales volume.",
    features: ["Theme Customization", "App Integration", "Payment Setup"],
    icon: ShoppingCart,
    color: "from-green-400 to-neon-green"
  },
  {
    id: "meta-setup",
    title: "Meta Complete Business Setup",
    description: "Professional configuration of your Meta Business Manager, Pixels, and Catalogs for flawless tracking.",
    features: ["Pixel Integration", "Catalog Setup", "Domain Verification"],
    icon: Settings,
    color: "from-purple-400 to-pink-500"
  },
  {
    id: "seo",
    title: "SEO",
    description: "Data-driven SEO strategies to dominate search results and capture high-intent organic traffic.",
    features: ["On-Page SEO", "Technical Audits", "Link Building"],
    icon: Search,
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: "tiktok-ads",
    title: "TikTok Ads",
    description: "Engaging, trend-driven TikTok ad campaigns that capture attention and drive massive brand growth.",
    features: ["Creative Strategy", "Spark Ads", "Trend Analysis"],
    icon: Video,
    color: "from-pink-500 to-red-500"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative z-10 bg-tech-blue">
      <div className="container mx-auto px-6 md:px-12">
        <SectionIndicator />
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-neon-cyan">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions designed to scale your business and maximize revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-tech-blue-light rounded-2xl p-8 border border-gray-800 hover:border-neon-cyan/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-bl-full transition-opacity group-hover:opacity-20" />
              
              <div className="mb-6 relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-[1px] transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <div className="w-full h-full bg-tech-blue rounded-xl flex items-center justify-center">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/book-appointment"
                className="inline-block text-sm font-semibold text-neon-cyan hover:text-white transition-colors"
              >
                Get Started &rarr;
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/book-appointment"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-neon-cyan text-neon-cyan font-bold text-lg hover:bg-neon-cyan hover:text-tech-blue transition-all box-glow-hover"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
