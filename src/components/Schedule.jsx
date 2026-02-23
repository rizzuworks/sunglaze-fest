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
        { time: "16:30 — 17:30", act: "Yung Kai" },
        { time: "18:00 — 19:00", act: "Lauv" },
        { time: "19:30 — 20:30", act: "Lana Del Rey" },
      ]
    },
    {
      id: "02",
      title: "Sunday",
      date: "July 26",
      bg: "bg-ink",
      headerBg: "bg-ink/95", 
      text: "text-paper",
      border: "border-paper/10", 
      acts: [
        { time: "17:00 — 18:00", act: "Wave To Earth" },
        { time: "18:30 — 19:30", act: "Rich Brian" },
        { time: "20:00 — 21:00", act: "Niki" },
      ]
    },
  ];

  return (
    <section id="schedule" className="relative w-full z-0 bg-paper">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="py-16 2xl:py-24 px-4 text-center border-b border-ink/10"
      >
        <span className="font-sans text-xs uppercase tracking-[0.4em] opacity-60 mb-4 block text-terra">
          Don't Miss a Beat
        </span>
        <h2 className="font-serif text-4xl md:text-5xl 2xl:text-6xl text-ink">The Schedule</h2>
      </motion.div>

      <div className="relative">
        {sessions.map((session, i) => (
          <div 
            key={i} 
            className={`relative w-full flex flex-col ${session.bg} ${session.text}`}
          >
            <div className={`sticky top-0 z-40 w-full border-b ${session.border} backdrop-blur-md ${session.headerBg}`}>
              <div className="max-w-7xl mx-auto w-full px-6 py-4 md:py-6 md:px-20 flex justify-between items-end">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <span className="block font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60 mb-1">Day {session.id}</span>
                  <h2 className="font-serif text-2xl md:text-5xl 2xl:text-6xl italic leading-none">{session.title}</h2>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 0.6, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="font-sans text-xs md:text-lg 2xl:text-xl font-bold tracking-widest"
                >
                  {session.date}
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 w-full flex items-center">
              <div className="max-w-7xl mx-auto w-full px-6 md:px-20 py-10 md:py-20">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className={`grid grid-cols-12 border-b px-2 md:px-4 ${session.border} pb-4 text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] mb-4`}
                >
                  <div className="col-span-4 md:col-span-3">Time Set</div>
                  <div className="col-span-8 md:col-span-9">Artist</div>
                </motion.div>

                {session.acts.map((item, j) => (
                  <motion.div 
                    key={j} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: j * 0.1
                    }}
                    whileHover="hover"
                    className={`group grid grid-cols-12 px-2 md:px-6 py-8 md:py-12 border-b ${session.border} relative items-center cursor-pointer overflow-hidden origin-center`}
                  >
                    <motion.div 
                      className="absolute inset-0 z-0"
                      initial={{ scaleY: 0 }}
                      variants={{ hover: { scaleY: 1 } }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originY: "bottom" }}
                    />

                    <motion.div 
                      className="col-span-4 md:col-span-3 font-sans font-bold text-[10px] md:text-lg opacity-80 z-10"
                      variants={{ hover: { x: 10 } }}
                    >
                      {item.time}
                    </motion.div>
                    
                    <motion.div 
                      className="col-span-8 md:col-span-9 font-serif text-3xl md:text-5xl 2xl:text-6xl leading-none z-10 origin-left italic"
                      variants={{ 
                        hover: { 
                          x: 20, 
                          skewX: -8, 
                          color: "#E07A5F" 
                        } 
                      }}
                      transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    >
                      {item.act}
                    </motion.div>
                  </motion.div>
                ))}
                
                <div className="mt-16 text-center opacity-20">
                  <span className="text-[50px] md:text-[80px] leading-none font-serif">✱</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;