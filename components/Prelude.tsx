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
                {t('prelude_title_1')}
                <br />
                {t('prelude_title_2')}
                <br />
                {t('prelude_title_3')}
              </h2>
              <div className="w-12 h-[1px] bg-stone-600 mb-8"></div>
              <p className="font-serif text-base md:text-lg text-stone-300 leading-relaxed mb-6">
                {t('prelude_text_1')}
              </p>
              <p className="font-sans text-sm text-stone-500 leading-loose">
                {t('prelude_text_2')}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Right Side - Video/Image (60%) */}
        <div className="w-full md:w-[60%] relative">
          <FadeIn direction="left" delay={300}>
            <div className="h-[50vh] md:h-screen w-full relative">
              {/* Video placeholder - will use image until video is uploaded */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/2 concept.png"
              >
                {/* Video source will be added when lushgreens.mp4 is available */}
                <source src="/videos/prelude.mp4" type="video/mp4" />
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
