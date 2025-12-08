import React from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../LanguageContext';

export const Awards: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-8 md:pt-10 pb-0 overflow-hidden" style={{ backgroundColor: '#2a3530' }}>
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn direction="up" className="text-center mb-6">
          <span className="block font-sans text-[0.65rem] tracking-widest text-gold-accent mb-2">
            {t('awards_label')}
          </span>
          <h2 className="font-display text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-2xl mx-auto">
            {t('awards_title')}
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={200} className="flex justify-center">
          <div className="max-w-xs">
            <img
              src="/images/propertyguru-award.png"
              alt="PropertyGuru Asia Property Awards"
              className="w-full h-auto"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
