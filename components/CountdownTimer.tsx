import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-brand-900/50 border border-brand-500/30 backdrop-blur-md px-6 py-3 rounded-xl mb-8 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-center gap-2 text-brand-300 font-medium">
        <Clock className="w-5 h-5 animate-pulse" />
        <span className="uppercase tracking-wider text-xs sm:text-sm">Next Master Class Starts In:</span>
      </div>
      <div className="flex gap-3 text-white font-mono font-bold text-lg sm:text-xl tracking-widest">
        <div className="flex flex-col items-center">
            <span>{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-[10px] font-sans font-normal text-slate-400 uppercase">Days</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
            <span>{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[10px] font-sans font-normal text-slate-400 uppercase">Hrs</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[10px] font-sans font-normal text-slate-400 uppercase">Mins</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
            <span className="text-brand-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-[10px] font-sans font-normal text-slate-400 uppercase">Secs</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;