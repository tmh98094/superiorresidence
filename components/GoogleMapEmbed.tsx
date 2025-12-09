import React from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../LanguageContext';

export const GoogleMapEmbed: React.FC = () => {
  const { t } = useLanguage();

  // Google Maps embed URL for W58F+GQ Ayer Hitam, Johor, Malaysia (satellite view)
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.8!2d103.1833!3d1.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d05e0000000001%3A0x1!2sW58F%2BGQ+Ayer+Hitam%2C+Johor%2C+Malaysia!5e1!3m2!1sen!2smy!4v1702200000000';

  return (
    <section className="relative py-16 md:py-24" style={{ backgroundColor: 'rgb(42, 53, 48)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <FadeIn direction="up">
          <h2 className="font-display text-2xl md:text-4xl text-white text-center mb-12 leading-relaxed max-w-4xl mx-auto">
            {t('map_heading' as any)}
          </h2>
        </FadeIn>

        {/* Google Map Embed */}
        <FadeIn direction="up" delay={200}>
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-lg overflow-hidden">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Superior Residence Location - Taman Mekar Emas Ayer Hitam"
              className="absolute inset-0 w-full h-full"
            />
            {/* Fallback if iframe fails */}
            <div className="absolute inset-0 bg-stone-800 flex items-center justify-center -z-10">
              <p className="text-stone-400 text-sm">Loading map...</p>
            </div>
          </div>
        </FadeIn>

        {/* Address */}
        <FadeIn direction="up" delay={300}>
          <p className="text-center text-stone-400 text-sm mt-6">
            Taman Mekar Emas Ayer Hitam, Jalan Mekar Emas, 86100 Ayer Hitam, Johor
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
