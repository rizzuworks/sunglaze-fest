import React, { useState } from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';

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

  const marqueeText = " • Sign Up for Updates • Exclusive Merch Drops • Secret Lineup Hints ";

  return (
    <section 
      id="promo"
      className="relative w-full bg-ink text-paper overflow-hidden"
    >
      <div className="w-full py-3 md:py-4 bg-terra text-paper border-y border-paper/10 overflow-hidden relative z-20">
        <div className="flex w-full overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap w-max will-change-transform"
          >
            {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 8)].map((_, i) => (
              <span
                key={i} 
                className="font-sans text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] inline-block"
              >
                {marqueeText}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-60 mb-4 block text-sand">
            The Inner Circle
          </span>
          <h2 className="font-serif text-4xl md:text-7xl leading-tight mb-6">
            Don't miss the <br className="hidden md:block" />
            <span className="italic text-terra inline-block">golden hour.</span>
          </h2>
          <p className="font-sans text-xs md:text-base opacity-70 leading-relaxed max-w-md mx-auto md:mx-0">
            Join our mailing list to get early access to Phase 2 tickets, 
            exclusive artist interviews, and a chance to win a backstage pass 
            upgrade. No spam, just vibes.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-terra rounded-full blur-[60px] md:blur-[120px] opacity-20 pointer-events-none"/>

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6 w-full">
            <div className="group relative">
              <input 
                type="email" 
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-paper/30 py-4 md:py-6 text-lg md:text-2xl font-serif italic placeholder:text-paper/20 focus:outline-none focus:border-sand transition-all duration-500"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-2">
              <span className="font-sans text-[8px] md:text-[10px] uppercase tracking-widest opacity-40">
                *We respect your privacy
              </span>

              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full md:w-auto flex items-center gap-3 px-8 py-4 font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors duration-500 cursor-pointer min-w-[160px] justify-center
                  ${status === 'success' 
                    ? 'bg-sand text-ink' 
                    : 'bg-paper text-ink hover:bg-terra hover:text-paper active:bg-terra'
                  }
                `}
              >
                <AnimatePresence mode="wait">
                  {status === 'loading' ? (
                    <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Sending...
                    </motion.span>
                  ) : status === 'success' ? (
                    <motion.div key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                      You're In! <FaCheck />
                    </motion.div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Subscribe <FaArrowRight />
                    </div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>
    </section>
  );
};

export default Promo;