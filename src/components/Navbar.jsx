import React, { useState, useEffect } from 'react';

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
    <div 
      className={`fixed top-6 left-0 w-full flex justify-center z-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}
      `}
    >
      
      <nav className="bg-ink/90 backdrop-blur-md border border-paper/10 text-paper px-8 py-4 rounded-full flex items-center gap-16 shadow-2xl">
        
        <a 
          href="#root" 
          onClick={(e) => handleNavClick(e, '#root')} 
          className="font-serif text-2xl font-bold tracking-tighter italic cursor-pointer hover:text-sand transition-colors duration-300"
        >
          Sunglaze.
        </a>
        
        <div className="flex items-center gap-8 text-xs font-sans font-medium uppercase tracking-[0.2em]">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)} 
              className="text-paper/80 hover:text-terra transition-colors duration-300 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a 
          href="#tickets" 
          onClick={(e) => handleNavClick(e, '#tickets')} 
          className="bg-paper text-ink px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-terra hover:text-paper transition-all duration-300 cursor-pointer"
        >
          Get Tickets
        </a>

      </nav>

    </div>
  );
};

export default Navbar;