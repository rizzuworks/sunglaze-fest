import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const blobLeftRef = useRef(null);
  const blobRightRef = useRef(null);
  const textBackRef = useRef(null);
  const textFrontRef = useRef(null);

  useEffect(() => {
    let currentScroll = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      currentScroll = window.scrollY;
    };

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;

    const animate = () => {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      
      // Left Blob 
      if (blobLeftRef.current) {
        blobLeftRef.current.style.transform = `translate3d(${mouseX * -30}px, ${mouseY * -30}px, 0)`;
      }

      // Right Blob 
      if (blobRightRef.current) {
        blobRightRef.current.style.transform = `translate3d(${mouseX * 20}px, ${mouseY * 20}px, 0)`;
      }

      // Parallax Scroll + Invert Mouse
      if (textBackRef.current) {
        textBackRef.current.style.transform = `translate3d(${mouseX * -10}px, ${-currentScroll * 0.15 + (mouseY * -10)}px, 0)`;
      }

      // Parallax Scroll
      if (textFrontRef.current) {
        textFrontRef.current.style.transform = `translate3d(0, ${currentScroll * 0.2}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden bg-paper text-ink flex justify-center items-center">
      
      <div className="absolute inset-0 bg-noise opacity-[0.35] mix-blend-multiply pointer-events-none z-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(44,40,37,0.05)_100%)] z-20 pointer-events-none"></div>

      <div 
        ref={blobLeftRef}
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-[#E07A5F] rounded-full blur-[100px] opacity-20 mix-blend-multiply will-change-transform"
      ></div>

      <div 
        ref={blobRightRef}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#D4A373] rounded-full blur-[120px] opacity-25 mix-blend-multiply will-change-transform"
      ></div>

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#F2CC8F] rounded-full blur-[140px] opacity-15 mix-blend-multiply animate-pulse"
      ></div>

      <div 
        ref={textBackRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 will-change-transform"
      >
        <h1 
          className="font-serif italic font-bold text-[28vw] tracking-tighter opacity-5 leading-none whitespace-nowrap blur-[3px]"
          style={{ 
            color: 'transparent', 
            WebkitTextStroke: '2px var(--color-ink)',
          }}
        >
          SUNGLAZE
        </h1>
      </div>

      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-30 hidden md:block opacity-60 animate-fadeIn">
        <div className="flex flex-col items-start gap-1">
          <span className="w-8 h-[1px] bg-ink/50 mb-2"></span>
          <span className="font-sans text-[10px] uppercase tracking-widest">
            Bali • Summer 2026
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 opacity-60 animate-bounce">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Dive In</span>
        <div className="w-[1px] h-12 bg-ink"></div>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-30 text-right animate-fadeIn opacity-60">
        <div className="flex flex-col items-end gap-1">
          <span className="w-8 h-[1px] bg-ink/50 mb-2"></span>
          <span className="font-sans text-[10px] uppercase tracking-widest">
            July 24—26
          </span>
        </div>
      </div>

      <div 
        ref={textFrontRef}
        className="relative z-20 flex flex-col items-center will-change-transform"
      >
        <div className="relative cursor-default">
          <h1 className="relative font-serif font-normal text-[15vw] leading-[0.8] tracking-tight text-ink mix-blend-darken animate-fadeIn drop-shadow-xl">
            SUNGLAZE
          </h1>
          
          <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-24 h-24 md:w-36 md:h-36 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full h-full animate-[spin_10s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] fill-ink">
                  <textPath href="#circlePath" startOffset="0%">
                    • Golden • Haze • Bali • Summer
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#E07A5F] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 font-sans text-xs uppercase tracking-[0.4em] opacity-60 animate-fadeIn font-medium text-[#D4A373]" style={{ animationDelay: '0.3s' }}>
          Soak up the sun
        </p>
      </div>

    </header>
  );
};

export default Hero;