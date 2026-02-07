import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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
        if (window.scrollY > lastScrollY && window.scrollY > 100 && !isOpen) { 
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
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
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-6 left-0 w-full flex justify-center z-50 px-4"
          >
            <nav className="bg-ink/90 backdrop-blur-md border border-paper/10 text-paper px-6 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-full flex items-center justify-between gap-4 md:gap-16 shadow-2xl w-full md:w-auto relative transition-all duration-300">
              <motion.a 
                href="#root" 
                onClick={(e) => handleNavClick(e, '#root')} 
                whileHover={{ scale: 1.05 }}
                className="font-serif text-xl md:text-2xl font-bold tracking-tighter italic cursor-pointer hover:text-sand transition-colors duration-300"
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

              <div className="flex items-center gap-3">
                <motion.a 
                  href="#tickets" 
                  onClick={(e) => handleNavClick(e, '#tickets')} 
                  whileHover={{ scale: 1.05, backgroundColor: "var(--color-terra)", color: "var(--color-paper)" }}
                  className="hidden md:block bg-paper text-ink px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  Get Tickets
                </motion.a>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden w-10 h-10 flex items-center justify-center border border-paper/10 rounded-xl focus:outline-none"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <motion.path
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{ d: isOpen ? "M6 6 L18 18" : "M4 7 L20 7" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.path
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{ opacity: isOpen ? 0 : 1, d: "M4 12 L20 12" }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.path
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{ d: isOpen ? "M6 18 L18 6" : "M4 17 L20 17" }}
                      transition={{ duration: 0.3 }}
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/98 backdrop-blur-2xl z-[49] flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-3xl text-paper hover:text-terra transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#tickets"
                onClick={(e) => handleNavClick(e, '#tickets')}
                className="mt-4 bg-terra text-paper px-10 py-4 rounded-full font-sans text-sm font-bold uppercase tracking-widest shadow-2xl shadow-terra/30"
              >
                Get Tickets
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;