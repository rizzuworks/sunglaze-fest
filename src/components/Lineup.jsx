import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

import LanaImg from '../assets/images/lana-del-rey-portrait.webp';
import WaveToEarthImg from '../assets/images/wave-to-earth-portrait.webp';
import YungKaiImg from '../assets/images/yung-kai-portrait.webp';
import NikiImg from '../assets/images/niki-portrait.webp';
import RichBrianImg from '../assets/images/rich-brian-portrait.webp';
import LauvImg from '../assets/images/lauv-portrait.webp';

const Lineup = () => {
  const containerRef = useRef(null);
  
  const artists = [
    { name: "Lana Del Rey", img: LanaImg, quote: "Summertime, and the livin' is easy.", song: "Doin' Time" },
    { name: "Lauv", img: LauvImg, quote: "I like me better when I'm with you.", song: "I Like Me Better" },
    { name: "Niki", img: NikiImg, quote: "Baby, i fall in love every summertime.", song: "Every Summertime" },
    { name: "Rich Brian", img: RichBrianImg, quote: "It's a hundred degrees, why you feelin' down?", song: "100 Degrees" },
    { name: "Wave To Earth", img: WaveToEarthImg, quote: "Oh sunny day, it's like burnin' my youth.", song: "daisy" },
    { name: "Yung Kai", img: YungKaiImg, quote: "I think I'll picture us, you with the waves.", song: "Blue" },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const activeIndexRaw = useTransform(scrollYProgress, [0, 1], [0, artists.length - 1]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    return activeIndexRaw.on("change", (latest) => {
      setActiveIndex(Math.round(latest));
    });
  }, [activeIndexRaw]);

  const handleArtistClick = (index) => {
    const sectionHeight = containerRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTarget = containerRef.current.offsetTop + (index / (artists.length - 1)) * (sectionHeight - windowHeight);
    
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={containerRef} 
      id="lineup" 
      className="relative w-full bg-paper"
      style={{ height: '400vh' }}
    >
      <div className="sticky top-0 w-full h-screen flex flex-col md:flex-row border-b border-ink/10 overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="order-1 md:order-2 w-full md:w-1/2 h-[55vh] md:h-full flex items-center justify-center bg-sand/10 relative border-b md:border-b-0 border-ink/10"
        >
          <motion.div 
            animate={{ rotate: -1.5 }}
            className="relative w-[65%] sm:w-[50%] md:w-[60%] lg:w-[55%] aspect-[3/4] bg-paper shadow-2xl p-3 pb-12 md:p-6 md:pb-24 z-10"
          >
            <div className="w-full h-full relative overflow-hidden bg-ink/5">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ clipPath: 'inset(100% 0 0 0)', scale: 1.1 }}
                  animate={{ clipPath: 'inset(0% 0 0 0)', scale: 1 }}
                  exit={{ clipPath: 'inset(0 0 100% 0)', scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute inset-0"
                >
                  <img 
                    src={artists[activeIndex].img}
                    alt={artists[activeIndex].name}
                    className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-12 md:h-24 flex flex-col items-center justify-center px-4 text-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center"
                >
                  <p className="font-serif italic text-[11px] sm:text-sm md:text-xl text-ink/90 leading-tight line-clamp-2">
                    "{artists[activeIndex].quote}"
                  </p>
                  <div className="flex items-center gap-2 mt-1 md:mt-2 opacity-50 justify-center">
                    <span className="w-4 md:w-8 h-[1px] bg-ink"></span>
                    <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-widest text-ink font-bold italic">
                      {artists[activeIndex].song}
                    </span>
                    <span className="w-4 md:w-8 h-[1px] bg-ink"></span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 md:order-1 w-full md:w-1/2 h-[45vh] md:h-full flex flex-col justify-start md:justify-center px-6 py-6 md:py-0 md:pl-20 md:pr-10 bg-paper z-20"
        >
          <div className="mb-4 md:mb-12">
            <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] mb-1 md:mb-2 block text-terra font-bold">
              Artist Lineup
            </span>
            <h2 className="font-serif text-2xl md:text-6xl text-ink tracking-tight">Headliners</h2>
          </div>

          <div className="flex flex-col">
            {artists.map((artist, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ delay: 0.3 + (i * 0.1), duration: 0.8 }}
                className="flex items-baseline gap-4 md:gap-6 py-0.5 md:py-2"
              >
                <motion.span 
                  animate={{ 
                    color: activeIndex === i ? "var(--color-terra)" : "var(--color-ink)",
                    opacity: activeIndex === i ? 1 : 0.2,
                  }}
                  className="font-sans text-[10px] md:text-xs font-bold"
                >
                  0{i+1}
                </motion.span>
                <motion.h3 
                  onClick={() => handleArtistClick(i)} 
                  animate={{ 
                    x: activeIndex === i ? (window.innerWidth < 768 ? 10 : 24) : 0,
                    opacity: activeIndex === i ? 1 : 0.1,
                    skewX: activeIndex === i ? -8 : 0,
                    fontStyle: activeIndex === i ? 'italic' : 'normal'
                  }}
                  whileHover={{ opacity: 0.4 }}
                  className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.9] cursor-pointer origin-left tracking-tight text-ink"
                >
                  {artist.name}
                </motion.h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
    </section>
  );
};

export default Lineup;