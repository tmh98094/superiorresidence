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

      {/* Centered Content - Moved up 100px */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10" style={{ marginTop: '-100px' }}>
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
          className={`my-4 transition-all duration-700 ${
            animationPhase >= 2
              ? 'opacity-100 scale-y-100'
              : 'opacity-0 scale-y-0'
          }`}
          style={{ transformOrigin: 'top' }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold-accent via-gold-accent/50 to-transparent"></div>
        </div>

        {/* Logo */}
        <div
          className={`transition-all duration-700 ${
            animationPhase >= 3
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <img
            src="/images/logo1.png"
            alt="Superior Residence"
            className="w-96 md:w-[32rem] h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
