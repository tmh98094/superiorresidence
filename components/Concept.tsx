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
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="./images/2 concept.png"
                alt="Architecture in nature"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-gold-accent/30 hidden md:block"></div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};