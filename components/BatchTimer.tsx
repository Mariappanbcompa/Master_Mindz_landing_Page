import React, { useState, useEffect } from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

const BatchTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      
      // Set target to next Sunday
      // Sunday is 0.
      // If today is Sunday (0), daysUntilSunday is 0.
      let daysUntilSunday = (7 - now.getDay()) % 7;
      
      target.setDate(now.getDate() + daysUntilSunday);
      // Set workshop time to 12:00 PM on Sunday
      target.setHours(12, 0, 0, 0);

      // If today is Sunday and it's already past 12:00 PM, target NEXT Sunday
      if (now.getTime() > target.getTime()) {
        target.setDate(target.getDate() + 7);
      }

      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#1D6F42] py-10 border-t border-white/10 relative overflow-hidden shadow-inner">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-50%] right-[-10%] w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-white/90 font-semibold mb-2 bg-black/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                <Calendar className="w-4 h-4" />
                <span>Upcoming Live Workshop</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Next Master Class Starts In:
            </h3>
            <p className="text-green-100 mt-1">Don't miss the chance to automate your workflow this week.</p>
          </div>

          {/* Timer Digits */}
          <div className="flex gap-3 sm:gap-6">
             {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds }
             ].map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg">
                        <span className="text-2xl sm:text-4xl font-bold text-white font-mono">
                            {String(item.value).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-green-100 mt-2 uppercase tracking-wider">
                        {item.label}
                    </span>
                 </div>
             ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={(e) => handleScroll(e, 'enroll')}
            className="bg-white text-[#1D6F42] hover:bg-green-50 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 group whitespace-nowrap"
          >
            Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default BatchTimer;