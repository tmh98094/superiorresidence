import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { RiTranslate } from "react-icons/ri";
import { useLanguage } from '../LanguageContext';
import { useAnimation } from '../AnimationContext';

interface NavbarProps {
  alwaysVisible?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ alwaysVisible = false }) => {
  const { language, t } = useLanguage();
  const { state } = useAnimation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Determine current path to fix hash links from other pages
  const isHomePage = typeof window !== 'undefined' &&
    (window.location.pathname === '/' || window.location.pathname === '/zh' || window.location.pathname.endsWith('index.html'));

  const getNavLink = (href: string) => {
    // If it's already an absolute path (starts with /), leave it
    if (href.startsWith('/')) return href;

    // If we are on the home page, simple hash works (and avoids reload)
    if (isHomePage) return href;

    // If we are NOT on home page (e.g. /location), we must prepend the language path
    // English -> /#hash
    // Chinese -> /zh#hash
    const prefix = language === 'cn' ? '/zh' : '';
    return `${prefix}/${href}`; // Ensures /#home or /zh/#prelude
  };

  // New navigation structure: Home | Prelude | Floor Plan | Site Plan | Location | Register | EN/中
  const LEFT_NAV_ITEMS = [
    { label: t('nav_home'), href: '#home' },
    { label: t('nav_prelude'), href: '#prelude' },
    { label: t('nav_floorplan'), href: '#floorplan' },
  ];

  const RIGHT_NAV_ITEMS = [
    { label: t('nav_siteplan'), href: '#siteplan' },
    { label: t('nav_location'), href: language === 'cn' ? '/zh/location' : '/location' },
    { label: t('nav_register'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Change to black background when scrolled to prelude section
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed state.logoInHeader check to ensure navbar is always present after loading

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${state.showNavItems || scrolled || alwaysVisible ? 'opacity-100' : 'opacity-0'
          } ${scrolled || alwaysVisible ? 'bg-[#202e27]/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'}`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center h-20 md:h-24 transition-all duration-500">

          {/* Menu Toggle / Close Button */}
          <div className="flex-1 flex justify-start z-[60]">
            <button
              className={`flex items-center space-x-2 group transition-colors duration-300 ${isOpen ? 'text-stone-100' : 'text-stone-100'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`relative w-6 h-6 flex items-center justify-center rounded-full border border-white/20 group-hover:border-gold-accent transition-colors`}>
                {isOpen ? <X size={14} /> : <Menu size={14} />}
              </div>
              <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                {isOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>

          {/* Centered Logo - Visible only when scrolled or logoInHeader is true */}
          {/* Using absolute positioning for mobile/tablet to ensure true centering without pushing side elements off-screen */}
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${scrolled || alwaysVisible ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
            <div className="relative w-64 md:w-80 lg:w-96 h-[5rem] md:h-[6rem] lg:h-[7rem] overflow-hidden pointer-events-auto flex items-center justify-center">
              <a href="#home" className="block w-full h-[80%]">
                <img
                  src="/images/logo1s.png"
                  alt="Superior Residences"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* Reserve Button */}
          <div className="flex-1 flex justify-end">
            <a
              href="#contact"
              className={`px-4 py-2 md:px-8 md:py-3 border font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase transition-all duration-500 hover:bg-gold-accent hover:border-gold-accent hover:text-[#202e27] ${isOpen ? 'border-stone-100 text-stone-100' : 'border-stone-100 text-stone-100'
                }`}
            >
              Reserve
            </a>
          </div>
        </div>

        {/* Side Drawer Overlay */}
        <div
          className={`fixed inset-0 bg-black/60 z-[90] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          style={{ height: '100vh' }}
          onClick={() => setIsOpen(false)}
        />

        {/* Side Drawer Content */}
        <div
          className={`fixed top-0 left-0 h-screen w-full md:w-[400px] bg-[#202e27] z-[100] transform transition-transform duration-700 ease-parallax flex flex-col pt-[2.5vh] pb-[2.5vh] px-8 md:px-16 border-r border-white/5 shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          {/* Main Flex Container for Full Height Layout - Using justify-start to group content at top */}
          <div className="flex flex-col h-full justify-start">

            {/* Top Section: Logo */}
            <div className="flex justify-center w-full shrink-0">
              <div className="relative w-full max-w-[420px] md:max-w-[525px] h-[15vh] max-h-[150px] overflow-hidden">
                <img
                  src="/images/logo1s.png"
                  alt="Superior Residences"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Middle Section: Navigation Links - flex-1 to take up all space, justify-center to align, large space-y to fill gaps */}
            <div className="flex-1 flex flex-col justify-center space-y-[4vh] my-4 shrink-0">
              {[...LEFT_NAV_ITEMS, ...RIGHT_NAV_ITEMS].map((item, index) => (
                <a
                  key={item.label}
                  href={getNavLink(item.href)}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between transition-all duration-700 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Responsive font size: clamps nicely for mobile */}
                  <span className={`font-display text-[clamp(1.5rem,4vh,2.5rem)] md:text-[clamp(1.8rem,3.5vh,2.8rem)] text-stone-100 hover:text-gold-accent transition-colors ${language === 'cn' ? 'nav-chinese' : ''
                    }`}>
                    {item.label}
                  </span>
                  <span className="w-8 md:w-12 h-[1px] bg-stone-700 relative overflow-hidden group-hover:bg-gold-accent transition-colors">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 border-r border-t border-stone-500 w-1.5 h-1.5 rotate-45 group-hover:border-gold-accent transition-colors"></span>
                  </span>
                </a>
              ))}
            </div>

            {/* Bottom Section: Footer (Stay Connected + Language) - Pushed to bottom by flex-1 above */}
            <div className="shrink-0 space-y-[2vh] pb-8 md:pb-12">
              {/* Stay Connected */}
              <div className={`space-y-[1vh] border-t border-white/10 pt-[1.5vh] transition-all duration-700 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`} style={{ transitionDelay: '500ms' }}>
                <span className="block font-sans text-[0.6rem] md:text-[0.7rem] font-bold tracking-[0.3em] text-stone-500 uppercase">Stay Connected</span>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/p/Superior-Property-Development-61558856129917/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    title="Facebook"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold-accent group-hover:text-gold-accent transition-colors text-stone-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/superiorpropertydevelopment/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    title="Instagram"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold-accent group-hover:text-gold-accent transition-colors text-stone-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://superiorpropertydevelopment.com.my/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    title="Website"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold-accent group-hover:text-gold-accent transition-colors text-stone-300">
                      <Globe size={18} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Language Toggle */}
              <div className={`transition-all duration-700 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '700ms' }}>
                <div className="flex items-center gap-4">
                  <div className="p-2 border border-white/10 rounded-sm text-stone-400">
                    <RiTranslate size={14} />
                  </div>
                  <div className="flex items-center gap-3 font-sans text-[0.6rem] md:text-xs font-bold tracking-[0.1em]">
                    <a
                      href="/#home"
                      className={`cursor-pointer transition-colors ${language === 'en' ? 'text-gold-accent' : 'text-stone-400 hover:text-stone-100'}`}
                    >
                      ENGLISH
                    </a>
                    <span className="text-stone-700">/</span>
                    <a
                      href="/zh#home"
                      className={`cursor-pointer transition-colors nav-chinese ${language === 'cn' ? 'text-gold-accent' : 'text-stone-400 hover:text-stone-100'}`}
                    >
                      中文
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};