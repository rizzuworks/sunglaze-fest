import React, { useRef } from 'react';
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
  
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  React.useEffect(() => {
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
        
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:pl-20 md:pr-10 border-r border-ink/10 z-10 bg-paper">
          <div className="pb-12 px-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              className="font-sans text-xs uppercase tracking-[0.4em] mb-4 block text-terra"
            >
              Artist Lineup
            </motion.span>
            <h2 className="font-serif text-4xl md:text-6xl text-ink">Headliners</h2>
          </div>

          <div className="flex flex-col">
            {artists.map((artist, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group flex items-baseline gap-6 py-1 md:py-2"
              >
                <motion.span 
                  animate={{ 
                    color: activeIndex === i ? "var(--color-terra)" : "var(--color-ink)",
                    opacity: activeIndex === i ? 1 : 0.2,
                    y: activeIndex === i ? -4 : 0
                  }}
                  className="font-sans text-xs font-bold"
                >
                  0{i+1}
                </motion.span>
                <motion.h3 
                  onClick={() => handleArtistClick(i)} 
                  animate={{ 
                    skewX: activeIndex === i ? -10 : 0,
                    x: activeIndex === i ? 20 : 0,
                    opacity: activeIndex === i ? 1 : 0.1,
                    filter: activeIndex === i ? "blur(0px)" : "blur(2px)",
                    scale: activeIndex === i ? 1 : 0.95
                  }}
                  whileHover={{ opacity: 0.4, filter: "blur(0px)" }}
                  className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.85] cursor-pointer origin-left tracking-tight text-ink"
                >
                  {artist.name}
                </motion.h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex w-1/2 h-full items-center justify-center bg-sand/10 relative">
          <div className="absolute w-[60%] aspect-[3/4] border border-ink/10 z-0"></div>

          <motion.div 
            animate={{ rotate: -2 }}
            className="relative w-[55%] aspect-[3/4] bg-paper shadow-2xl z-10 p-4 pb-20 md:p-6 md:pb-24"
          >
            <div className="w-full h-full relative overflow-hidden bg-ink/5">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ clipPath: 'inset(100% 0 0 0)', scale: 1.1 }}
                  animate={{ clipPath: 'inset(0% 0 0 0)', scale: 1 }}
                  exit={{ clipPath: 'inset(0 0 100% 0)', scale: 1.05 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.33, 1, 0.68, 1]
                  }}
                  className="absolute inset-0"
                >
                  <img 
                    src={artists[activeIndex].img}
                    alt={artists[activeIndex].name}
                    className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1]"
                  />
                  <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-20 md:h-24 flex flex-col items-center justify-center px-6 text-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-serif italic text-lg md:text-xl text-ink/90 leading-tight line-clamp-2">
                    "{artists[activeIndex].quote}"
                  </p>
                  
                  <div className="flex items-center gap-2 mt-2 opacity-50 justify-center">
                    <span className="w-8 h-[1px] bg-ink"></span>
                    <span className="font-sans text-[9px] uppercase tracking-widest text-ink font-semibold">
                      {artists[activeIndex].song}
                    </span>
                    <span className="w-8 h-[1px] bg-ink"></span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Lineup;