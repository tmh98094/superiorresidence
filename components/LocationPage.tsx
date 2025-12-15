import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const LocationPage: React.FC = () => {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);

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

  const homeUrl = language === 'cn' ? '/zh#home' : '/#home';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/20 via-teal-900/30 to-slate-800/40" style={{ backgroundColor: 'rgb(15, 23, 20)' }}>
      {/* Fixed Header */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
        style={{ backgroundColor: scrolled ? 'rgba(20, 40, 30, 0.95)' : 'rgba(20, 40, 30, 0.7)' }}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href={homeUrl}
            className="flex items-center gap-2 text-stone-300 hover:text-gold-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-sans text-sm tracking-wider uppercase">
              {language === 'cn' ? '返回首页' : 'Back to Home'}
            </span>
          </a>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-gold-accent" />
              <span className="font-display text-lg md:text-xl text-white">
                {language === 'cn' ? '位置详情' : 'Location Details'}
              </span>
            </div>
            {/* Language Toggle */}
            <div className="font-sans text-sm text-stone-300 border-l border-stone-500 pl-4 flex items-center gap-2">
              <a
                href="/location"
                className={`cursor-pointer transition-colors ${language === 'en' ? 'text-gold-accent font-bold' : 'text-white hover:text-gold-accent'}`}
              >
                EN
              </a>
              <span className="text-stone-400">|</span>
              <a
                href="/zh/location"
                className={`cursor-pointer transition-colors ${language === 'cn' ? 'text-gold-accent font-bold' : 'text-white hover:text-gold-accent'}`}
              >
                中
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Map Image */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-transparent via-slate-900/10 to-emerald-900/15">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          {/* Title */}
          <div className="text-center mb-8 md:mb-12">
            <p className={`text-gold-accent font-sans tracking-[0.3em] uppercase mb-4 ${
              language === 'cn' ? 'text-sm md:text-base' : 'text-xs'
            }`}>
              {language === 'cn' ? '战略位置' : 'Strategic Location'}
            </p>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4">
              Superior Residence
            </h1>
            <p className="font-display text-xl md:text-2xl text-stone-400">
              Taman Indah Jaya, Ayer Hitam
            </p>
          </div>

          {/* Map Image */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl cursor-pointer md:cursor-default" onClick={openFullscreen}>
            <img
              src="/images/detailedlocation.jpg"
              alt="Superior Residence Location Map"
              className="w-full h-auto object-contain"
            />
            {/* Mobile tap indicator */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors md:hidden flex items-center justify-center">
              <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs opacity-0 hover:opacity-100 transition-opacity">
                {language === 'cn' ? '点击查看大图' : 'Tap to view fullscreen'}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Description Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-900/15 via-teal-900/25 to-slate-800/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className={`text-gold-accent font-sans tracking-[0.3em] uppercase mb-6 ${
            language === 'cn' ? 'text-sm md:text-base' : 'text-xs'
          }`}>
            {language === 'cn' ? '理想居所' : 'Ideal Living'}
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-white mb-8 leading-relaxed">
            {language === 'cn' 
              ? '"在这里，您将享受低密度社区的宁静，同时拥有城镇便利设施的便捷。成熟的社区基础设施，让您的家庭在安全、舒适的环境中茁壮成长。"'
              : '"Here, you\'ll enjoy the tranquility of a low-density community while having convenient access to town amenities. Mature community infrastructure ensures your family thrives in a safe, comfortable environment."'}
          </h2>
          <div className="w-16 h-[1px] bg-gold-accent mx-auto mb-8"></div>
          <p className="text-stone-400 leading-relaxed">
            {language === 'cn'
              ? 'Superior Residence Taman Indah Jaya 位于亚依淡的黄金地段，距离峇株巴辖、居銮、永平和马接等主要城镇仅数分钟车程。周边设施齐全，包括油站、诊所、餐饮、银行和市场，满足您的日常所需。'
              : 'Superior Residence Taman Indah Jaya is strategically located in the prime area of Ayer Hitam, just minutes away from major towns like Batu Pahat, Kluang, Yong Peng, and Machap. Surrounded by complete amenities including petrol stations, clinics, eateries, banks, and markets to meet your daily needs.'}
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                  </svg>
                </button>
                <span className="text-stone-300 text-sm font-medium min-w-[50px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  disabled={zoom >= 3}
                  className="w-8 h-8 bg-stone-700 hover:bg-stone-600 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              <button
                onClick={closeFullscreen}
                className="w-8 h-8 bg-stone-700 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Scrollable image area */}
            <div className="flex-1 overflow-auto bg-stone-950">
              <div 
                className="min-h-full flex items-center justify-center p-2"
                style={{ minWidth: zoom > 1 ? `${zoom * 100}%` : '100%' }}
              >
                <img
                  src="/images/detailedlocation.jpg"
                  alt="Superior Residence Location Map"
                  className="max-w-none select-none rounded"
                  style={{ 
                    width: `${zoom * 100}%`,
                    maxWidth: `${zoom * 100}vw`
                  }}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
