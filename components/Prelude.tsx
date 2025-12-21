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
            <div className="h-[50vh] md:h-screen w-full relative overflow-hidden">
              <video
                className="absolute inset-0 w-full h-[103%] object-cover"
                style={{ top: '0', transform: 'translateY(-1.5%)' }}
                autoPlay
                muted
                loop
                playsInline
                poster="/images/2 concept.png"
              >
                <source src="/videos/house.mp4" type="video/mp4" />
              </video>
              {/* Fallback image if video doesn't load */}
              <img
                src="/images/2 concept.png"
                alt="Superior Residence Nature"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: 'none' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'block';
                }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
