import React from 'react';
import { motion } from 'motion/react';

const Schedule = () => {
  const sessions = [
    {
      id: "01",
      title: "Saturday",
      date: "July 25",
      bg: "bg-sand/10",
      headerBg: "bg-sand/10", 
      text: "text-ink",
      border: "border-ink/10",
      acts: [
        { time: "16:30 — 17:30", genre: "Bedroom Pop", act: "Yung Kai" },
        { time: "18:00 — 19:00", genre: "Electropop", act: "Lauv" },
        { time: "19:30 — 20:30", genre: "Dream Pop", act: "Lana Del Rey" },
      ]
    },
    {
      id: "02",
      title: "Sunday",
      date: "July 26",
      bg: "bg-ink",
      headerBg: "bg-ink/75", 
      text: "text-paper",
      border: "border-paper/10", 
      acts: [
        { time: "17:00 — 18:00", genre: "Indie Jazz", act: "Wave To Earth" },
        { time: "18:30 — 19:30", genre: "Hip Hop", act: "Rich Brian" },
        { time: "20:00 — 21:00", genre: "R&B / Soul", act: "Niki" },
      ]
    },
  ];

  return (
    <section id="schedule" className="relative w-full z-0 bg-paper overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 px-4 text-center border-b border-ink/10"
      >
        <span className="font-sans text-xs uppercase tracking-[0.4em] opacity-60 mb-4 block text-terra">
          Don't Miss a Beat
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-ink">The Schedule</h2>
      </motion.div>

      {sessions.map((session, i) => (
        <div 
          key={i} 
          className={`relative min-h-[80vh] w-full flex flex-col ${session.bg} ${session.text}`}
        >
          <div className={`sticky top-0 z-20 w-full border-b ${session.border} backdrop-blur-md ${session.headerBg}`}>
            <div className="max-w-7xl mx-auto w-full px-6 py-6 md:px-20 flex justify-between items-end">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block font-sans text-xs uppercase tracking-[0.3em] opacity-60 mb-2">Day {session.id}</span>
                <h2 className="font-serif text-4xl md:text-6xl italic">{session.title}</h2>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 0.6, x: 0 }}
                viewport={{ once: true, amount: 1 }}
                className="font-sans text-xl font-bold tracking-widest hidden md:block"
              >
                {session.date}
              </motion.div>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-20 py-10">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                className={`grid grid-cols-12 border-b px-4 ${session.border} pb-4 text-xs font-sans uppercase tracking-[0.2em] mb-4`}
              >
                <div className="col-span-3">Time Set</div>
                <div className="col-span-3 md:col-span-2">Genre</div>
                <div className="col-span-6 md:col-span-7">Artist</div>
              </motion.div>

              {session.acts.map((item, j) => (
                <motion.div 
                  key={j} 
                  initial={{ opacity: 0, y: 50, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1
                  }}
                  whileHover="hover"
                  className={`group grid grid-cols-12 px-6 py-12 border-b ${session.border} relative items-center cursor-pointer overflow-hidden origin-center`}
                >
                  <motion.div 
                    className="absolute inset-0 z-0"
                    initial={{ scaleY: 0 }}
                    variants={{ hover: { scaleY: 1 } }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originY: "bottom" }}
                  />

                  <motion.div 
                    className="col-span-3 font-sans font-bold text-xs md:text-lg opacity-80 z-10"
                    variants={{ hover: { scale: 1.05 } }}
                  >
                    {item.time}
                  </motion.div>

                  <motion.div 
                    className="col-span-3 md:col-span-2 font-sans font-medium text-xs md:text-sm uppercase tracking-widest opacity-60 z-10"
                    variants={{ hover: { scale: 1.05 } }}
                  >
                    {item.genre}
                  </motion.div>
                  
                  <motion.div 
                    className="col-span-6 md:col-span-7 font-serif text-3xl md:text-7xl leading-none z-10 origin-left"
                    initial={{ scale: 0.9 }}
                    variants={{ 
                      hover: { 
                        x: 30, 
                        scale: 1.15,
                        skewX: -12, 
                        color: "var(--color-terra)" 
                      } 
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  >
                    {item.act}
                  </motion.div>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.2, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                className="mt-16 text-center"
              >
                <span className="text-[80px] leading-none font-serif">✱</span>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Schedule;