import React from 'react';
import { motion } from 'motion/react';

const Tagline = () => {
  const words = [
    "Rythm", "Sunkissed", "Euphoria", "Horizon", "Memories", "Tropics", "Soul"
  ];
  
  const content = words.join("  •  ");

  return (
    <div className="w-full py-6 lg:py-8 2xl:py-10 bg-terra text-paper border-y border-paper/10 overflow-hidden relative z-20">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40 
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="font-serif text-2xl xl:text-3xl 2xl:text-5xl italic font-light tracking-[0.1em] flex items-center">
            {content}
            <span className="mx-2 2xl:mx-6"> • </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Tagline;