import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { AnimationProvider } from './AnimationContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Prelude } from './components/Prelude';
import { LushGreens } from './components/LushGreens';
import { Unveiling } from './components/Unveiling';
import { SanctuaryCards } from './components/SanctuaryCards';
import { Location } from './components/Location';
import { GoogleMapEmbed } from './components/GoogleMapEmbed';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Floaters } from './components/Floaters';

function App() {
  return (
    <LanguageProvider>
      <AnimationProvider>
        <div className="min-h-screen bg-forest-black overflow-x-hidden selection:bg-gold-accent selection:text-white">
          <Navbar />
          <Hero />
          <Prelude />
          <LushGreens />
          <Unveiling />
          <SanctuaryCards />
          <Location />
          <GoogleMapEmbed />
          <Contact />
          <Footer />
          <Floaters />
        </div>
      </AnimationProvider>
    </LanguageProvider>
  );
}

export default App;
