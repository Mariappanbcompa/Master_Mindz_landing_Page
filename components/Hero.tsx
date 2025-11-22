import React from 'react';
import { Check, PlayCircle, FileSpreadsheet, User, Briefcase, TrendingUp, Award, GraduationCap } from 'lucide-react';
import { HERO_CONTENT, TARGET_AUDIENCE } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to get icon for audience
  const getAudienceIcon = (index: number) => {
    const icons = [GraduationCap, User, TrendingUp, Briefcase, FileSpreadsheet, Award];
    const Icon = icons[index % icons.length];
    return <Icon className="w-6 h-6" />;
  };

  return (
    <section id="hero" className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 mix-blend-multiply opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 mix-blend-multiply opacity-60"></div>
        {/* Subtle Excel Green Glow */}
        <div className="absolute top-1/2 left-1/2 w-full h-full max-w-3xl bg-green-900/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-md shadow-lg hover:bg-white/15 transition-colors cursor-default">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
              Admissions Open for 2025
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {HERO_CONTENT.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">
                {HERO_CONTENT.subtitle}
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              {HERO_CONTENT.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#enroll" 
                onClick={(e) => handleScroll(e, 'enroll')}
                className="px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-xl shadow-lg shadow-brand-900/20 transition-all hover:-translate-y-1 text-center w-full sm:w-auto"
              >
                Enroll Now
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://picsum.photos/id/1005/32/32" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://picsum.photos/id/1011/32/32" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://picsum.photos/id/1027/32/32" alt="User" />
              </div>
              <p>{HERO_CONTENT.benefitLine}</p>
            </div>
          </div>

          {/* Right Content - Interactive Card Graphic */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl bg-slate-800 border border-slate-700 p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
                {/* Mockup UI */}
                <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-auto text-slate-500 text-xs font-mono">VBA_Automation_Script.xlsm</div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                    <div className="flex">
                        <span className="text-purple-400 w-8">01</span>
                        <span className="text-brand-400">Sub</span> <span className="text-yellow-300 ml-2">GenerateWeeklyReports()</span>
                    </div>
                    <div className="flex">
                        <span className="text-purple-400 w-8">02</span>
                        <span className="text-slate-400 pl-4">' Automate data cleanup</span>
                    </div>
                    <div className="flex">
                        <span className="text-purple-400 w-8">03</span>
                        <span className="text-blue-400 pl-4">For Each</span> <span className="text-white mx-2">ws</span> <span className="text-blue-400">In</span> <span className="text-white ml-2">Worksheets</span>
                    </div>
                    <div className="flex">
                        <span className="text-purple-400 w-8">04</span>
                        <span className="text-white pl-8">ws.Range("A1").AutoFormat</span>
                    </div>
                    <div className="flex">
                        <span className="text-purple-400 w-8">05</span>
                        <span className="text-blue-400 pl-4">Next</span> <span className="text-white ml-2">ws</span>
                    </div>
                    <div className="flex">
                        <span className="text-purple-400 w-8">06</span>
                        <span className="text-brand-400">End Sub</span>
                    </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-bounce-slow">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                            <Check className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold">Efficiency</p>
                            <p className="text-lg font-bold text-slate-900">Increased 300%</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Enhanced Target Audience Section */}
        <div className="mt-24 pt-12 border-t border-slate-800">
            <div className="text-center mb-10">
                 <p className="text-white font-bold text-lg uppercase tracking-[0.2em] mb-2">Who Is This Course Perfect For?</p>
                 <h3 className="text-2xl text-slate-300 font-semibold">Designed for ambitious professionals</h3>
            </div>
           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {TARGET_AUDIENCE.map((audience, idx) => (
                    <div key={idx} className="group flex items-center gap-4 bg-slate-800/50 border border-slate-700 hover:border-brand-500 p-4 rounded-xl transition-all duration-300 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/20 cursor-default">
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-900/50 group-hover:scale-105 transition-transform duration-300">
                             {getAudienceIcon(idx)}
                        </div>
                        <div>
                            <span className="text-white font-bold text-lg block">
                                {audience}
                            </span>
                            <span className="text-xs text-slate-400 group-hover:text-brand-300 transition-colors">Boost your career</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;