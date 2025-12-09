import React from 'react';
import { FileText, MessageCircle, Globe, BookDown } from 'lucide-react';

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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* VR-365 Button */}
      <button
        onClick={handleVRClick}
        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group relative"
        aria-label="VR-365 Tour"
        title="VR-365 Tour"
      >
        <Globe size={20} className="text-white" />
        <span className="absolute -bottom-0.5 text-[6px] font-bold text-white">360</span>
      </button>

      {/* E-Brochure Button */}
      <button
        onClick={handleBrochureClick}
        className="w-12 h-12 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="E-Brochure Download"
        title="E-Brochure Download"
      >
        <BookDown size={20} className="text-white" />
      </button>

      {/* Form Registration Button */}
      <button
        onClick={handleFormClick}
        className="w-12 h-12 bg-gold-accent hover:bg-gold-accent/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Register Interest"
        title="Register Interest"
      >
        <FileText
          size={20}
          className="text-forest-black group-hover:text-white transition-colors"
        />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Contact via WhatsApp"
        title="Contact via WhatsApp"
      >
        <MessageCircle
          size={20}
          className="text-white"
        />
      </button>
    </div>
  );
};
