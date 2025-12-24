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

      {/* Animated Logo - Using PNG for consistency */}
      <div ref={logoRef} className="relative z-10 flex flex-col items-center">
        <div className="w-[30rem] h-56 relative overflow-hidden flex items-center justify-center">
          <img
            src="/images/logo1s.png"
            alt="Superior Residence"
            className="w-full h-[80%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};
