import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';

export const Unveiling: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      // Phase 1: Show "UNVEILING" text
      const timer1 = setTimeout(() => setAnimationPhase(1), 200);
      // Phase 2: Show vertical line
      const timer2 = setTimeout(() => setAnimationPhase(2), 800);
      // Phase 3: Show leaf icon and "Superior Residence"
      const timer3 = setTimeout(() => setAnimationPhase(3), 1400);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-forest-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/texture leaf.png")' }}
      />
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* UNVEILING Text */}
        <div
          className={`transition-all duration-700 ${
            animationPhase >= 1
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="font-sans text-xs md:text-sm tracking-[0.5em] text-gold-accent uppercase">
            {t('unveiling_text')}
          </span>
        </div>

        {/* Vertical Decorative Line */}
        <div
          className={`my-8 transition-all duration-700 ${
            animationPhase >= 2
              ? 'opacity-100 scale-y-100'
              : 'opacity-0 scale-y-0'
          }`}
          style={{ transformOrigin: 'top' }}
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-gold-accent via-gold-accent/50 to-transparent"></div>
        </div>

        {/* Leaf Icon */}
        <div
          className={`mb-4 transition-all duration-700 ${
            animationPhase >= 3
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-stone-100"
          >
            <path d="M20 0L40 30H0L20 0Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M20 5L36 28H4L20 5Z" stroke="currentColor" strokeWidth="1" />
            <path d="M20 12L30 28H10L20 12Z" fill="currentColor" />
          </svg>
        </div>

        {/* Superior Residence Text */}
        <div
          className={`text-center transition-all duration-700 delay-100 ${
            animationPhase >= 3
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="font-display tracking-[0.25em] text-3xl md:text-5xl text-stone-100">
            SUPERIOR
          </h2>
          <span className="font-sans text-sm tracking-[0.4em] text-stone-400 uppercase">
            {t('unveiling_brand')}
          </span>
        </div>
      </div>
    </section>
  );
};
