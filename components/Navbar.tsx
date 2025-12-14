import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useAnimation } from '../AnimationContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { state } = useAnimation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // New navigation structure: Home | Prelude | Floor Plan | Site Plan | Location | Register | EN/中
  const LEFT_NAV_ITEMS = [
    { label: t('nav_home'), href: '#home' },
    { label: t('nav_prelude'), href: '#prelude' },
    { label: t('nav_floorplan'), href: '#floorplan' },
  ];

  const RIGHT_NAV_ITEMS = [
    { label: t('nav_siteplan'), href: '#siteplan' },
    { label: t('nav_location'), href: '#location' },
    { label: t('nav_register'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Change to black background when scrolled to prelude section
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide navbar until logo animation completes
  if (!state.logoInHeader) {
    return null;
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 pt-8 pb-8 md:pt-10 md:pb-12 lg:pt-12 lg:pb-14 border-none transition-all duration-500 ${
          state.showNavItems ? 'opacity-100' : 'opacity-0'
        } ${scrolled ? 'md:bg-black/90 md:backdrop-blur-md bg-transparent' : 'bg-transparent'}`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center relative h-full">

          {/* Mobile Menu Toggle (Left) */}
          <button
            className="md:hidden text-stone-100 z-50 absolute left-6 top-1/2 -translate-y-1/2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Left Desktop Links */}
          <div className="hidden md:flex flex-1 justify-end pr-16 lg:pr-24 xl:pr-32">
            <div className={`flex space-x-8 lg:space-x-12 transition-all duration-500 ${
              state.showNavItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              {LEFT_NAV_ITEMS.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-sm lg:text-base tracking-[0.2em] uppercase text-stone-300 hover:text-gold-accent transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-gold-accent after:transition-all hover:after:w-full"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Centered Logo - Hidden, using Hero logo instead */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-0 pointer-events-none">
            {/* Logo space reserved for Hero logo */}
          </div>

          {/* Right Desktop Links */}
          <div className="hidden md:flex flex-1 justify-start pl-16 lg:pl-24 xl:pl-32">
            <div className={`flex items-center space-x-8 lg:space-x-12 transition-all duration-500 ${
              state.showNavItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              {RIGHT_NAV_ITEMS.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-sm lg:text-base tracking-[0.2em] uppercase text-stone-300 hover:text-gold-accent transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-gold-accent after:transition-all hover:after:w-full"
                  style={{ transitionDelay: `${(index + 3) * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <div className="font-sans text-base text-stone-300 border-l border-stone-500 pl-6 flex items-center gap-2 pointer-events-auto">
                <a
                  href="/#home"
                  className={`cursor-pointer transition-colors pointer-events-auto ${language === 'en' ? 'text-gold-accent font-bold' : 'text-white hover:text-gold-accent'}`}
                >
                  EN
                </a>
                <span className="text-stone-400">|</span>
                <a
                  href="/zh#home"
                  className={`cursor-pointer transition-colors pointer-events-auto ${language === 'cn' ? 'text-gold-accent font-bold' : 'text-white hover:text-gold-accent'}`}
                >
                  中
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Right Spacer */}
          <div className="md:hidden w-6"></div>

        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-forest-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {[...LEFT_NAV_ITEMS, ...RIGHT_NAV_ITEMS].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-2xl text-stone-200 hover:text-gold-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-8 mt-8 border-t border-stone-800 w-32 text-center flex items-center justify-center gap-3">
            <a
              href="/#home"
              className={`text-sm font-sans transition-colors cursor-pointer ${language === 'en' ? 'text-gold-accent' : 'text-stone-400 hover:text-white'}`}
            >
              EN
            </a>
            <span className="text-stone-600">|</span>
            <a
              href="/zh#home"
              className={`text-sm font-sans transition-colors cursor-pointer ${language === 'cn' ? 'text-gold-accent' : 'text-stone-400 hover:text-white'}`}
            >
              中
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};