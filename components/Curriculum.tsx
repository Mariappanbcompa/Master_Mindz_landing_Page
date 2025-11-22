import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, FileSpreadsheet, Clock } from 'lucide-react';
import { EXCEL_MODULES, VBA_MODULES } from '../constants';

const Curriculum: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('Excel-0');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="curriculum" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Comprehensive Syllabus</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Zero to Hero in Excel & VBA</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">A structured learning path designed to take you from basic data entry to building complex automation systems over 10 weeks.</p>
        </div>

        <div className="space-y-10">
          {/* Excel Section */}
          <div className="bg-white rounded-2xl p-1 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8 px-4 pt-4 sm:px-0 sm:pt-0">
                <div className="p-3 bg-green-100 rounded-xl">
                    <FileSpreadsheet className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">Phase 1: Excel Mastery</h4>
                  <p className="text-slate-500">Advanced Analytics & Reporting</p>
                </div>
            </div>
            <div className="space-y-4">
              {EXCEL_MODULES.map((module, idx) => {
                const id = `Excel-${idx}`;
                const isOpen = openSection === id;
                return (
                  <div key={idx} className={`rounded-xl border transition-all duration-200 ${isOpen ? 'border-brand-500 bg-slate-50/50 shadow-sm' : 'border-slate-200 hover:border-brand-200 bg-white'}`}>
                    <button 
                      onClick={() => toggleSection(id)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="font-bold text-lg text-slate-800">{module.title}</span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                          <Clock className="w-3 h-3" /> {module.duration}
                        </span>
                      </div>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-brand-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-6 animate-in slide-in-from-top-2 duration-200 border-t border-slate-100 mt-1 pt-4">
                        <p className="text-sm text-slate-500 italic mb-4">{module.description}</p>
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                          {module.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* VBA Section */}
          <div className="bg-white rounded-2xl p-1 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            {/* Decorative Background for VBA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-8 px-4 pt-4 sm:px-0 sm:pt-0 relative z-10">
                <div className="p-3 bg-blue-100 rounded-xl">
                    <Code className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">Phase 2: VBA Automation</h4>
                  <p className="text-slate-500">Scripting & Application Development</p>
                </div>
            </div>
            <div className="space-y-4 relative z-10">
              {VBA_MODULES.map((module, idx) => {
                const id = `VBA-${idx}`;
                const isOpen = openSection === id;
                return (
                  <div key={idx} className={`rounded-xl border transition-all duration-200 ${isOpen ? 'border-blue-500 bg-slate-50/50 shadow-sm' : 'border-slate-200 hover:border-blue-200 bg-white'}`}>
                    <button 
                      onClick={() => toggleSection(id)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="font-bold text-lg text-slate-800">{module.title}</span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                          <Clock className="w-3 h-3" /> {module.duration}
                        </span>
                      </div>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-6 animate-in slide-in-from-top-2 duration-200 border-t border-slate-100 mt-1 pt-4">
                        <p className="text-sm text-slate-500 italic mb-4">{module.description}</p>
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                          {module.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
            <a 
              href="#enroll" 
              onClick={(e) => handleScroll(e, 'enroll')}
              className="inline-flex items-center gap-2 bg-[#1D6F42] hover:bg-[#14532d] text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
            >
                <FileSpreadsheet className="w-5 h-5" />
                Download Detailed PDF Syllabus
            </a>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;