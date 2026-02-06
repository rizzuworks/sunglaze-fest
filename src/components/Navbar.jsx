import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { label: "Artists", href: "#lineup" },
    { label: "Timeline", href: "#schedule" },
    { label: "Countdown", href: "#countdown" },
    { label: "Promo", href: "#promo" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault(); 
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
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-6 left-0 w-full flex justify-center z-50 px-4"
        >
          <nav className="bg-ink/90 backdrop-blur-md border border-paper/10 text-paper px-8 py-4 rounded-full flex items-center gap-12 md:gap-16 shadow-2xl relative overflow-hidden">
            <motion.a 
              href="#root" 
              onClick={(e) => handleNavClick(e, '#root')} 
              whileHover={{ scale: 1.05 }}
              className="font-serif text-2xl font-bold tracking-tighter italic cursor-pointer hover:text-sand transition-colors duration-300"
            >
              Sunglaze.
            </motion.a>
            
            <div className="hidden md:flex items-center gap-8 text-xs font-sans font-medium uppercase tracking-[0.2em]">
              {navItems.map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)} 
                  whileHover={{ y: -2, color: "var(--color-terra)" }}
                  className="text-paper/80 transition-colors duration-300 cursor-pointer"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.a 
              href="#tickets" 
              onClick={(e) => handleNavClick(e, '#tickets')} 
              whileHover={{ scale: 1.05, backgroundColor: "var(--color-terra)", color: "var(--color-paper)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-paper text-ink px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Get Tickets
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;