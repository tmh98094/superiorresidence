import React from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../LanguageContext';

export const Prelude: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="prelude" className="relative min-h-screen bg-misty-green-dark overflow-hidden">
      {/* Gradient overlays for seamless blending */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-forest-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-misty-green-dark to-transparent pointer-events-none z-10"></div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side - Text Content (40%) */}
        <div className="w-full md:w-[40%] flex items-center py-20 md:py-0">
          <div className="px-8 md:px-12 lg:px-16 max-w-xl">
            <FadeIn direction="right">
              <span className="block font-sans text-xs tracking-widest text-gold-accent mb-4">
                {t('prelude_label')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight">
                {t('prelude_title')}
              </h2>
              <div className="w-12 h-[1px] bg-stone-600 mb-8"></div>
              <p className="font-serif text-base md:text-lg text-stone-300 leading-relaxed mb-6 text-justify">
                {t('prelude_text_1')}
              </p>
              <p className="font-serif text-base md:text-lg text-stone-300 leading-relaxed mb-6 text-justify">
                {t('prelude_text_2')}
              </p>
              <p className="font-serif text-base md:text-lg text-stone-300 leading-relaxed italic text-justify">
                {t('prelude_text_3')}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Right Side - Video (60%) */}
        <div className="w-full md:w-[60%] relative">
          <FadeIn direction="left" delay={300}>
            <div className="h-[50vh] md:h-screen w-full relative overflow-hidden bg-stone-800/50">
              {/* Fallback placeholder - positioned behind video */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center z-0">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-stone-400 text-sm">Superior Residences</p>
                </div>
              </div>
              {/* Video - positioned above placeholder */}
              <video
                className="absolute inset-0 w-full h-[103%] object-cover z-10"
                style={{ top: '0', transform: 'translateY(-1.5%)' }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/house.mp4" type="video/mp4" />
              </video>
            </div>

          </FadeIn>
        </div>
      </div>
    </section>
  );
};
