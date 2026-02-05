import React from 'react';

const Schedule = () => {
  const sessions = [
    {
      id: "01",
      title: "Saturday",
      date: "July 25",
      bg: "bg-paper", 
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
      bg: "bg-smooth", 
      text: "text-paper",
      border: "border-paper/20",
      acts: [
        { time: "17:00 — 18:00", genre: "Indie Jazz", act: "Wave To Earth" },
        { time: "18:30 — 19:30", genre: "Hip Hop", act: "Rich Brian" },
        { time: "20:00 — 21:00", genre: "R&B / Soul", act: "Niki" },
      ]
    },
  ];

  return (
    <section 
      id="schedule" 
      className="relative w-full z-0 bg-paper"
    >
      
      <div className="py-24 px-4 text-center border-b border-ink/10">
        <span className="font-sans text-xs uppercase tracking-[0.4em] opacity-40 mb-4 block text-smooth">Don't Miss a Beat</span>
        <h2 className="font-serif text-4xl md:text-6xl text-ink">The Schedule</h2>
      </div>

      {sessions.map((session, i) => (
        <div 
          key={i} 
          className={`relative min-h-[80vh] w-full flex flex-col ${session.bg} ${session.text}`}
        >
          
          <div className={`sticky top-0 z-20 w-full border-b ${session.border} backdrop-blur-md bg-opacity-95 ${session.bg}`}>
            <div className="max-w-7xl mx-auto w-full px-6 py-6 md:px-20 flex justify-between items-end">
              <div>
                <span className="block font-sans text-xs uppercase tracking-[0.3em] opacity-60 mb-2">Day {session.id}</span>
                <h2 className="font-serif text-4xl md:text-6xl italic">{session.title}</h2>
              </div>
              <div className="font-sans text-xl font-bold tracking-widest hidden md:block opacity-60">
                {session.date}
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-20 py-10">
                
              <div className={`grid grid-cols-12 border-b px-4 ${session.border} pb-4 text-xs font-sans uppercase tracking-[0.2em] opacity-50 mb-4`}>
                <div className="col-span-3 md:col-span-3">Time Set</div>
                <div className="col-span-3 md:col-span-2">Genre</div>
                <div className="col-span-6 md:col-span-7">Artist</div>
              </div>

              {session.acts.map((item, j) => (
                <div 
                  key={j} 
                  className={`group grid grid-cols-12 px-6 py-12 border-b ${session.border} hover:pl-6 transition-all duration-500 items-center cursor-default hover:cursor-pointer`}
                >
                    
                  <div className="col-span-3 md:col-span-3 font-sans font-bold text-xs md:text-lg opacity-80 whitespace-nowrap">
                    {item.time}
                  </div>
                    
                  <div className="col-span-3 md:col-span-2 font-sans font-medium text-xs md:text-sm uppercase tracking-widest opacity-60">
                    {item.genre}
                  </div>
                    
                  <div className="col-span-6 md:col-span-7 font-serif text-3xl md:text-7xl leading-none group-hover:italic group-hover:translate-x-2 transition-all duration-500">
                    {item.act}
                  </div>

                </div>
              ))}
              
              <div className="mt-16 text-center opacity-20">
                <span className="text-[80px] leading-none font-serif">✱</span>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Schedule;