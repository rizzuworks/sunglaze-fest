import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-paper flex flex-col items-center justify-between overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[70vw] h-[70vw] bg-terra/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[50vw] h-[50vw] bg-sand/25 rounded-full blur-[110px]" />
        
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="w-full h-full grayscale-[20%] contrast-[1.1]"
        >
          <img 
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2076" 
            alt="Bali Tropical Sunset"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-paper/30" />
      </div>

      <div className="relative z-20 w-full flex flex-col items-center pt-28 md:pt-36 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-3 mb-6 md:mb-8"
        >
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] py-2 px-6 border border-ink/10 rounded-full backdrop-blur-sm">
            July 24 — 25
          </span>
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] py-2 px-6 bg-terra text-paper rounded-full shadow-lg shadow-terra/20">
            2026 Edition
          </span>
        </motion.div>

        <div className="relative mb-6 md:mb-10">
          <motion.h1 
            className="font-serif text-[16vw] md:text-[13vw] leading-[0.75] text-ink flex flex-col items-center select-none"
          >
            <motion.span 
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              SUN
            </motion.span>
            
            <span className="relative inline-block">
              <motion.span 
                initial={{ y: 60, opacity: 0, skewX: 0 }}
                animate={{ y: 0, opacity: 1, skewX: -12 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="italic text-terra tracking-tighter"
              >
                GLAZE.
              </motion.span>
              
              <motion.div 
                initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 180, scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-sand/30 rounded-full -z-10"
                style={{ borderStyle: 'double' }}
              />
            </span>
          </motion.h1>
        </div>
      </div>

      <div className="relative z-20 w-full flex flex-col items-center pb-8 md:pb-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-ink/40">
            Hosted at the sanctuary of
          </p>
          
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <h3 className="font-serif italic text-2xl md:text-3xl text-terra mb-1">
              Melasti Beach
            </h3>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-4 bg-sand/40" />
              <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-ink/70">
                Uluwatu, Bali
              </span>
              <div className="h-[1px] w-4 bg-sand/40" />
            </div>
          </div>

          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-3 opacity-40">Explore</span>
            <div className="relative w-[1px] h-10 bg-ink/20 overflow-hidden">
               <motion.div 
                animate={{ y: [-40, 40] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-ink"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
    </section>
  );
};

export default Hero;