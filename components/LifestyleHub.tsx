import React from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../LanguageContext';

export const LifestyleHub: React.FC = () => {
  const { t } = useLanguage();

  const ITEMS = [
    {
      id: 1,
      title: t('lifestyle_1_title'),
      image: "/images/7 clubhouse.png",
      description: t('lifestyle_1_desc')
    },
    {
      id: 2,
      title: t('lifestyle_2_title'),
      image: "/images/8 hotspring.png",
      description: t('lifestyle_2_desc')
    },
    {
      id: 3,
      title: t('lifestyle_3_title'),
      image: "/images/lifestyle lounge.png",
      description: t('lifestyle_3_desc')
    },
    {
      id: 4,
      title: t('lifestyle_4_title'),
      image: "/images/lifestyle library.png",
      description: t('lifestyle_4_desc')
    }
  ];

  return (
    <section className="bg-forest-black py-0 md:py-24 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <FadeIn className="mb-12 px-6 md:px-12 text-center md:text-left">
          <span className="font-sans text-xs tracking-[0.2em] text-gold-accent block mb-4">{t('lifestyle_label')}</span>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            {t('lifestyle_title')} <span className="font-serif italic text-stone-300">{t('lifestyle_title_highlight')}</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row h-[100vh] md:h-[600px] w-full">
          {ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="relative flex-1 group overflow-hidden border-b md:border-b-0 md:border-r border-stone-800 transition-[flex] duration-700 ease-in-out hover:flex-[2] grayscale hover:grayscale-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">{item.title}</h3>
                  <p className="font-serif text-stone-300 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};