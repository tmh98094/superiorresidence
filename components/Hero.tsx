
import React from 'react';
import { FadeIn } from './FadeIn';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background with Ken Burns Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{
            backgroundImage: 'url("./images/1 hero.png")',
            transformOrigin: 'center center'
          }}
        ></div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-forest-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-32 md:justify-center md:pb-0 items-center text-center px-4 z-10 pointer-events-none">
        <div className="mt-[10vh]">
          <FadeIn delay={0} direction="up" className="mb-6">
            <h2 className="font-sans text-[0.6rem] md:text-xs tracking-[0.4em] text-white/80 uppercase">
              {t('hero_subtitle')}
            </h2>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 tracking-wide drop-shadow-lg">
              {t('hero_title_1')}<br />
              <span className="italic font-serif font-light text-stone-200">{t('hero_title_2')}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={400} direction="up">
            <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-gold-accent to-transparent mt-8 mx-auto"></div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 z-20 transition-opacity duration-500 delay-[1000ms]">
        <ChevronDown size={32} strokeWidth={1} />
      </div>
    </div>
  );
};
