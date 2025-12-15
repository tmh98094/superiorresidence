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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* VR-360 Button */}
      <button
        onClick={handleVRClick}
        className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="VR-360 Tour"
        title="VR-360 Tour"
      >
        <Globe2 size={22} className="text-white" />
        <span className="text-[8px] font-bold text-white -mt-0.5">360°</span>
      </button>

      {/* E-Brochure Button */}
      <button
        onClick={handleBrochureClick}
        className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group relative"
        aria-label="E-Brochure Download"
        title="E-Brochure Download"
      >
        <BookOpen size={20} className="text-white" />
        <Download size={10} className="text-white absolute bottom-2 right-2" />
      </button>

      {/* Form Registration Button */}
      <button
        onClick={handleFormClick}
        className="w-14 h-14 bg-gold-accent hover:bg-gold-accent/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Register Interest"
        title="Register Interest"
      >
        <FileText
          size={22}
          className="text-forest-black group-hover:text-white transition-colors"
        />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Contact via WhatsApp"
        title="Contact via WhatsApp"
      >
        <MessageCircle
          size={22}
          className="text-white"
        />
      </button>
    </div>
  );
};
