import React from 'react';

const Tickets = () => {
  const tickets = [
    { 
      name: "1 Day Pass", 
      sub: "Saturday OR Sunday",
      price: "$95", 
      bg: "hover:bg-ink", 
      text: "group-hover:text-paper", 
      perks: [
        "General Admission (Sat or Sun)", 
        "Access to Art & Chill Zones", 
        "Free Water Refill Stations", 
        "Standard Food Court Access"
      ]
    },
    { 
      name: "2 Day Pass", 
      sub: "Full Weekend Access",
      price: "$175", 
      bg: "hover:bg-ink", 
      text: "group-hover:text-paper",
      perks: [
        "Entry for both days (Sat & Sun)", 
        "Fast Track Lane (Skip the queue)", 
        "Exclusive Cloth Wristband", 
        "Phone Charging Station Access", 
        "Eco-friendly Merch Tote"
      ]
    },
    { 
      name: "VIP Experience", 
      sub: "Ultimate Weekend",
      price: "$450", 
      bg: "hover:bg-ink", 
      text: "group-hover:text-paper",
      perks: [
        "2-Day VIP Access", 
        "Premium Viewing Area (Front Row)", 
        "VIP Lounge & Private Bar", 
        "Luxury AC Restrooms", 
        "Complimentary Drinks (3 vouchers)", 
        "Backstage Tour Lottery"
      ]
    },
  ];

  return (
    <section 
      id="tickets" 
      className="py-32 px-4 md:px-20 bg-paper text-ink"
    >
      
      <div className="pb-24 px-4 text-center">
        <span className="font-sans text-xs uppercase tracking-[0.4em] opacity-40 mb-4 block text-smooth animate-pulse">
          Secure Your Spot
        </span>
        <h2 className="font-serif text-5xl md:text-7xl text-ink leading-tight">
          Get <span className="italic text-smooth">Access.</span>
        </h2>
        <div className="w-[1px] h-16 bg-ink/20 mx-auto mt-8"></div>
      </div>
      
      <div className="flex flex-col w-full border-t border-ink/20 max-w-7xl mx-auto">
        {tickets.map((ticket, i) => (
          <div 
            key={i} 
            className={`group relative w-full h-[180px] hover:h-[380px] border-b border-ink/20 transition-all duration-700 ease-[0.22,1,0.36,1] overflow-hidden cursor-pointer ${ticket.bg}`}
          >
            <div className={`relative z-10 flex flex-col h-full justify-between px-6 md:px-10 py-8 md:py-10 transition-colors duration-500 ${ticket.text}`}>
               
              <div className="flex w-full justify-between items-start md:items-center">
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest opacity-60">
                    {ticket.sub}
                  </span>
                  <h3 className="font-serif text-4xl md:text-6xl group-hover:italic transition-all duration-500 leading-none pb-2">
                    {ticket.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="block font-serif text-3xl md:text-5xl italic tracking-tight">
                    {ticket.price}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest opacity-50 block mt-1">
                    / Person
                  </span>
                </div>
              </div>

              <div className="opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-current/20 pt-8">
                    
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 w-full md:w-3/4">
                    {ticket.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-3 font-sans text-xs md:text-sm uppercase tracking-wide opacity-90">
                        <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0"></span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full md:w-auto px-8 py-4 border border-current bg-transparent uppercase text-xs font-bold tracking-widest hover:bg-paper hover:text-ink transition-all whitespace-nowrap cursor-pointer">
                    Purchase
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tickets;