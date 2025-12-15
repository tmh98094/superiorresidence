import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useAnimation } from '../AnimationContext';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { state, setLogoInHeader, setShowNavItems, setShowHeroText } = useAnimation();
  const logoRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't start animation until loading is complete
    if (state.isLoading) return;
    if (!logoRef.current || !logoContainerRef.current || !heroTextRef.current || !scrollIndicatorRef.current) return;

    const timeline = gsap.timeline({
      defaults: { ease: 'power2.inOut' },
    });

    // Get navbar height based on screen size
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const navbarHeight = isMobile ? 64 : isTablet ? 88 : 104;

    // Set container to fixed from the start - this avoids any position switching
    logoContainerRef.current.style.position = 'fixed';
    logoContainerRef.current.style.top = '0';
    logoContainerRef.current.style.left = '0';
    logoContainerRef.current.style.right = '0';
    logoContainerRef.current.style.height = '100vh';

    // Calculate the Y offset needed to move from center to navbar
    const viewportHeight = window.innerHeight;
    const startY = viewportHeight / 2; // Logo starts at center
    const endY = (navbarHeight / 2) + 12; // Logo ends at navbar center + 15px lower
    const moveDistance = startY - endY; // How far to move up

    // Initial state - logo at center of viewport
    gsap.set(logoRef.current, { 
      top: '50%',
      left: '50%',
      xPercent: -50,
      yPercent: -50,
      y: 0,
      scale: 2,
      opacity: 1 
    });
    gsap.set(heroTextRef.current, { opacity: 0, y: 20 });
    gsap.set(scrollIndicatorRef.current, { opacity: 0 });

    // Animation sequence
    timeline
      // Wait 1 second with logo centered
      .to({}, { duration: 1 })
      // Float logo to header position and scale down
      .to(
        logoRef.current,
        {
          y: -moveDistance, // Move up by this amount
          scale: 1,
          duration: 1.2,
          onStart: () => {
            setLogoInHeader();
          },
          onComplete: () => {
            // Shrink container and reposition logo
            if (logoContainerRef.current && logoRef.current) {
              logoContainerRef.current.style.height = `${navbarHeight}px`;
              // Reset to percentage-based centering within navbar
              gsap.set(logoRef.current, {
                top: '62%', // Slightly below center (5px lower)
                y: 0,
                yPercent: -50
              });
            }
            setTimeout(() => {
              setShowNavItems();
            }, 100);
          },
        },
        '+=0'
      )
      .to({}, { duration: 0.2 })
      .to(
        heroTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          onStart: () => {
            setShowHeroText();
          },
        },
        '+=0'
      )
      .to(
        scrollIndicatorRef.current,
        {
          opacity: 1,
          duration: 0.5,
        },
        '-=0.2'
      );

    return () => {
      timeline.kill();
    };
  }, [state.isLoading, setLogoInHeader, setShowNavItems, setShowHeroText]);

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background - Static hero image */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/1 hero.png")',
            transformOrigin: 'center center',
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-forest-black/90"></div>
      </div>

      {/* Animated Logo - Starts centered, moves to top, becomes fixed - STAYS VISIBLE when scrolled */}
      <div 
        ref={logoContainerRef} 
        className="absolute inset-0 z-[60] pointer-events-none"
      >
        <div
          ref={logoRef}
          className="absolute"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(2)' }}
        >
          <a href="#home" className="flex flex-col items-center cursor-pointer group pointer-events-auto">
            {/* Logo */}
            <img
              src="/images/try.png"
              alt="Superior Residence"
              className="w-36 md:w-44 lg:w-58 h-auto transition-opacity duration-500 group-hover:opacity-80"
            />
          </a>
        </div>
      </div>

      {/* Hero Text Content */}
      <div className="relative h-full flex flex-col justify-end pb-32 md:justify-center md:pb-0 items-center text-center px-4 z-10 pointer-events-none">
        <div ref={heroTextRef} className="mt-[10vh] opacity-0">
          {/* Subtitle - Freehold Landed Homes */}
          <div className="mb-6">
            <h2 className="font-sans text-[0.6rem] md:text-xs tracking-[0.4em] text-white/80 uppercase">
              {t('hero_subtitle')}
            </h2>
          </div>

          {/* Main Headline - A sanctuary of heart and homes. */}
          <div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 tracking-wide drop-shadow-lg">
              {t('hero_title')}
            </h1>
          </div>

          {/* Decorative Line */}
          <div>
            <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-gold-accent to-transparent mt-8 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="fixed bottom-8 left-0 right-0 flex justify-center text-white/50 z-20 animate-bounce opacity-0"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </div>
    </div>
  );
};
