import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-brand-900' : 'text-brand-900 lg:text-white'}`}>
              Master Mindz<span className="text-brand-500">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium hover:text-brand-500 transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#enroll" 
              onClick={(e) => handleNavClick(e, '#enroll')}
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              Book Demo <ChevronRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100">
          <div className="flex flex-col p-4 gap-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 font-medium hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#enroll"
              onClick={(e) => handleNavClick(e, '#enroll')}
              className="bg-brand-600 text-white text-center py-3 rounded-lg font-semibold"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;