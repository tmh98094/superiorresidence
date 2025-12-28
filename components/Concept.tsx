import React from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../LanguageContext';

export const Concept: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="concept" className="relative py-32 overflow-hidden bg-misty-green-dark">
      {/* Gradient overlays for seamless blending */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-forest-black to-transparent pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-misty-green-dark to-transparent pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 relative">

        {/* Floating Text Block */}
        <div className="relative z-20 max-w-xl md:ml-12 lg:ml-24 pt-12 md:pt-0">
          <FadeIn direction="right">
            <span className="block font-sans text-xs tracking-widest text-gold-accent mb-4">{t('prelude_label')}</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight">
              {t('prelude_title_1')}<br />
              {t('prelude_title_2')}<br />
              {t('prelude_title_3')}
            </h2>
            <div className="w-12 h-[1px] bg-stone-600 mb-8"></div>
            <p className="font-serif text-lg md:text-xl text-stone-300 leading-relaxed mb-6">
              {t('prelude_text_1')}
            </p>
            <p className="font-sans text-sm text-stone-500 leading-loose">
              {t('prelude_text_2')}
            </p>
          </FadeIn>
        </div>

        {/* Large Image overlapping vertically */}
        <div className="mt-12 md:-mt-32 md:ml-auto md:w-3/4 lg:w-2/3 relative z-10">
          <FadeIn direction="left" delay={300}>
            <div className="aspect-[4/3] overflow-hidden bg-stone-800/50 border border-stone-700 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-stone-400 text-sm">Architecture Concept</p>
              </div>
            </div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-gold-accent/30 hidden md:block"></div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};