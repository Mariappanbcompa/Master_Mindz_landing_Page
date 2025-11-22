import React from 'react';
import { COMPANY_NAME } from '../constants';
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
        {/* Main Footer CTA */}
        <div id="enroll" className="bg-[#1D6F42] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Success?</h2>
                <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">Join the Master Mindz community today. Seats are filling fast for the upcoming batch.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 bg-white text-[#1D6F42] rounded-xl font-bold text-lg shadow-xl hover:bg-green-50 hover:scale-105 transition-all">
                        Enroll Now - $199
                    </button>
                    <button className="px-8 py-4 bg-[#14532d] text-white border border-green-400/50 rounded-xl font-bold text-lg hover:bg-[#0f3f22] transition-all">
                        Schedule Free Consultation
                    </button>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* About */}
                <div>
                    <h3 className="text-white text-xl font-bold mb-6">{COMPANY_NAME}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                        We bridge the gap between education and industry demands. Our mission is to empower professionals with the practical tools they need to thrive in the data-driven era.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#curriculum" onClick={(e) => handleScroll(e, 'curriculum')} className="hover:text-white transition-colors">Syllabus</a></li>
                        <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-white transition-colors">Projects</a></li>
                        <li><a href="#enroll" onClick={(e) => handleScroll(e, 'enroll')} className="hover:text-white transition-colors">Pricing</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                            <span>123 Tech Park, Innovation Street, Silicon Valley, CA</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                            <span>admissions@mastermindz.com</span>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Follow Us</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;