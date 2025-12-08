import React from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../LanguageContext';

export const Awards: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#2a3530' }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn direction="up" className="text-center mb-12">
          <span className="block font-sans text-xs tracking-widest text-gold-accent mb-4">
            {t('awards_label')}
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed max-w-4xl mx-auto">
            {t('awards_title')}
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={200} className="flex justify-center">
          <div className="max-w-2xl">
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
