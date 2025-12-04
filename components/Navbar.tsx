
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const LEFT_NAV_ITEMS = [
    { label: t('nav_home'), href: '#home' },
    { label: t('nav_prelude'), href: '#concept' },
    { label: t('nav_homes'), href: '#homes' },
  ];

  const RIGHT_NAV_ITEMS = [
    { label: t('nav_masterplan'), href: '#masterplan' },
    { label: t('nav_gallery'), href: '#gallery' },
    { label: t('nav_register'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Trigger background change after scrolling down 50px
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 bg-transparent py-6 border-none"
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
          <div className="hidden md:flex flex-1 justify-end pr-16 lg:pr-24">
            <div className="flex space-x-8 lg:space-x-12">
              {LEFT_NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-[10px] lg:text-xs tracking-[0.2em] uppercase text-stone-300 hover:text-gold-accent transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-gold-accent after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Centered Logo - Static */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center group cursor-pointer">
            <a href="#home" className="flex flex-col items-center text-center">
              <div className="mb-2">
                <svg width="32" height="24" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-100 group-hover:text-gold-accent transition-colors duration-500">
                  <path d="M20 0L40 30H0L20 0Z" fill="currentColor" fillOpacity="0.2" />
                  <path d="M20 5L36 28H4L20 5Z" stroke="currentColor" strokeWidth="1" />
                  <path d="M20 12L30 28H10L20 12Z" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display tracking-[0.2em] text-xl text-stone-100 group-hover:text-gold-accent transition-colors duration-500 whitespace-nowrap">
                ANYARA
              </span>
              <span className="font-sans text-[0.5rem] tracking-[0.3em] text-stone-400 uppercase transition-all duration-700">
                Hills
              </span>
            </a>
          </div>

          {/* Right Desktop Links */}
          <div className="hidden md:flex flex-1 justify-start pl-16 lg:pl-24">
            <div className="flex items-center space-x-8 lg:space-x-12">
              {RIGHT_NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-[10px] lg:text-xs tracking-[0.2em] uppercase text-stone-300 hover:text-gold-accent transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-gold-accent after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
              <div className="font-sans text-[10px] text-stone-500 border-l border-stone-700 pl-6 flex items-center gap-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`cursor-pointer transition-colors ${language === 'en' ? 'text-gold-accent' : 'hover:text-white'}`}
                >
                  EN
                </button>
                <span>|</span>
                <button
                  onClick={() => setLanguage('cn')}
                  className={`cursor-pointer transition-colors ${language === 'cn' ? 'text-gold-accent' : 'hover:text-white'}`}
                >
                  中文
                </button>
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
            <button
              onClick={() => setLanguage('en')}
              className={`text-sm font-sans transition-colors ${language === 'en' ? 'text-gold-accent' : 'text-stone-400 hover:text-white'}`}
            >
              EN
            </button>
            <span className="text-stone-600">|</span>
            <button
              onClick={() => setLanguage('cn')}
              className={`text-sm font-sans transition-colors ${language === 'cn' ? 'text-gold-accent' : 'text-stone-400 hover:text-white'}`}
            >
              中文
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
