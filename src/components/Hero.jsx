import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden bg-canvas text-ink flex justify-center items-center">
      
      <div className="absolute inset-0 bg-noise opacity-[0.4] mix-blend-multiply pointer-events-none z-10"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-peach rounded-full blur-[120px] opacity-20 animate-pulse mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-denim rounded-full blur-[140px] opacity-20 animate-pulse mix-blend-multiply"></div>

      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10"
        style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
      >
        <h1 
          className="font-serif italic font-bold text-[35vw] tracking-tighter opacity-10 leading-none whitespace-nowrap"
          style={{ 
            color: 'transparent', 
            WebkitTextStroke: '2px var(--color-ink)' 
          }}
        >
          SOLSTICE
        </h1>
      </div>

      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-30 hidden md:block opacity-40 animate-fadeIn">
        <span className="font-sans text-[10px] uppercase tracking-widest">
          8.4095° S • 115.1889° E
        </span>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 opacity-50 animate-bounce">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em]">Explore</span>
        <div className="w-[1px] h-10 bg-ink"></div>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-30 text-right animate-fadeIn opacity-40">
        <span className="font-sans text-[10px] uppercase tracking-widest">
          July 24—26, 2026
        </span>
      </div>

      <div 
        className="relative z-20 flex flex-col items-center"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }} 
      >
        <div className="relative">
          <h1 className="font-serif font-normal text-[15vw] leading-[0.8] tracking-tight text-ink mix-blend-darken animate-fadeIn">
            SOLSTICE
          </h1>
          
          <div className="absolute -top-8 -right-8 md:-top-16 md:-right-16 w-24 h-24 md:w-40 md:h-40 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full h-full animate-[spin_12s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] fill-ink">
                  <textPath 
                    href="#circlePath" 
                    startOffset="0%"
                  >
                    • Music • Art • Nature • Soul
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        <p className="mt-8 font-sans text-xs uppercase tracking-[0.4em] opacity-60 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          A Summer Gathering
        </p>
      </div>

    </header>
  );
};

export default Hero;