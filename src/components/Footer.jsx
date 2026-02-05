import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => (
  <footer className="w-full bg-gradient-to-b from-[#8A9A9C] to-deep text-paper pt-32 flex flex-col items-center justify-end overflow-hidden relative">
    
    <div className="w-full max-w-4xl mx-auto px-6 mb-16 text-center relative z-20">
        
      <h3 className="font-serif italic text-3xl md:text-5xl leading-tight mb-12 opacity-90">
        "Where the sun meets the soul,<br />
        and the music never ends."
      </h3>
 
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 font-sans text-xs md:text-sm uppercase tracking-[0.2em]">
        <span className="opacity-80">Follow @solsticefest on</span>
        
        <div className="flex items-center gap-6 text-xl">
          <a 
            href="https://www.instagram.com/"
            target="_blank"
            noref="noopener noreferrer"
            className="hover:text-smooth hover:scale-110 transition-all duration-300" 
            aria-label="Instagram"
            >
            <FaInstagram />
          </a>
          <a 
            href="https://www.tiktok.com/"
            target="_blank"
            noref="noopener noreferrer"
            className="hover:text-smooth hover:scale-110 transition-all duration-300" 
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

    </div>


    <div className="text-center mb-2 relative z-10">
      <div className="w-12 h-[1px] bg-paper/50 mx-auto mb-6"></div>
      <p className="font-sans text-xs uppercase tracking-[0.4em] text-paper/90">See you in July</p>
    </div>

    <div className="w-full px-4 text-center z-0 leading-none select-none pointer-events-none">
      <h1 className="font-serif italic font-bold text-[18vw] md:text-[22vw] tracking-[-0.1em] text-transparent bg-clip-text bg-paper transform translate-y-[20%]">
        Solstice.
      </h1>
    </div>

    <div className="w-full bg-paper px-6 py-8 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-sans uppercase text-ink font-semibold gap-4">
        <span>© 2026 Solstice Fest.</span>
        
        <div className="flex gap-6 opacity-60">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, '#root')}
            className="hover:text-smooth"
          >
            Privacy Policy
          </a>
          <a 
            href="#"
            onClick={(e) => handleNavClick(e, '#root')}
            className="hover:text-smooth"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;