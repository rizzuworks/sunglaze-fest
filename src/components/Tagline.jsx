import React from 'react';
import { motion } from 'framer-motion';

const Tagline = () => {
  const words = [
    "Rythm", "Sunkissed", "Euphoria", "Horizon", "Memories", "Tropics", "Soul"
  ];
  const content = words.join(" • ") + " • ";

  return (
    <div className="w-full py-8 bg-terra text-paper border-y border-paper/20 overflow-hidden relative z-20">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="font-serif text-3xl md:text-5xl px-2 italic font-light opacity-90">
            {content}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Tagline;