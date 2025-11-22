import React from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Portfolio Ready</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Build Real-World Solutions</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Theory isn't enough. In this course, you will build 4+ industrial-grade projects that you can showcase on your resume.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
                <div key={idx} className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-brand-200">
                    <div className="absolute top-0 right-0 bg-slate-50 p-3 rounded-bl-2xl rounded-tr-2xl border-b border-l border-slate-100 group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors">
                        <FolderGit2 className="w-6 h-6 text-slate-400 group-hover:text-brand-600" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-slate-900 mb-3 pr-10">{project.title}</h4>
                    <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
