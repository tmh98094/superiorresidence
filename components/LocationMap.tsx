import React from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../LanguageContext';

export const LocationMap: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="location" className="relative bg-misty-green-dark min-h-[120vh] flex items-center justify-center overflow-hidden py-24">

      {/* Background Image - Mountain Range */}
      <div className="absolute inset-0">
        <img
          src="/images/3 location.webp"
          alt="Mountains Background"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        {/* Edge gradients for seamless blending on all sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-misty-green-dark via-transparent to-misty-green-dark"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-misty-green-dark via-transparent to-forest-dark"></div>
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-misty-green-dark to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-forest-dark to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-misty-green-dark to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-misty-green-dark to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full">
        <div className="flex flex-col md:flex-row h-full items-center justify-between">

          {/* Text Content */}
          <div className="md:w-1/3 mb-16 md:mb-0 pt-24 md:pt-0">
            <FadeIn direction="right">
              <h2 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
                {t('location_title_1')}<br />
                {t('location_title_2')}
              </h2>
              <div className="w-20 h-1 bg-gold-accent mb-8"></div>
              <p className="font-sans text-xs tracking-[0.2em] text-gold-accent uppercase mb-4">
                {t('location_subtitle')}
              </p>
              <p className="font-serif text-stone-400 text-lg leading-relaxed max-w-sm">
                {t('location_description')}
              </p>
            </FadeIn>
          </div>

          {/* Visual Map Representation */}
          <div className="md:w-1/2 h-[80vh] relative">
            <FadeIn delay={300} className="w-full h-full">
              {/* Abstract Vertical Map */}
              <div className="relative w-full h-full flex justify-center items-center">
                {/* Map Points Line */}
                <div className="absolute top-10 bottom-10 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent left-1/2 md:left-2/3 transform -translate-x-1/2"></div>

                {/* Locations */}
                <div className="absolute top-[20%] left-1/2 md:left-2/3 transform -translate-x-1/2 flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="ml-4 text-[10px] uppercase tracking-widest text-stone-400 whitespace-nowrap">Cameron Highlands</span>
                </div>

                <div className="absolute top-[35%] left-1/2 md:left-2/3 transform -translate-x-1/2 flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="ml-4 text-[10px] uppercase tracking-widest text-stone-400 whitespace-nowrap">Fraser's Hill</span>
                </div>

                {/* Highlighted Location */}
                <div className="absolute top-[50%] left-1/2 md:left-2/3 transform -translate-x-1/2 flex items-center">
                  <div className="relative">
                    <div className="w-4 h-4 bg-gold-accent rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 bg-gold-accent rounded-full animate-ping opacity-50"></div>
                  </div>
                  <div className="ml-6">
                    <span className="block font-display text-2xl text-white">SUPERIOR</span>
                    <span className="block font-sans text-[0.6rem] tracking-[0.3em] text-gold-accent">RESIDENCES</span>
                  </div>
                </div>

                <div className="absolute top-[65%] left-1/2 md:left-2/3 transform -translate-x-1/2 flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="ml-4 text-[10px] uppercase tracking-widest text-stone-400 whitespace-nowrap">Genting Highlands</span>
                </div>

                <div className="absolute bottom-[20%] left-1/2 md:left-2/3 transform -translate-x-1/2 flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="ml-4 text-[10px] uppercase tracking-widest text-stone-400 whitespace-nowrap">Kuala Lumpur</span>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};