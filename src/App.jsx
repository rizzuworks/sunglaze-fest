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
import Preloader from './components/Preloader.jsx';

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
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <Navbar />
          <Hero />
          <Tagline />
          <Lineup />
          <Schedule />
          <Tickets />
          <Countdown />
          <Promo />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;