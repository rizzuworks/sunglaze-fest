import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const StaticSeparator = memo(({ delay }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.2 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: delay }}
    className="flex items-center justify-center h-[60px] md:h-[130px] select-none"
  > 
    <span className="font-serif italic text-4xl md:text-8xl text-ink leading-none translate-y-[-5%] md:translate-y-[-10%]">
      :
    </span>
  </motion.div>
));

const TimeUnit = memo(({ value, label, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col items-center mx-1 md:mx-4 group cursor-default"
  >
    <div className="relative overflow-hidden h-[60px] md:h-[130px] flex items-center justify-center min-w-[1.2ch] md:min-w-[1.5ch]">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="font-serif italic text-6xl md:text-9xl text-ink font-light group-hover:text-terra transition-colors duration-500 leading-none inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="mt-4 font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-40 text-ink">
      {label}
    </span>
  </motion.div>
));

const Countdown = () => {
  const targetDate = new Date("July 24, 2026 16:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: d < 10 ? `0${d}` : d.toString(),
          hours: h < 10 ? `0${h}` : h.toString(),
          minutes: m < 10 ? `0${m}` : m.toString(),
          seconds: s < 10 ? `0${s}` : s.toString()
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section 
      id="countdown"
      className="w-full bg-paper py-32 flex flex-col items-center justify-center border-y border-ink/5 overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }} 
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="pb-32 px-4 text-center"
      >
        <span className="font-sans text-xs uppercase tracking-[0.4em] mb-4 block text-terra opacity-60">
          Counting Down
        </span>
        
        <h2 className="font-serif text-4xl md:text-6xl text-ink">
          A <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="italic text-sand inline-block"
          >
            Daydream
          </motion.span> Awaits
        </h2>
      </motion.div>

      <div className="flex justify-center items-start gap-1 md:gap-2">
        <TimeUnit value={timeLeft.days} label="Days" delay={0.1} />
        <StaticSeparator delay={0.2} />
        
        <TimeUnit value={timeLeft.hours} label="Hours" delay={0.3} />
        <StaticSeparator delay={0.4} />
        
        <TimeUnit value={timeLeft.minutes} label="Minutes" delay={0.5} />
        <StaticSeparator delay={0.6} />
        
        <TimeUnit value={timeLeft.seconds} label="Seconds" delay={0.7} />
      </div>

    </section>
  );
};

export default Countdown;