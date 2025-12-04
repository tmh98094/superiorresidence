import React from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 bg-forest-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text Side */}
        <div className="order-2 lg:order-1">
          <FadeIn direction="up">
            <span className="font-sans text-xs tracking-[0.2em] text-gold-accent block mb-6">{t('services_label')}</span>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-8">
              {t('services_title_1')}<br />
              {t('services_title_2')}<br />
              {t('services_title_3')}
            </h2>
            <div className="space-y-6 text-stone-400 font-serif text-lg leading-relaxed">
              <p>
                {t('services_text_1')}
              </p>
              <p>
                {t('services_text_2')}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Image Grid Side */}
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <FadeIn delay={0} className="col-span-2">
            <img src="./images/6 butler service.png" alt="Butler Service" className="w-full h-64 md:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            <p className="text-xs font-sans tracking-widest mt-2 text-stone-500">{t('service_butler')}</p>
          </FadeIn>
          <FadeIn delay={200}>
            <img src="./images/6 chauffer service.png" alt="Chauffeur" className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            <p className="text-xs font-sans tracking-widest mt-2 text-stone-500">{t('service_chauffeur')}</p>
          </FadeIn>
          <FadeIn delay={400}>
            <img src="./images/6 chef service.png" alt="Private Chef" className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            <p className="text-xs font-sans tracking-widest mt-2 text-stone-500">{t('service_chef')}</p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};