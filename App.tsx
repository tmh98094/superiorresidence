import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { LocationMap } from './components/LocationMap';
import { Masterplan } from './components/Masterplan';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { LifestyleHub } from './components/LifestyleHub';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-forest-black overflow-x-hidden selection:bg-gold-accent selection:text-white">
        <Navbar />
        <Hero />
        <Concept />
        <LocationMap />
        <Masterplan />
        <Features />
        <Services />
        <LifestyleHub />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;