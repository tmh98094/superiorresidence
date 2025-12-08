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

    // Initial state - logo is large and centered
    gsap.set(logoRef.current, { 
      scale: 2, 
      y: '0vh',
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
          y: '-45vh', // Move up to header position (adjusted higher)
          scale: 1,
          duration: 1.2,
          onStart: () => {
            // Trigger navbar to show (it will fade in behind the logo)
            setLogoInHeader();
          },
          onComplete: () => {
            // Change logo container to fixed positioning at navbar height
            if (logoContainerRef.current && logoRef.current) {
              logoContainerRef.current.style.position = 'fixed';
              logoContainerRef.current.style.top = '0';
              logoContainerRef.current.style.left = '0';
              logoContainerRef.current.style.right = '0';
              logoContainerRef.current.style.bottom = 'auto';
              logoContainerRef.current.style.height = '6rem'; // Match navbar height (py-6 = 1.5rem top + 1.5rem bottom)
              
              // Position logo in the center of the fixed navbar (moved down 15px)
              logoRef.current.style.position = 'absolute';
              logoRef.current.style.top = 'calc(50% + 15px)';
              logoRef.current.style.left = '50%';
              logoRef.current.style.transform = 'translate(-50%, -50%)';
            }
            // Show nav items
            setTimeout(() => {
              setShowNavItems();
            }, 100);
          },
        },
        '+=0'
      )
      // Wait for nav items to appear, then fade in hero text
      .to({}, { duration: 0.2 })
      // Fade in hero text
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
      // Fade in scroll indicator
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

      {/* Animated Logo - Starts centered, moves to top, becomes fixed */}
      <div ref={logoContainerRef} className="absolute inset-0 z-[60] pointer-events-none">
        <div
          ref={logoRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2]"
        >
          <a href="#home" className="flex flex-col items-center cursor-pointer group pointer-events-auto">
            {/* Logo - Gold PNG (3x larger) */}
            <img
              src="/images/logo1.png"
              alt="Superior Residence"
              className="w-72 h-auto transition-opacity duration-500 group-hover:opacity-80"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 z-20 animate-bounce opacity-0"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </div>
    </div>
  );
};
