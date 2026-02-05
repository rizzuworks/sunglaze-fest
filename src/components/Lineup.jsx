import React, { useState, useEffect, useRef } from 'react';
import LanaImg from '../assets/images/lana-del-rey-portrait.webp';
import WaveToEarthImg from '../assets/images/wave-to-earth-portrait.webp';
import YungKaiImg from '../assets/images/yung-kai-portrait.webp';
import NikiImg from '../assets/images/niki-portrait.webp';
import RichBrianImg from '../assets/images/rich-brian-portrait.webp';
import LauvImg from '../assets/images/lauv-portrait.webp';

const Lineup = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const artists = [
    { name: "Lana Del Rey", img: LanaImg },
    { name: "Lauv", img: LauvImg },
    { name: "Niki", img: NikiImg },
    { name: "Rich Brian", img: RichBrianImg },
    { name: "Wave To Earth", img: WaveToEarthImg },
    { name: "Yung Kai", img: YungKaiImg },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollDistance = -top;
      const totalScrollableHeight = height - windowHeight;
      
      let progress = scrollDistance / totalScrollableHeight;

      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      const index = Math.floor(progress * artists.length);
      const safeIndex = Math.min(index, artists.length - 1);

      setActiveIndex(safeIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [artists.length]);

  const handleArtistClick = (index) => {
    if (!containerRef.current) return;

    const { top, height } = containerRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + top;
    const totalScrollableHeight = height - window.innerHeight;
    const segmentHeight = totalScrollableHeight / artists.length;
    const targetScroll = sectionTop + (index * segmentHeight) + 5;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={containerRef} 
      id="lineup" 
      className="relative w-full bg-paper"
      style={{ height: '300vh' }} 
    >
      
      <div className="sticky top-0 w-full h-screen flex flex-col md:flex-row overflow-hidden">
        
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:pl-20 md:pr-10 border-r border-ink/10 z-10 bg-paper">
          <div className="pb-12 px-4">
            <span className="font-sans text-xs uppercase tracking-[0.4em] opacity-40 mb-4 block text-smooth">Artist Lineup</span>
            <h2 className="font-serif text-4xl md:text-6xl text-ink">Headliners</h2>
          </div>

           <div className="flex flex-col">
              {artists.map((artist, i) => (
                <div 
                  key={i}
                  onClick={() => handleArtistClick(i)} 
                  className="group cursor-pointer flex items-baseline gap-6 transition-all duration-500 ease-out py-1 md:py-2"
                >
                  <span className={`font-sans text-xs font-bold transition-all duration-500
                    ${activeIndex === i ? 'text-smooth opacity-100 -translate-y-2' : 'text-ink opacity-20 group-hover:opacity-40'}
                `}>
                    0{i+1}
                  </span>

                  <h3 className={`font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.85] transition-all duration-500 origin-left tracking-tight
                    ${activeIndex === i 
                        ? 'text-ink italic translate-x-4 opacity-100' 
                        : 'text-ink opacity-10 hover:opacity-30 blur-[2px] hover:blur-0 scale-95' 
                    }
                  `}>
                      {artist.name}
                  </h3>
                </div>
              ))}
           </div>
        </div>

        <div className="hidden md:flex w-1/2 h-full items-center justify-center bg-[#EAE6DE] relative">
           
          <div className="absolute w-[60%] aspect-[3/4] border border-ink/10 z-0"></div>

          <div className="relative w-[55%] aspect-[3/4] bg-paper shadow-2xl z-10 p-3 -rotate-2 transition-transform duration-700 ease-out">
            <div className="w-full h-full relative overflow-hidden bg-ink/5">
              {artists.map((artist, i) => (
                <div 
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ease-[0.22,1,0.36,1]
                    ${activeIndex === i 
                      ? 'opacity-100 scale-100 z-10 clip-path-full' 
                      : 'opacity-0 scale-110 z-0'
                    }
                  `}
                >
                  <img 
                    src={artist.img}
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1]"
                  />
                  <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>

                  <div className="absolute bottom-6 right-6 z-20 mix-blend-difference text-paper opacity-0 animate-fadeIn">
                    <span className="font-serif italic text-2xl">{artist.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Lineup;