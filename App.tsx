import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from './LanguageContext';
import { AnimationProvider, useAnimation } from './AnimationContext';
import { FontProvider } from './FontContext';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy load below-fold components for better initial load performance
const Prelude = lazy(() => import('./components/Prelude').then(m => ({ default: m.Prelude })));
const LushGreens = lazy(() => import('./components/LushGreens').then(m => ({ default: m.LushGreens })));
const Unveiling = lazy(() => import('./components/Unveiling').then(m => ({ default: m.Unveiling })));
const SanctuaryCards = lazy(() => import('./components/SanctuaryCards').then(m => ({ default: m.SanctuaryCards })));
const Location = lazy(() => import('./components/Location').then(m => ({ default: m.Location })));
const GoogleMapEmbed = lazy(() => import('./components/GoogleMapEmbed').then(m => ({ default: m.GoogleMapEmbed })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const Floaters = lazy(() => import('./components/Floaters').then(m => ({ default: m.Floaters })));
const MusicPlayer = lazy(() => import('./components/MusicPlayer').then(m => ({ default: m.MusicPlayer })));

// Simple loading fallback
const LazyFallback = () => <div className="min-h-[50vh] bg-forest-black" />;

const AppContent: React.FC = () => {
  const { state, setLoadingComplete } = useAnimation();

  // Scroll to top on mount/refresh
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {state.isLoading && <LoadingScreen onLoadComplete={setLoadingComplete} />}
      <div className="min-h-screen bg-forest-black overflow-x-hidden selection:bg-gold-accent selection:text-white">
        <Navbar />
        <Hero />
        <Suspense fallback={<LazyFallback />}>
          <Prelude />
          <LushGreens />
          <Unveiling />
          <SanctuaryCards />
          <Location />
          <GoogleMapEmbed />
          <Contact />
          <Footer />
          <Floaters />
          <MusicPlayer />
        </Suspense>
      </div>
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <FontProvider>
        <AnimationProvider>
          <AppContent />
        </AnimationProvider>
      </FontProvider>
    </LanguageProvider>
  );
}

export default App;
