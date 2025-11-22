import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AICounselor from './components/AICounselor';
import BatchTimer from './components/BatchTimer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <BatchTimer />
        <Features />
        <Curriculum />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
      <AICounselor />
    </div>
  );
};

export default App;