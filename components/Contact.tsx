import React from 'react';
import { FadeIn } from './FadeIn';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="relative py-32 bg-stone-900 overflow-hidden">

      {/* Background Texture & Image */}
      <div className="absolute inset-0">
        <img
          src="/images/texture leaf.png"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
          alt="Texture"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-black via-forest-black/80 to-transparent"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-end">

          {/* Left: Heading */}
          <div className="flex flex-col justify-center h-full">
            <FadeIn>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-8 leading-[0.9]">
                {t('contact_your')}<br />
                {t('contact_extraordinary')}<br />
                <span className="text-gold-accent">{t('contact_awaits')}</span>
              </h2>
              <p className="font-serif text-stone-400 text-lg md:text-xl max-w-md leading-relaxed">
                {t('contact_subtitle')}
              </p>
            </FadeIn>

            <FadeIn delay={200} className="hidden lg:block mt-24">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold-accent/20 flex items-center justify-center">
                  <span className="font-display text-gold-accent font-bold text-xl">K</span>
                </div>
                <div>
                  <p className="font-sans text-[0.6rem] text-stone-500 tracking-[0.2em] uppercase">{t('contact_developed_by')}</p>
                  <p className="font-display text-stone-300 tracking-widest">KHK LAND</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <FadeIn delay={300} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  className="block w-full bg-transparent border-b border-stone-600 py-3 text-stone-200 focus:outline-none focus:border-gold-accent transition-colors peer placeholder-transparent"
                  placeholder={t('contact_name')}
                />
                <label htmlFor="name" className="absolute left-0 top-3 text-stone-500 text-xs font-bold tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-[0.6rem] peer-focus:text-gold-accent peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[0.6rem]">{t('contact_name')}</label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  className="block w-full bg-transparent border-b border-stone-600 py-3 text-stone-200 focus:outline-none focus:border-gold-accent transition-colors peer placeholder-transparent"
                  placeholder={t('contact_email')}
                />
                <label htmlFor="email" className="absolute left-0 top-3 text-stone-500 text-xs font-bold tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-[0.6rem] peer-focus:text-gold-accent peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[0.6rem]">{t('contact_email')}</label>
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  id="phone"
                  className="block w-full bg-transparent border-b border-stone-600 py-3 text-stone-200 focus:outline-none focus:border-gold-accent transition-colors peer placeholder-transparent"
                  placeholder={t('contact_phone_placeholder')}
                />
                <label htmlFor="phone" className="absolute left-0 top-3 text-stone-500 text-xs font-bold tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-[0.6rem] peer-focus:text-gold-accent peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[0.6rem]">{t('contact_mobile')}</label>
              </div>

              <div className="relative group">
                <select className="block w-full bg-transparent border-b border-stone-600 py-3 text-stone-500 focus:outline-none focus:border-gold-accent transition-colors text-xs uppercase tracking-widest appearance-none rounded-none">
                  <option value="" className="bg-forest-black">{t('contact_price_label')}</option>
                  <option value="1" className="bg-forest-black">{t('contact_price_1')}</option>
                  <option value="2" className="bg-forest-black">{t('contact_price_2')}</option>
                  <option value="3" className="bg-forest-black">{t('contact_price_3')}</option>
                </select>
                <div className="absolute right-0 top-3 pointer-events-none text-stone-500">
                  <ChevronDownIcon size={16} />
                </div>
              </div>

              <div className="pt-2 flex items-start space-x-3">
                <div className="relative flex items-center">
                  <input type="checkbox" id="terms" className="peer h-4 w-4 cursor-pointer appearance-none border border-stone-600 checked:border-gold-accent checked:bg-gold-accent transition-all" />
                  <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-forest-black opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <label htmlFor="terms" className="text-[0.6rem] leading-relaxed text-stone-500 font-sans cursor-pointer uppercase tracking-wider">
                  {t('contact_terms_1')} <a href="#" className="underline hover:text-gold-accent">{t('contact_terms_2')}</a> {t('contact_terms_3')} <a href="#" className="underline hover:text-gold-accent">{t('contact_terms_4')}</a>.
                </label>
              </div>

              <div className="pt-8">
                <button className="w-full bg-stone-200 text-forest-black py-4 font-sans text-xs font-bold tracking-[0.2em] hover:bg-gold-accent hover:text-white transition-all duration-300 flex items-center justify-center group shadow-[0_0_20px_rgba(197,160,89,0.1)] hover:shadow-[0_0_30px_rgba(197,160,89,0.4)]">
                  {t('contact_register_btn')}
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

const ChevronDownIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);