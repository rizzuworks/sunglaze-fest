import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Promo = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section 
      id="promo"
      className="relative w-full bg-ink text-paper overflow-hidden"
    >
      
      <div className="w-full py-4 bg-terra text-paper border-y border-paper/10 overflow-hidden relative z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span
              key={i} 
              className="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.3em]"
            >
              • Sign Up for Updates • Exclusive Merch Drops • Secret Lineup Hints
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
        
        <div>
          <span className="font-sans text-xs uppercase tracking-[0.4em] opacity-60 mb-6 block text-sand animate-pulse">
            The Inner Circle
          </span>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
            Don't miss the <br />
            <span className="italic text-terra">golden hour.</span>
          </h2>
          <p className="font-sans text-sm md:text-base opacity-70 leading-relaxed max-w-md">
            Join our mailing list to get early access to Phase 2 tickets, 
            exclusive artist interviews, and a chance to win a backstage pass 
            upgrade. No spam, just vibes.
          </p>

        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-terra rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="group relative">
              <input 
                type="email" 
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-paper/30 py-6 text-xl md:text-2xl font-serif italic placeholder:text-paper/20 focus:outline-none focus:border-sand transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-sand transition-all duration-500 group-focus-within:w-full"></div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="font-sans text-[10px] uppercase tracking-widest opacity-40">
                *We respect your privacy
              </span>

              <button 
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`flex items-center gap-3 px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-500 cursor-pointer
                ${status === 'success' 
                  ? 'bg-sand text-ink cursor-default' 
                  : 'bg-paper text-ink hover:bg-terra hover:text-paper'
                }
              `}
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'You\'re In!' : 'Subscribe'}
                {status === 'idle' && <FaArrowRight />}
              </button>
            </div>
          </form>
        </div>

      </div>

      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>
    </section>
  );
};

export default Promo;