import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const GALLERY_IMAGES = [
    {
      src: "/images/gallery 1.png",
      caption: t('gallery_1')
    },
    {
      src: "/images/gallery 2.png",
      caption: t('gallery_2')
    },
    {
      src: "/images/gallery 3.png",
      caption: t('gallery_3')
    }
  ];

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="gallery" className="relative w-full aspect-video md:h-screen bg-forest-black overflow-hidden group">

      {/* Images */}
      {GALLERY_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img
            src={img.src}
            alt={img.caption}
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentIndex ? 'scale-110' : 'scale-100'
              }`}
          />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="h-full flex flex-col justify-between p-8 md:p-16">
          {/* Top Title */}
          <div className="flex justify-between items-start">
            <FadeIn>
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide drop-shadow-lg">
                {t('gallery_title')}
              </h2>
            </FadeIn>
            <div className="text-white/60 font-sans text-xs tracking-[0.2em]">
              {String(currentIndex + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}
            </div>
          </div>

          {/* Bottom Caption */}
          <div className="overflow-hidden">
            <p className={`font-serif text-2xl md:text-3xl italic text-white/90 transition-transform duration-1000 delay-300 ${isTransitioning ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
              {GALLERY_IMAGES[currentIndex].caption}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-gradient-to-r hover:from-black/40 hover:to-transparent cursor-pointer"
        aria-label="Previous Image"
      >
        <div className="p-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
          <ChevronLeft size={24} strokeWidth={1} />
        </div>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-gradient-to-l hover:from-black/40 hover:to-transparent cursor-pointer"
        aria-label="Next Image"
      >
        <div className="p-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <ChevronRight size={24} strokeWidth={1} />
        </div>
      </button>

    </section>
  );
};