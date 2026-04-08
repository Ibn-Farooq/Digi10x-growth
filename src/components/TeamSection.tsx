import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import SectionIndicator from "./SectionIndicator";

const team = [
  {
    name: "Umer Farooq",
    role: "WordPress & Shopify Expert",
    image: "https://ui-avatars.com/api/?name=Umer+Farooq&background=00F0FF&color=0B0F23&size=256&font-size=0.33",
    socials: { fb: "#", insta: "#", linkedin: "#" }
  },
  {
    name: "Subhan Shoukat",
    role: "Meta & TikTok Ads Expert",
    image: "https://ui-avatars.com/api/?name=Subhan+Shoukat&background=00FF66&color=0B0F23&size=256&font-size=0.33",
    socials: { fb: "#", insta: "#", linkedin: "#" }
  },
  {
    name: "Ahsan Shakeel",
    role: "Content Marketing & Creative Design Expert",
    image: "https://ui-avatars.com/api/?name=Ahsan+Shakeel&background=00F0FF&color=0B0F23&size=256&font-size=0.33",
    socials: { fb: "#", insta: "#", linkedin: "#" }
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 relative z-10 bg-tech-blue-light/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionIndicator />
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our <span className="text-neon-cyan">Experts</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The creative minds and technical wizards behind your next big growth phase.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-tech-blue rounded-2xl p-8 border border-gray-800 hover:border-neon-cyan/50 transition-all group text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-green opacity-20 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative w-full h-full rounded-full object-cover border-2 border-tech-blue-light group-hover:border-neon-cyan transition-colors"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">{member.name}</h3>
              <p className="text-neon-green text-sm font-medium mb-6">{member.role}</p>
              
              <div className="flex items-center justify-center gap-4">
                <a href={member.socials.fb} className="text-gray-400 hover:text-neon-cyan transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href={member.socials.insta} className="text-gray-400 hover:text-neon-cyan transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href={member.socials.linkedin} className="text-gray-400 hover:text-neon-cyan transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
