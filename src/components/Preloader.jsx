import React from 'react';
import { motion } from 'motion/react';

const Preloader = ({ setComplete }) => {
  return (
    <motion.div
      key="loader-container"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-paper will-change-transform"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { 
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1]
        } 
      }}
    >
      <div className="w-56 md:w-64 flex flex-col items-center">
        <div className="w-full h-[3px] md:h-[4px] bg-ink/5 relative overflow-hidden mb-4">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-terra w-full will-change-transform"
            style={{ originX: 0 }} 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 2.5, 
              ease: "circOut",
            }}
            onAnimationComplete={() => setComplete?.(true)}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full text-center"
        >
          <p className="text-terra tracking-[0.3em] text-[9px] md:text-[10px] font-bold uppercase whitespace-nowrap">
            Loading Experience
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
    </motion.div>
  );
};

export default Preloader;