import React from 'react';
import { motion } from 'motion/react';

const Tickets = () => {
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
      className="py-32 px-4 md:px-20 bg-sand/10 text-ink overflow-hidden"
    >
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }} 
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="pb-24 px-4 text-center"
      >
        <span className="font-sans text-xs uppercase tracking-[0.4em] mb-4 block text-terra opacity-60">
          Secure Your Spot
        </span>
        
        <h2 className="font-serif text-4xl md:text-6xl text-ink">
          Get Tickets {" "}
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="italic text-sand inline-block"
          >
             Now !
          </motion.span>
        </h2>
      </motion.div>
      
      <div className="flex flex-col w-full border-t border-ink/10 max-w-7xl mx-auto">
        {tickets.map((ticket, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover="hover"
            className="group relative w-full h-[170px] hover:h-[380px] border-b border-ink/10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-ink z-0"
              initial={{ y: "100%" }}
              variants={{ hover: { y: 0 } }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            />

            <div className="relative z-10 flex flex-col h-full justify-between px-6 md:px-10 py-8 md:py-10">
              
              <div className="flex w-full justify-between items-start md:items-center">
                <div className="flex flex-col gap-1">
                  <motion.span 
                    variants={{ initial: { color: "#2C2825" }, hover: { color: "#FDFBF7", opacity: 0.6 } }}
                    className="font-sans text-[10px] md:text-xs uppercase tracking-widest opacity-60"
                  >
                    {ticket.sub}
                  </motion.span>
                  <motion.h3 
                    variants={{ 
                      initial: { color: "#2C2825", skewX: 0 }, 
                      hover: { color: "#FDFBF7", skewX: -12, x: 10 } 
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="font-serif text-4xl md:text-6xl leading-none pb-2 origin-left"
                  >
                    {ticket.name}
                  </motion.h3>
                </div>
                <div className="text-right">
                  <motion.span 
                    variants={{ initial: { color: "#2C2825" }, hover: { color: "#FDFBF7" } }}
                    className="block font-serif text-3xl md:text-5xl italic tracking-tight"
                  >
                    {ticket.price}
                  </motion.span>
                  <motion.span 
                    variants={{ initial: { color: "#2C2825" }, hover: { color: "#FDFBF7", opacity: 0.5 } }}
                    className="text-[10px] uppercase tracking-widest block mt-1"
                  >
                    / Person
                  </motion.span>
                </div>
              </div>

              <motion.div 
                variants={{ 
                  initial: { opacity: 0, y: 30 },
                  hover: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-paper/20 pt-8"
              >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 w-full md:w-3/4">
                  {ticket.perks.map((perk, j) => (
                    <li key={j} className="flex items-center gap-3 font-sans text-xs md:text-sm uppercase tracking-wide text-paper opacity-90">
                      <span className="w-1.5 h-1.5 rounded-full bg-terra flex-shrink-0"></span>
                      {perk}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full md:w-auto px-8 py-4 border border-paper bg-transparent uppercase text-xs font-bold tracking-widest text-paper hover:bg-paper hover:text-ink transition-all whitespace-nowrap cursor-pointer">
                  Purchase
                </button>
              </motion.div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tickets;