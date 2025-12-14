import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    priceRange: '',
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Replace this with your Google Apps Script Web App URL after setup
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyzuBpUJTBQYDa3AyzzVEEaIrg6FTgzHjWlLswOFf9lTQyyacmurhCvTkTSr6rAKBQJzQ/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.terms) {
      alert('Please accept the terms and conditions');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          priceRange: formData.priceRange,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors, we can't read the response, so we assume success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', priceRange: '', terms: false });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden" style={{ backgroundColor: 'rgb(42, 53, 48)' }}>
      {/* Background Texture & Image */}
      <div className="absolute inset-0">
        <img
          src="/images/leave.png"
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
                {t('contact_your')}
                <br />
                {t('contact_extraordinary')}
                <br />
                <span className="text-gold-accent">{t('contact_awaits')}</span>
              </h2>
              <p className="font-serif text-stone-400 text-lg md:text-xl max-w-md leading-relaxed">
                {t('contact_subtitle')}
              </p>
            </FadeIn>

            <FadeIn delay={200} className="mt-12 lg:mt-24">
              <p className="font-sans text-[0.6rem] text-stone-500 tracking-[0.2em] uppercase mb-3">
                {t('contact_developed_by')}
              </p>
              <img
                src="/images/SPD_LOGO.png"
                alt="Superior Property Development"
                className="h-16 w-auto object-contain"
              />
            </FadeIn>
          </div>

          {/* Right: Form */}
          <FadeIn
            delay={300}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full bg-transparent border-b border-stone-600 py-3 text-stone-200 focus:outline-none focus:border-gold-accent transition-colors peer placeholder-transparent"
                  placeholder={t('contact_name')}
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 text-stone-500 text-xs font-bold tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-[0.6rem] peer-focus:text-gold-accent peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[0.6rem]"
                >
                  {t('contact_name')}
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full bg-transparent border-b border-stone-600 py-3 text-stone-200 focus:outline-none focus:border-gold-accent transition-colors peer placeholder-transparent"
                  placeholder={t('contact_email')}
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 text-stone-500 text-xs font-bold tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-[0.6rem] peer-focus:text-gold-accent peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[0.6rem]"
                >
                  {t('contact_email')}
                </label>
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="block w-full bg-transparent border-b border-stone-600 py-3 text-stone-200 focus:outline-none focus:border-gold-accent transition-colors peer placeholder-transparent"
                  placeholder={t('contact_phone_placeholder')}
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 top-3 text-stone-500 text-xs font-bold tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-[0.6rem] peer-focus:text-gold-accent peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[0.6rem]"
                >
                  {t('contact_mobile')}
                </label>
              </div>

              <div className="relative group">
                <select
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  required
                  className="block w-full bg-transparent border-b border-stone-600 py-3 text-stone-500 focus:outline-none focus:border-gold-accent transition-colors text-xs uppercase tracking-widest appearance-none rounded-none"
                >
                  <option value="" className="bg-forest-black">
                    {t('contact_interested_in' as any)}
                  </option>
                  <option value="2-Storey Semi-D 45'x85 | 3,413 sq.ft" className="bg-forest-black">
                    2-Storey Semi-D 45'x85 | 3,413 sq.ft
                  </option>
                  <option value="2-Storey Terrace 22'x75 | 2,527-2,759 sq.ft" className="bg-forest-black">
                    2-Storey Terrace 22'x75 | 2,527-2,759 sq.ft
                  </option>
                  <option value="Rumah Mampu Biaya (B) 1-Storey Terrace 18'x70 | 856 sq.ft" className="bg-forest-black">
                    Rumah Mampu Biaya (B) 1-Storey 18'x70 | 856 sq.ft
                  </option>
                  <option value="Rumah Mampu Biaya (C) 1-Storey Terrace 20'x70 | 1,008 sq.ft" className="bg-forest-black">
                    Rumah Mampu Biaya (C) 1-Storey 20'x70 | 1,008 sq.ft
                  </option>
                  <option value="Rumah Mampu Biaya (D) 2-Storey Terrace 20'x70 | 1,434 sq.ft" className="bg-forest-black">
                    Rumah Mampu Biaya (D) 2-Storey 20'x70 | 1,434 sq.ft
                  </option>
                </select>
                <div className="absolute right-0 top-3 pointer-events-none text-stone-500">
                  <ChevronDownIcon size={16} />
                </div>
              </div>

              <div className="pt-2 flex items-start space-x-3">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="peer h-4 w-4 cursor-pointer appearance-none border border-stone-600 checked:border-gold-accent checked:bg-gold-accent transition-all"
                  />
                  <svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-forest-black opacity-0 peer-checked:opacity-100 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <label
                  htmlFor="terms"
                  className="text-[0.6rem] leading-relaxed text-stone-500 font-sans cursor-pointer uppercase tracking-wider"
                >
                  {t('contact_terms_1')}{' '}
                  <a href="#" className="underline hover:text-gold-accent">
                    {t('contact_terms_2')}
                  </a>{' '}
                  {t('contact_terms_3')}{' '}
                  <a href="#" className="underline hover:text-gold-accent">
                    {t('contact_terms_4')}
                  </a>
                  .
                </label>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-green-400 text-sm text-center py-2">
                  Thank you! Your registration has been submitted successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 text-sm text-center py-2">
                  Something went wrong. Please try again.
                </div>
              )}

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-stone-200 text-forest-black py-4 font-sans text-xs font-bold tracking-[0.2em] hover:bg-gold-accent hover:text-white transition-all duration-300 flex items-center justify-center group shadow-[0_0_20px_rgba(197,160,89,0.1)] hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SUBMITTING...' : t('contact_register_btn')}
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
                  />
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
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
