import React from 'react';
import { FadeIn } from './FadeIn';
import { Shield, Trees, Map, UserCheck, Video, Lock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Location: React.FC = () => {
  const { t } = useLanguage();

  const FEATURES = [
    { id: '1', icon: Map, title: t('feature_1_title'), description: t('feature_1_desc') },
    { id: '2', icon: Trees, title: t('feature_2_title'), description: t('feature_2_desc') },
    { id: '3', icon: Shield, title: t('feature_3_title'), description: t('feature_3_desc') },
    { id: '4', icon: Video, title: t('feature_4_title'), description: t('feature_4_desc') },
    { id: '5', icon: Lock, title: t('feature_5_title'), description: t('feature_5_desc') },
    { id: '6', icon: UserCheck, title: t('feature_6_title'), description: t('feature_6_desc') },
  ];

  return (
    <section
      id="location"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/3 location.png"
          alt="Location Map"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay with #2a3530 tint */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(42, 53, 48, 0.85)' }}></div>
      </div>

      {/* Location Heading - Top Left Corner */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 max-w-xs md:max-w-md">
        <FadeIn direction="right">
          <h2 className="font-display text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed">
            {t('location_heading' as any)}
          </h2>
          <div className="w-12 md:w-16 h-[2px] bg-gold-accent mt-3 md:mt-4"></div>
        </FadeIn>
      </div>

      {/* Features Content - Center */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Features Title */}
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h3 className="font-display text-3xl md:text-5xl text-white mb-2">
                {t('features_title_1')}
              </h3>
              <h3 className="font-serif text-2xl md:text-4xl text-gold-accent italic">
                {t('features_title_2')}
              </h3>
            </FadeIn>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {FEATURES.map((feature, idx) => (
              <FadeIn
                key={feature.id}
                delay={idx * 100}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-20 h-20 rounded-full border-2 border-stone-600 flex items-center justify-center mb-4 group-hover:border-gold-accent group-hover:bg-gold-accent/10 transition-all duration-500">
                  <feature.icon
                    className="text-stone-300 group-hover:text-gold-accent transition-colors"
                    size={32}
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white mb-2">
                  {feature.title}
                </h4>
                <p className="font-serif text-stone-400 text-sm italic">
                  {feature.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
