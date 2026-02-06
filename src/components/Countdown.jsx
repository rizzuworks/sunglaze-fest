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
    <div className="flex flex-col items-center mx-2 md:mx-4 group cursor-default">
      <span className="font-serif italic text-6xl md:text-9xl text-ink font-light group-hover:text-terra transition-colors duration-500 leading-none">
        {value}
      </span>
      <span className="mt-4 font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-40 text-ink">
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <div className="flex flex-col justify-start h-full pt-2 md:pt-4"> 
      <span className="font-serif italic text-4xl md:text-8xl text-ink/20 select-none">
        :
      </span>
    </div>
  );

  return (
    <section 
      id="countdown"
      className="w-full bg-paper py-32 flex flex-col items-center justify-center border-y border-ink/5"
    >
       
      <div className="pb-32 px-4 text-center">
        <span className="font-sans text-xs uppercase tracking-[0.4em] opacity-60 mb-4 block text-terra animate-pulse">Counting Down</span>
        
        <h2 className="font-serif text-4xl md:text-6xl text-ink">
          A <span className="italic text-sand">Daydream</span> Awaits
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-2 md:gap-4">
        
        <TimeUnit value={timeLeft.days} label="Days" />
        
        <Separator />
        
        <TimeUnit value={timeLeft.hours} label="Hours" />
        
        <Separator />
        
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        
        <Separator />
        
        <TimeUnit value={timeLeft.seconds} label="Seconds" />

      </div>

    </section>
  );
};

export default Countdown;