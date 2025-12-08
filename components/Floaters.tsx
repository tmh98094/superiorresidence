import React from 'react';
import { FileText, MessageCircle } from 'lucide-react';

interface FloatersProps {
  whatsappNumber?: string;
  formSectionId?: string;
}

export const Floaters: React.FC<FloatersProps> = ({
  whatsappNumber = '60123456789',
  formSectionId = 'contact',
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

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
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
