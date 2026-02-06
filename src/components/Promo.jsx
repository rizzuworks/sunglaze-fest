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

  return (
    <section 
      id="promo"
      className="relative w-full bg-ink text-paper overflow-hidden"
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="w-full py-4 bg-terra text-paper border-y border-paper/10 overflow-hidden relative z-20"
      >
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-4"
          >
            {[...Array(12)].map((_, i) => (
              <span
                key={i} 
                className="font-sans text-xs md:text-sm font-bold uppercase tracking-[0.3em] flex-shrink-0"
              >
                • Sign Up for Updates • Exclusive Merch Drops • Secret Lineup Hints
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.4em] opacity-60 mb-6 block text-sand">
            The Inner Circle
          </span>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
            Don't miss the <br />
            <motion.span 
              initial={{ opacity: 0, skewX: 0 }}
              whileInView={{ opacity: 1, skewX: -12 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="italic text-terra inline-block origin-left"
            >
              golden hour.
            </motion.span>
          </h2>
          <p className="font-sans text-sm md:text-base opacity-70 leading-relaxed max-w-md">
            Join our mailing list to get early access to Phase 2 tickets, 
            exclusive artist interviews, and a chance to win a backstage pass 
            upgrade. No spam, just vibes.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-terra rounded-full blur-[100px] pointer-events-none"
          />

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

              <motion.button 
                whileHover={status === 'idle' ? { scale: 1.05 } : {}}
                whileTap={status === 'idle' ? { scale: 0.95 } : {}}
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`flex items-center gap-3 px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-500 cursor-pointer overflow-hidden min-w-[160px] justify-center
                  ${status === 'success' 
                    ? 'bg-sand text-ink cursor-default' 
                    : 'bg-paper text-ink hover:bg-terra hover:text-paper'
                  }
                `}
              >
                <AnimatePresence mode="wait">
                  {status === 'loading' ? (
                    <motion.span 
                      key="loading" 
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      exit={{ y: -20, opacity: 0 }}
                    >
                      Sending...
                    </motion.span>
                  ) : status === 'success' ? (
                    <motion.div 
                      key="success" 
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      You're In! <FaCheck />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="idle" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      Subscribe <FaArrowRight />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </form>
        </motion.div>

      </div>

      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>
    </section>
  );
};

export default Promo;