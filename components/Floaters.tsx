import React from 'react';
import { FileText, BookOpen, Download, ArrowUp } from 'lucide-react';
import { Icon } from '@iconify/react';

interface FloatersProps {
  whatsappNumber?: string;
  formSectionId?: string;
  vrLink?: string;
  brochureLink?: string;
  wazeLink?: string;
}

export const Floaters: React.FC<FloatersProps> = ({
  whatsappNumber = '60123456789',
  formSectionId = 'contact',
  vrLink = 'https://www.arsgather.com/360/TAH/',
  brochureLink = '#',
  wazeLink = 'https://waze.com/ul?ll=1.9167,103.1833&navigate=yes',
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

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWazeClick = () => {
    window.open(wazeLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
      {/* Back to Top Button */}
      <button
        onClick={handleBackToTop}
        className="w-12 h-12 md:w-14 md:h-14 bg-stone-800/80 hover:bg-stone-700 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border border-stone-600 group"
        aria-label="Back to Top"
        title="Back to Top"
      >
        <ArrowUp size={18} className="md:w-[22px] md:h-[22px] text-gold-accent" />
      </button>

      {/* VR-360 Button */}
      <button
        onClick={handleVRClick}
        className="w-12 h-12 md:w-14 md:h-14 bg-stone-800/80 hover:bg-stone-700 backdrop-blur-sm rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border border-stone-600 group"
        aria-label="VR-360 Tour"
        title="VR-360 Tour"
      >
        <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <path d="M12 2v20" />
        </svg>
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
        <FileText size={18} className="md:w-[22px] md:h-[22px] text-gold-accent" />
      </button>

      {/* Waze GPS Button - Using uploaded waze.png image */}
      <button
        onClick={handleWazeClick}
        className="w-12 h-12 md:w-14 md:h-14 bg-[#33CCFF] hover:bg-[#29b8e8] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group overflow-hidden"
        aria-label="Navigate with Waze"
        title="Navigate with Waze"
      >
        <img 
          src="/images/waze.png" 
          alt="Waze" 
          className="w-[43px] h-[43px] md:w-[50px] md:h-[50px] object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </button>

      {/* WhatsApp Button - Real WhatsApp Icon */}
      <button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Contact via WhatsApp"
        title="Contact via WhatsApp"
      >
        <svg className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </div>
  );
};
