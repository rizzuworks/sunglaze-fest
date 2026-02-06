import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Tagline from './components/Tagline.jsx';
import Lineup from './components/Lineup.jsx';
import Schedule from './components/Schedule.jsx';
import Countdown from './components/Countdown.jsx';
import Tickets from './components/Tickets.jsx';
import Promo from './components/Promo.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';

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
      <div className="w-48 h-[4px] bg-ink/10 relative overflow-hidden mb-4">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-ink w-full"
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
        className="text-ink tracking-[0.3em] text-[10px] font-bold uppercase"
      >
        LOADING EXPERIENCE
      </motion.p>
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    
    if (isLoading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="bg-paper min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>

      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          scale: isLoading ? 0.95 : 1 
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
        <Hero />
        <Tagline />
        <Lineup />
        <Schedule />
        <Countdown />
        <Tickets />
        <Promo />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;