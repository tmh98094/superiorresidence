import React from 'react';
import { FileText, MessageCircle, Globe2, BookOpen, Download } from 'lucide-react';

interface FloatersProps {
  whatsappNumber?: string;
  formSectionId?: string;
  vrLink?: string;
  brochureLink?: string;
}

export const Floaters: React.FC<FloatersProps> = ({
  whatsappNumber = '60123456789',
  formSectionId = 'contact',
  vrLink = 'https://www.arsgather.com/360/TAH/',
  brochureLink = '#', // TBD - Google Drive link
}) => {
  const handleFormClick = () => {
    const element = document.getElementById(formSectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleVRClick = () => {
    window.open(vrLink, '_blank', 'noopener,noreferrer');
  };

  const handleBrochureClick = () => {
    if (brochureLink !== '#') {
      window.open(brochureLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
      {/* VR-360 Button */}
      <button
        onClick={handleVRClick}
        className="w-12 h-12 md:w-14 md:h-14 bg-stone-800/80 hover:bg-stone-700 backdrop-blur-sm rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border border-stone-600 group"
        aria-label="VR-360 Tour"
        title="VR-360 Tour"
      >
        <Globe2 size={18} className="md:w-[22px] md:h-[22px] text-gold-accent" />
        <span className="text-[7px] md:text-[8px] font-bold text-gold-accent -mt-0.5">360°</span>
      </button>

      {/* E-Brochure Button */}
      <button
        onClick={handleBrochureClick}
        className="w-12 h-12 md:w-14 md:h-14 bg-stone-800/80 hover:bg-stone-700 backdrop-blur-sm rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border border-stone-600 group relative"
        aria-label="E-Brochure Download"
        title="E-Brochure Download"
      >
        <BookOpen size={16} className="md:w-5 md:h-5 text-gold-accent" />
        <Download size={8} className="md:w-[10px] md:h-[10px] text-gold-accent absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2" />
      </button>

      {/* Form Registration Button */}
      <button
        onClick={handleFormClick}
        className="w-12 h-12 md:w-14 md:h-14 bg-stone-800/80 hover:bg-stone-700 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border border-stone-600 group"
        aria-label="Register Interest"
        title="Register Interest"
      >
        <FileText
          size={18}
          className="md:w-[22px] md:h-[22px] text-gold-accent"
        />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Contact via WhatsApp"
        title="Contact via WhatsApp"
      >
        <MessageCircle
          size={18}
          className="md:w-[22px] md:h-[22px] text-white"
        />
      </button>
    </div>
  );
};
