import { motion } from "motion/react";

export default function SectionIndicator() {
  return (
    <div className="flex justify-center mb-8">
      <motion.div
        className="w-3 h-3 rounded-full"
        animate={{
          backgroundColor: ["#00F0FF", "#00FF66", "#00F0FF"],
          boxShadow: [
            "0 0 10px #00F0FF",
            "0 0 15px #00FF66",
            "0 0 10px #00F0FF",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
