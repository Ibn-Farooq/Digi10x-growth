import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, Facebook, MessageCircle , Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { 
      name: "Facebook", 
      icon: <Facebook size={18} />, 
      href: "https://www.facebook.com/digi10xgrow" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={18} />, 
      href: "https://www.instagram.com/digi10xgrowth/" 
    },
    { 
  name: "WhatsApp", 
  icon: <MessageCircle size={18} />, 
  href: "https://wa.me/923710045282" 
},
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={18} />, 
      href: "https://www.linkedin.com/in/umer-farooq-0ab123333/" 
    },
    { 
      name: "GitHub", 
      icon: <Github size={18} />, 
      href: "https://github.com/Ibn-Farooq" // Added based on your repository name
    },
  ];

  return (
    <footer className="bg-tech-blue border-t border-gray-800 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <div className="w-8 h-8 rounded bg-neon-cyan flex items-center justify-center font-display font-bold text-tech-blue">
                D
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Digi <span className="text-neon-cyan">10x</span> Growth
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Turning Clicks into Revenue. We are a results-driven digital marketing agency focused on scaling your business.
            </p>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-tech-blue-light flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10 border border-transparent hover:border-neon-cyan/30 transition-all duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`/#${item.toLowerCase()}`} className="text-gray-400 hover:text-neon-cyan transition-colors text-sm flex items-center gap-2">
                    <ArrowRight size={14} className="text-neon-cyan" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "WordPress Development",
                "Meta Ads",
                "Shopify Store Setup",
                "Meta Business Setup",
                "SEO",
                "TikTok Ads"
              ].map((item) => (
                <li key={item}>
                  <a href="/#services" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm flex items-center gap-2">
                    <ArrowRight size={14} className="text-neon-cyan" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="text-neon-cyan shrink-0 mt-0.5" size={18} />
                <span>Ahmad Plaza, 20 Block,<br/>Sargodha, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="text-neon-cyan shrink-0" size={18} />
                <span>+92 371 0045282</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="text-neon-cyan shrink-0" size={18} />
                <span className="break-all">hello@digi10xgrowth.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/book-appointment"
                className="inline-block px-6 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan text-neon-cyan text-sm font-semibold hover:bg-neon-cyan hover:text-tech-blue transition-all"
              >
                Book Appointment
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Digi 10x Growth. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}