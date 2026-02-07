import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const xSun = useTransform(smoothProgress, [0, 1], ["0%", isMobile ? "-40%" : "-150%"]);
  const xGlaze = useTransform(smoothProgress, [0, 1], ["0%", isMobile ? "40%" : "150%"]);
  const rotateSun = useTransform(smoothProgress, [0, 1], [0, isMobile ? -15 : -45]);
  const scaleImage = useTransform(smoothProgress, [0, 1], [1, 1.3]);
  const opacityOverlay = useTransform(smoothProgress, [0, 0.5], [0, 1]);

  const handleScrollToLineup = (e) => {
    e.preventDefault();
    const targetId = "#lineup";
    
    if (window.lenis) {
      window.lenis.scrollTo(targetId, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 4)
      });
    } else {
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100svh] bg-ink overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ scale: scaleImage }}
          className="w-full h-full will-change-transform"
        >
          <img 
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2076" 
            alt="Bali"
            loading="eager"
            className="w-full h-full object-cover brightness-75 contrast-125"
          />
        </motion.div>
        <motion.div 
          style={{ opacity: opacityOverlay }}
          className="absolute inset-0 bg-terra mix-blend-multiply pointer-events-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink pointer-events-none" />
      </div>

      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center select-none">
        <motion.div 
          style={{ x: xSun, rotate: rotateSun }}
          className="flex flex-col items-center will-change-transform"
        >
          <h1 className="font-serif text-[30vw] md:text-[22vw] leading-none text-paper tracking-tighter">
            SUN
          </h1>
        </motion.div>

        <motion.div 
          style={{ x: xGlaze }}
          className="mt-[-8vw] md:mt-[-5vw] md:ml-[15vw] will-change-transform"
        >
          <h1 className="font-serif italic text-[28vw] md:text-[20vw] leading-none text-terra tracking-tighter drop-shadow-2xl">
            GLAZE.
          </h1>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-0 w-full z-30 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex gap-2 mb-4">
            <span className="bg-sand text-ink text-[10px] font-bold px-3 py-1 uppercase tracking-widest">July 25/26</span>
            <span className="border border-paper/30 text-paper text-[10px] px-3 py-1 uppercase backdrop-blur-md tracking-widest">Bali, ID</span>
          </div>
          <p className="font-sans text-[10px] md:text-xs text-paper/60 uppercase tracking-[0.4em] max-w-[250px] md:max-w-[200px] leading-relaxed">
            A sonic sanctuary at the edge of the world. Melasti Beach, Uluwatu.
          </p>
        </div>

        <motion.a 
          href="#lineup"
          onClick={handleScrollToLineup}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 cursor-pointer group"
        >
          <span className="font-sans text-[10px] text-sand uppercase tracking-[0.5em] group-hover:text-terra transition-colors">
            Explore lineup
          </span>
          <div className="w-12 h-[1px] bg-sand group-hover:w-20 group-hover:bg-terra transition-all" />
        </motion.a>
      </div>

      <div className="absolute inset-0 bg-noise opacity-[0.04] md:opacity-[0.08] pointer-events-none z-50" />
    </section>
  );
};

export default Hero;