import React from 'react';
import { FadeIn } from './FadeIn';
import { Users, Heart, MapPin, Store, Building, Zap, Shield } from 'lucide-react';
import { Icon } from '@iconify/react';
import { useLanguage } from '../LanguageContext';

export const Location: React.FC = () => {
  const { t } = useLanguage();

  const FEATURES = [
    { id: '1', icon: Users, title: t('feature_1_title'), description: t('feature_1_desc'), isIconify: false },
    { id: '2', icon: 'material-symbols:family-group-rounded', title: t('feature_2_title'), description: t('feature_2_desc'), isIconify: true },
    { id: '3', icon: MapPin, title: t('feature_3_title'), description: t('feature_3_desc'), isIconify: false },
    { id: '4', icon: 'material-symbols:curtains-outline', title: t('feature_4_title'), description: t('feature_4_desc'), isIconify: true },
    { id: '5', icon: Store, title: t('feature_5_title'), description: t('feature_5_desc'), isIconify: false },
    { id: '6', icon: 'hugeicons:car-parking-02', title: t('feature_6_title'), description: t('feature_6_desc'), isIconify: true },
    { id: '7', icon: 'mdi:road', title: t('feature_7_title'), description: t('feature_7_desc'), isIconify: true },
    { id: '8', icon: Zap, title: t('feature_8_title'), description: t('feature_8_desc'), isIconify: false },
    { id: '9', icon: 'material-symbols:grid-view-outline', title: t('feature_9_title'), description: t('feature_9_desc'), isIconify: true },
  ];



  return (
    <section
      id="location"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/3 location.webp"
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
              <h3 className="font-display text-2xl md:text-4xl text-gold-accent">
                {t('features_title_2')}
              </h3>
            </FadeIn>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {FEATURES.map((feature, idx) => (
              <FadeIn
                key={feature.id}
                delay={idx * 100}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-stone-600 flex items-center justify-center mb-4 md:mb-6 group-hover:border-gold-accent group-hover:bg-gold-accent/10 transition-all duration-500">
                  {feature.isIconify ? (
                    <Icon icon={feature.icon as string} className="text-stone-300 group-hover:text-gold-accent transition-colors w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                  ) : (
                    <feature.icon
                      className="text-stone-300 group-hover:text-gold-accent transition-colors w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
                <h4 className="font-sans text-xs md:text-sm lg:text-base font-bold uppercase tracking-widest text-white mb-2 md:mb-3">
                  {feature.title}
                </h4>
                <p className="font-serif text-stone-400 text-sm md:text-base lg:text-lg italic">
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
