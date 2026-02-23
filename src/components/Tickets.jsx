import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Tickets = () => {
  const [activeId, setActiveId] = useState(null);

  const tickets = [
    { 
      name: "1 Day Pass", 
      sub: "Saturday OR Sunday",
      price: "$95", 
      perks: ["General Admission (Sat or Sun)", "Access to Art & Chill Zones", "Free Water Refill Stations", "Standard Food Court Access"]
    },
    { 
      name: "2 Day Pass", 
      sub: "Full Weekend Access",
      price: "$175", 
      perks: ["Entry for both days (Sat & Sun)", "Fast Track Lane (Skip the queue)", "Exclusive Cloth Wristband", "Phone Charging Station Access", "Eco-friendly Merch Tote"]
    },
    { 
      name: "VIP Experience", 
      sub: "Ultimate Weekend",
      price: "$450", 
      perks: ["2-Day VIP Access", "Premium Viewing Area (Front Row)", "VIP Lounge & Private Bar", "Luxury AC Restrooms", "Complimentary Drinks (3 vouchers)", "Backstage Tour Lottery"]
    },
  ];

  return (
    <section 
      id="tickets" 
      className="py-24 md:py-32 px-4 md:px-20 bg-sand/10 text-ink"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="pb-16 md:pb-24 px-4 text-center"
      >
        <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 block text-terra opacity-60">
          Secure Your Spot
        </span>
        
        <h2 className="font-serif text-3xl md:text-5xl 2xl:text-6xl text-ink">
          Get Your Tickets&nbsp;
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="italic text-sand inline-block"
          >
            Now!
          </motion.span>
        </h2>
      </motion.div>
      
      <div className="flex flex-col w-full border-t border-ink/10 max-w-7xl mx-auto">
        {tickets.map((ticket, i) => {
          const isOpen = activeId === i;
          
          return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              onClick={() => setActiveId(isOpen ? null : i)}
              onMouseEnter={() => window.innerWidth >= 768 && setActiveId(i)}
              onMouseLeave={() => window.innerWidth >= 768 && setActiveId(null)}
              className="relative w-full border-b border-ink/10 cursor-pointer overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-ink z-0"
                animate={{ y: isOpen ? "0%" : "100%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="relative z-10 px-6 md:px-10 py-10 md:py-12">
                <div className="flex w-full justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <motion.span 
                      animate={{ color: isOpen ? "#FDFBF7" : "#2C2825", opacity: isOpen ? 0.6 : 1 }}
                      className="font-sans text-[10px] md:text-xs uppercase tracking-widest"
                    >
                      {ticket.sub}
                    </motion.span>
                    <motion.h3 
                      animate={{ 
                        color: isOpen ? "#FDFBF7" : "#2C2825", 
                        skewX: isOpen ? -10 : 0,
                        x: isOpen ? 10 : 0 
                      }}
                      className="font-serif text-3xl md:text-6xl 2xl:text-7xl leading-none origin-left"
                    >
                      {ticket.name}
                    </motion.h3>
                  </div>
                  
                  <div className="text-right">
                    <motion.span 
                      animate={{ color: isOpen ? "#FDFBF7" : "#2C2825" }}
                      className="block font-serif text-3xl md:text-5xl italic tracking-tight"
                    >
                      {ticket.price}
                    </motion.span>
                    <motion.span 
                      animate={{ color: isOpen ? "#FDFBF7" : "#2C2825", opacity: isOpen ? 0.5 : 1 }}
                      className="text-[9px] md:text-[10px] uppercase tracking-widest block mt-1"
                    >
                      / Person
                    </motion.span>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-end gap-10 border-t border-paper/20 mt-8 pt-8">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 w-full md:w-3/4">
                          {ticket.perks.map((perk, j) => (
                            <li key={j} className="flex items-center gap-3 font-sans text-[10px] md:text-sm uppercase tracking-wide text-paper opacity-90">
                              <span className="w-1.5 h-1.5 rounded-full bg-terra flex-shrink-0"></span>
                              {perk}
                            </li>
                          ))}
                        </ul>
                        
                        <button className="w-full md:w-auto px-10 py-4 border border-paper bg-transparent uppercase text-[10px] md:text-xs font-bold tracking-widest text-paper hover:bg-paper hover:text-ink transition-all cursor-pointer whitespace-nowrap">
                          Purchase
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Tickets;