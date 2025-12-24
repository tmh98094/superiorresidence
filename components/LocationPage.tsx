import React, { useState, useEffect } from 'react';
import { ArrowLeft, Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const LocationPage: React.FC = () => {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const homeUrl = language === 'cn' ? '/zh#home' : '/#home';

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openFullscreen = () => {
    setIsFullscreen(true);
    setZoom(1);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setZoom(1);
  };

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.5, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/20 via-teal-900/30 to-slate-800/40" style={{ backgroundColor: 'rgb(15, 23, 20)' }}>
      {/* Global Navbar */}
      <Navbar alwaysVisible />

      {/* Hero Section with Map Image */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-transparent via-slate-900/10 to-emerald-900/15">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          {/* Title */}
          <div className="text-center mb-8 md:mb-12">
            <p className={`text-gold-accent font-sans tracking-[0.3em] uppercase mb-4 ${language === 'cn' ? 'text-sm md:text-base' : 'text-xs'
              }`}>
              {language === 'cn' ? '战略位置' : 'Strategic Location'}
            </p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4">
              SUPERIOR RESIDENCES
            </h1>
            <p className="font-display text-xl md:text-2xl text-stone-400">
              Taman Indah Jaya, Ayer Hitam
            </p>
          </div>

          {/* Map Image */}
          <div
            className="relative rounded-lg overflow-hidden shadow-2xl cursor-zoom-in group"
            onClick={openFullscreen}
          >
            <img
              src="/images/detailedlocation.png"
              alt="Superior Residences Location Map"
              className="w-full max-h-[60vh] md:max-h-[70vh] object-contain mx-auto"
              style={{
                filter: 'brightness(1.2) contrast(0.8) saturate(1.05) hue-rotate(-5deg)',
                imageRendering: 'high-quality'
              }}
            />
            {/* Zoom hint overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="bg-black/60 text-white px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                <Maximize2 size={20} />
                {language === 'cn' ? '点击放大查看' : 'Click to zoom'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-900/15 via-teal-900/25 to-slate-800/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className={`text-gold-accent font-sans tracking-[0.3em] uppercase mb-6 ${language === 'cn' ? 'text-sm md:text-base' : 'text-xs'
            }`}>
            {language === 'cn' ? '理想居所' : 'Ideal Living'}
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-white mb-8 leading-relaxed text-justify">
            {language === 'cn'
              ? '在这里，您将享受低密度社区的宁静，同时拥有城镇便利设施的便捷。成熟的社区基础设施，让您的家庭在安全、舒适的环境中茁壮成长。'
              : 'Here, you\'ll enjoy the tranquility of a low-density community while having convenient access to town amenities. Mature community infrastructure ensures your family thrives in a safe, comfortable environment.'}
          </h2>
          <div className="w-16 h-[1px] bg-gold-accent mx-auto mb-8"></div>
          <p className="font-serif text-stone-400 leading-relaxed text-lg text-justify">
            {language === 'cn'
              ? 'Superior Residences Taman Indah Jaya 位于亚依淡的成熟社区，周边设施齐全。邻近油站、诊所、餐饮、银行、市场和学校，满足您的日常所需，让生活更加便捷舒适。'
              : 'Superior Residences Taman Indah Jaya is nestled in a well-established community in Ayer Hitam. Enjoy convenient access to nearby amenities including petrol stations, clinics, eateries, banks, markets, and schools - everything you need for comfortable daily living.'}
          </p>
        </div>
      </section>

      {/* Back to Home Button */}
      <section className="py-12 bg-gradient-to-b from-slate-800/30 to-emerald-800/25">
        <div className="text-center">
          <a
            href={homeUrl}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-accent hover:bg-gold-accent/90 text-forest-black font-sans text-sm tracking-wider uppercase rounded transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={18} />
            {language === 'cn' ? '返回首页' : 'Back to Home'}
          </a>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12"
          onClick={closeFullscreen}
        >
          {/* Container - full on mobile, constrained on desktop */}
          <div
            className="relative bg-stone-900 rounded-lg shadow-2xl border border-stone-700 w-full h-full md:w-[90%] md:h-[90%] lg:w-[85%] lg:h-[85%] xl:w-[80%] xl:h-[80%] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with controls */}
            <div className="flex items-center justify-between px-4 py-3 bg-stone-800 border-b border-stone-700">
              <div className="flex items-center gap-3">
                <button
                  onClick={zoomOut}
                  disabled={zoom <= 1}
                  className="w-8 h-8 bg-stone-700 hover:bg-stone-600 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <ZoomOut size={16} />
                </button>
                <span className="text-stone-300 text-sm font-medium min-w-[50px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  disabled={zoom >= 3}
                  className="w-8 h-8 bg-stone-700 hover:bg-stone-600 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <ZoomIn size={16} />
                </button>
              </div>
              <button
                onClick={closeFullscreen}
                className="w-8 h-8 bg-stone-700 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable image area */}
            <div className="flex-1 overflow-auto bg-stone-950">
              <div
                className="min-h-full flex items-center justify-center p-2"
                style={{ minWidth: zoom > 1 ? `${zoom * 100}%` : '100%' }}
              >
                <img
                  src="/images/detailedlocation.png"
                  alt="Superior Residences Location Map"
                  className="max-w-none select-none rounded"
                  style={{
                    width: `${zoom * 100}%`,
                    maxWidth: `${zoom * 100}vw`,
                    filter: 'brightness(1.2) contrast(0.8) saturate(1.05) hue-rotate(-5deg)',
                    imageRendering: 'high-quality'
                  }}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
