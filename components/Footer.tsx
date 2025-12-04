import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-forest-black text-stone-500 py-12 border-t border-stone-900">
      <div className="max-w-[1800px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-sans">

        <div>
          <p className="font-bold text-stone-300 mb-4">{t('footer_sales_office')}</p>
          <p className="leading-relaxed">KHK LAND<br />Ground Floor, Tower 1, Avenue 3<br />The Horizon, Bangsar South<br />59200 Kuala Lumpur</p>
        </div>

        <div>
          <p className="font-bold text-stone-300 mb-4">{t('footer_sales_enquiry')}</p>
          <p className="text-xl font-display text-white mb-2">+6019 660 6511</p>
          <p>anyarahills.com</p>
        </div>

        <div className="flex items-center space-x-6 md:justify-center">
          <a href="#" className="hover:text-gold-accent transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-gold-accent transition-colors"><Instagram size={20} /></a>
        </div>

        <div className="text-right flex flex-col justify-between">
          <div className="space-x-4">
            <a href="#" className="hover:text-stone-300">{t('footer_privacy')}</a>
            <a href="#" className="hover:text-stone-300">{t('footer_terms')}</a>
          </div>
          <p className="mt-4 text-[10px] opacity-50">{t('footer_rights')}</p>
        </div>

      </div>
    </footer>
  );
};