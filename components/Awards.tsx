import React from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../LanguageContext';

export const Awards: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#2a3530' }}>
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn direction="up" className="text-center mb-8">
          <span className="block font-sans text-xs tracking-widest text-gold-accent mb-3">
            {t('awards_label')}
          </span>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-white leading-relaxed max-w-3xl mx-auto">
            {t('awards_title')}
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={200} className="flex justify-center">
          <div className="max-w-md">
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
