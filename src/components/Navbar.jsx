import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        duration: 2,
        easing: (t) => 1 - Math.pow(1 - t, 4)
      });
    } else {
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full px-12 py-6 flex justify-between items-center z-50 text-paper transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] mix-blend-difference
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <a 
        href="#root" 
        onClick={(e) => handleNavClick(e, '#root')} 
        className="font-serif text-2xl font-bold tracking-tighter italic z-50 relative cursor-pointer"
      >
        Solstice.
      </a>
      
      <div className="flex items-center gap-12 text-xs font-sans font-medium uppercase tracking-[0.2em]">
        <a 
          href="#lineup" 
          onClick={(e) => handleNavClick(e, '#lineup')} 
          className="hover:text-smooth hover:italic transition-all cursor-pointer"
        >
          Artists
        </a>
        <a 
          href="#schedule" 
          onClick={(e) => handleNavClick(e, '#schedule')} 
          className="hover:text-smooth hover:italic transition-all cursor-pointer"
        >
          Timeline
        </a>
        
        <a 
          href="#tickets" 
          onClick={(e) => handleNavClick(e, '#tickets')} 
          className="border border-paper px-6 py-2 hover:bg-paper hover:text-ink transition-all duration-300 cursor-pointer"
        >
          Get Access
        </a>
      </div>

    </nav>
  );
};

export default Navbar;