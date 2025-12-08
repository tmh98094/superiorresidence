import React, { useEffect, useRef } from 'react';
import { useAnimation } from '../AnimationContext';
import gsap from 'gsap';

export const LogoIntro: React.FC = () => {
  const { state, setLogoInHeader, setShowNavItems, setShowHeroText } = useAnimation();
  const logoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current || !overlayRef.current || !bgRef.current) return;

    const timeline = gsap.timeline({
      defaults: { ease: 'power2.inOut' },
    });

    // Start Ken Burns animation on the intro background
    gsap.to(bgRef.current, {
      scale: 1.1,
      duration: 25,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });

    // Main animation sequence
    timeline
      // Wait 1 second
      .to({}, { duration: 1 })
      // Float logo to header position (1.2 seconds)
      .to(
        logoRef.current,
        {
          y: '-45vh',
          scale: 0.67,
          duration: 1.2,
          onComplete: () => {
            // Trigger navbar logo to appear
            setLogoInHeader();
          },
        },
        '+=0'
      )
      // Fade out intro overlay (0.5 seconds) - starts slightly before logo animation ends
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            // Trigger nav items and hero text
            setTimeout(() => {
              setShowNavItems();
              setTimeout(() => {
                setShowHeroText();
              }, 300);
            }, 200);
          },
        },
        '-=0.3'
      );

    // Safety timeout
    const safetyTimer = setTimeout(() => {
      if (!state.logoInHeader) {
        setLogoInHeader();
        setShowNavItems();
        setShowHeroText();
      }
    }, 3500);

    return () => {
      clearTimeout(safetyTimer);
      timeline.kill();
    };
  }, [setLogoInHeader, setShowNavItems, setShowHeroText, state.logoInHeader]);

  // Keep overlay visible but make it transparent
  if (state.showHeroText) {
    return null;
  }

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Hero Background Image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/1 hero.png")',
            transformOrigin: 'center center',
            transform: 'scale(1)',
          }}
        />
        {/* Dark overlay - matches Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-forest-black/90"></div>
      </div>

      {/* Animated Logo */}
      <div ref={logoRef} className="relative z-10 flex flex-col items-center">
        {/* Logo Icon - Same size as navbar */}
        <div className="mb-2">
          <svg
            width="32"
            height="24"
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

        {/* Brand Name - Same size as navbar */}
        <h1 className="font-display tracking-[0.2em] text-xl text-stone-100 whitespace-nowrap">
          SUPERIOR
        </h1>
        <span className="font-sans text-[0.5rem] tracking-[0.3em] text-stone-400 uppercase">
          Residence
        </span>
      </div>
    </div>
  );
};
