import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { motion } from 'motion/react';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="max-h-[100vh] bg-gradient-to-b from-terra to-ink text-paper pt-32 flex flex-col items-center justify-end overflow-hidden relative">
      
      <div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-multiply pointer-events-none"></div>

      <div className="w-full max-w-4xl mx-auto px-6 mb-16 text-center relative z-20">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-3xl md:text-5xl leading-tight mb-12 text-paper"
        >
          "Where the sun meets the soul,<br />
          and the music never ends."
        </motion.h3>
   
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 font-sans text-xs md:text-sm uppercase tracking-[0.2em]"
        >
          <span className="opacity-80">Follow @sunglazefest on</span>
          
          <div className="flex items-center gap-6 text-xl">
            <motion.a 
              whileHover={{ scale: 1.1, color: "var(--color-sand)" }}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300" 
              aria-label="Instagram"
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, color: "var(--color-sand)" }}
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300" 
              aria-label="TikTok"
            >
              <FaTiktok />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mb-2 relative z-10"
      >
        <div className="w-12 h-[1px] bg-paper/50 mx-auto mb-6"></div>
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-paper/90">See you in July</p>
      </motion.div>

      <div className="w-full px-4 text-center z-0 leading-none select-none pointer-events-none">
        <h1 className="font-serif italic font-bold text-[18vw] md:text-[22vw] tracking-[-0.1em] text-paper transform translate-y-[20%]">
          Sunglaze.
        </h1>
      </div>

      <motion.div 
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-paper px-6 py-8 relative z-20"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-sans uppercase text-ink font-semibold gap-4">
          <span>© 2026 Sunglaze Fest.</span>
          
          <div className="flex gap-6 opacity-60">
            <a 
              href="#" 
              onClick={scrollToTop}
              className="hover:text-terra transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#"
              onClick={scrollToTop}
              className="hover:text-terra transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </motion.div>

    </footer>
  );
};

export default Footer;