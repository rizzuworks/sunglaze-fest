import React, { useEffect } from 'react';
import Lenis from 'lenis'; // Pastikan import Lenis

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tagline from './components/Tagline';
import Lineup from './components/Lineup';
import Schedule from './components/Schedule';
import Countdown from './components/Countdown';
import Tickets from './components/Tickets';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Inisialisasi Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing bawaan yang smooth
      smooth: true,
    });

    // SIMPAN KE WINDOW AGAR BISA DIPAKAI DI NAVBAR
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // Bersihkan saat unmount
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-paper min-h-screen selection:bg-smooth selection:text-paper">
       {/* ... Sisa kode sama ... */}
       <div className="hidden md:block">
         <CustomCursor />
      </div>
      <div className="fixed inset-0 bg-noise opacity-[0.08] pointer-events-none z-[100] mix-blend-overlay"></div>
      
      <Navbar />
      <Hero />
      <Tagline />
      <Lineup />
      <Schedule />
      <Countdown />
      <Tickets />
      <Footer />
    </div>
  );
}

export default App;