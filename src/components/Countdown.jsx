import React, { useState, useEffect } from 'react';

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
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? `0${days}` : days,
          hours: hours < 10 ? `0${hours}` : hours,
          minutes: minutes < 10 ? `0${minutes}` : minutes,
          seconds: seconds < 10 ? `0${seconds}` : seconds
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center mx-4 md:mx-12 group cursor-default">
      <div className="relative">
        <span className="font-serif italic text-6xl md:text-9xl text-ink font-light group-hover:text-smooth transition-colors duration-500">
          {value}
        </span>
        <div className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 w-1 h-1 bg-ink opacity-20 rounded-full hidden md:block last:hidden"></div>
      </div>
      <span className="mt-4 font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-40">
        {label}
      </span>
    </div>
  );

  return (
    <section className="w-full bg-paper py-32 flex flex-col items-center justify-center border-y border-ink/5">
       
      <div className="pb-32 px-4 text-center">
        <span className="font-sans text-xs uppercase tracking-[0.4em] opacity-40 mb-4 block text-smooth">The wait begins</span>
        <h2 className="font-serif text-4xl md:text-6xl text-ink">A <span className="italic text-smooth">Daydream</span> Awaits</h2>
      </div>

      <div className="flex flex-wrap justify-center items-baseline">
        <TimeUnit 
          value={timeLeft.days} 
          label="Days" 
        />
        <span className="md:hidden font-serif text-4xl text-ink/20 px-2">:</span>
        <TimeUnit 
          value={timeLeft.hours} 
          label="Hours" 
        />
        <span className="md:hidden font-serif text-4xl text-ink/20 px-2">:</span>
        <TimeUnit 
          value={timeLeft.minutes} 
          label="Minutes" 
        />
        <span className="md:hidden font-serif text-4xl text-ink/20 px-2">:</span>
        <TimeUnit 
          value={timeLeft.seconds} 
          label="Seconds" 
        />
      </div>

    </section>
  );
};

export default Countdown;