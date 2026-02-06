import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { stiffness: 100, damping: 30 });

  const textBackY = useTransform(smoothScroll, [0, 500], [0, -75]);
  const textFrontY = useTransform(smoothScroll, [0, 500], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalisasi targetMouseX & Y
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden bg-paper text-ink flex justify-center items-center">
      
      <div className="absolute inset-0 bg-noise opacity-[0.35] mix-blend-multiply pointer-events-none z-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(44,40,37,0.05)_100%)] z-20 pointer-events-none"></div>

      <motion.div 
        animate={{ x: mousePos.x * -30, y: mousePos.y * -30 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-terra rounded-full blur-[100px] opacity-20 mix-blend-multiply will-change-transform"
      />

      <motion.div 
        animate={{ x: mousePos.x * 20, y: mousePos.y * 20 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-sand rounded-full blur-[120px] opacity-25 mix-blend-multiply will-change-transform"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#F2CC8F] rounded-full blur-[140px] opacity-15 mix-blend-multiply animate-pulse" />

      <motion.div 
        style={{ y: textBackY, x: mousePos.x * -10 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 will-change-transform"
      >
        <h1 
          className="font-serif italic font-bold text-[28vw] tracking-tighter opacity-5 leading-none whitespace-nowrap blur-[3px]"
          style={{ 
            color: 'transparent', 
            WebkitTextStroke: '2px var(--color-ink)',
          }}
        >
          SUNGLAZE
        </h1>
      </motion.div>

      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-30 hidden md:block opacity-60 animate-fadeIn">
        <div className="flex flex-col items-start gap-1">
          <span className="w-8 h-[1px] bg-ink/50 mb-2"></span>
          <span className="font-sans text-[10px] uppercase tracking-widest">
            Bali • Summer 2026
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 opacity-60 animate-bounce">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Dive In</span>
        <div className="w-[1px] h-12 bg-ink"></div>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-30 text-right animate-fadeIn opacity-60">
        <div className="flex flex-col items-end gap-1">
          <span className="w-8 h-[1px] bg-ink/50 mb-2"></span>
          <span className="font-sans text-[10px] uppercase tracking-widest">
            July 24—26
          </span>
        </div>
      </div>

      <motion.div 
        style={{ y: textFrontY }}
        className="relative z-20 flex flex-col items-center will-change-transform"
      >
        <div className="relative cursor-default">
          <h1 className="relative font-serif font-normal text-[15vw] leading-[0.8] tracking-tight text-ink mix-blend-darken animate-fadeIn drop-shadow-xl">
            SUNGLAZE
          </h1>
          
          <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-24 h-24 md:w-36 md:h-36 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full h-full animate-[spin_10s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] fill-ink">
                  <textPath href="#circlePath" startOffset="0%">
                    • Golden • Haze • Bali • Summer
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-terra rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 font-sans text-xs uppercase tracking-[0.4em] opacity-60 animate-fadeIn font-medium text-sand" style={{ animationDelay: '0.3s' }}>
          Soak up the sun
        </p>
      </motion.div>

    </header>
  );
};

export default Hero;