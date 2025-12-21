import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="text-stone-500" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
      {/* Main Footer Section - Logo and Company Info */}
      <div className="py-8 px-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 text-center md:text-left">
            {/* Logo - 1.5x larger */}
            <div className="flex-shrink-0 h-36 w-60 overflow-hidden flex items-center justify-center">
              <img
                src="/images/logo1.png"
                alt="Superior Residences"
                className="h-72 w-auto object-contain"
              />
            </div>
            
            {/* Company Info */}
            <div className="flex-1">
              <h3 className="font-display text-lg md:text-xl text-white tracking-wider mb-3">
                SUPERIOR PROPERTY DEVELOPMENT
              </h3>
              <div className="text-sm text-stone-400 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span>Lot 101, Jalan Batu Pahat, 86100 Ayer Hitam, Johor</span>
                <span className="hidden md:inline">|</span>
                <a href="tel:+60775829997" className="text-gold-accent hover:text-white transition-colors">
                  +607 7582 997
                </a>
                <span className="hidden md:inline">|</span>
                <a href="https://superiorpropertydevelopment.com.my" target="_blank" rel="noopener noreferrer" className="text-gold-accent hover:text-white transition-colors">
                  superiorpropertydevelopment.com.my
                </a>
              </div>
              
              {/* Operating Hours merged under company details */}
              <div className="mt-4 space-y-1 text-sm text-stone-400">
                <p className="text-white font-medium">
                  Operating Hours
                </p>
                <p>Monday – Friday: 8:30 am – 5:30 pm</p>
                <p>Closed on Saturday & Sunday</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Mobile Responsive */}
      <div className="py-4 px-6 border-t border-stone-800">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-stone-500 text-center md:text-left">
              2025 © Superior Property Development Sdn. Bhd
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-stone-500">
              <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-stone-300 transition-colors">Ad & Cookie Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-stone-300 transition-colors">Legal Notices</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};