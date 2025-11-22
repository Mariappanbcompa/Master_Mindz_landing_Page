import React from 'react';
import { FEATURES, WHY_JOIN_POINTS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Why Master Mindz?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Complete Toolkit for Data Professionals</h3>
          <p className="text-lg text-slate-600">We don't just teach formulas; we teach you how to build solutions that solve real business problems.</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-brand-100 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
                  <Icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Key Benefits Side-by-Side */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
                 <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-64 h-64">
                    <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,34.4C59.4,45.7,47.9,54.6,35.7,61.8C23.5,69,10.6,74.5,-1.3,76.7C-13.2,78.9,-25.4,77.8,-36.3,71.3C-47.2,64.8,-56.8,52.9,-64.5,40.1C-72.2,27.3,-78,13.6,-78.6,-0.3C-79.2,-14.2,-74.6,-28.3,-65.7,-39.9C-56.8,-51.5,-43.6,-60.6,-29.9,-68.1C-16.2,-75.6,-2,-81.5,13.1,-81.1C28.2,-80.7,43.3,-74,55.9,-65.2Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-6">Unlock Your Potential with<br/>Real Automation Skills</h3>
                    <ul className="space-y-4">
                        {WHY_JOIN_POINTS.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300">
                                <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                    <div className="text-center">
                        <span className="text-5xl font-extrabold text-white block mb-2">80%</span>
                        <span className="text-slate-400 uppercase tracking-widest text-sm font-semibold">Salary Hike Potential</span>
                    </div>
                    <div className="my-6 border-t border-slate-700"></div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                         <div>
                            <span className="text-2xl font-bold text-white block mb-1">500+</span>
                            <span className="text-xs text-slate-500 uppercase">Students</span>
                         </div>
                         <div>
                            <span className="text-2xl font-bold text-white block mb-1">4.9/5</span>
                            <span className="text-xs text-slate-500 uppercase">Rating</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
