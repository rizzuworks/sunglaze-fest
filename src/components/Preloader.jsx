import React from 'react';
import { motion } from 'motion/react';

const Preloader = () => {
  return (
    <motion.div
      key="loader-container"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-paper"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] } 
      }}
    >
      <div className="w-48 flex flex-col items-center">
        <div className="w-full h-[4px] bg-ink/10 relative overflow-hidden mb-3">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-terra w-full"
            style={{ originX: 0 }} 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut",
              repeat: Infinity 
            }}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full text-terra tracking-[0.2em] text-[10px] font-bold uppercase text-center"
        >
          Loading Experience
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;