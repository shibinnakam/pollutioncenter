import React, { useState } from 'react';
import { X, MessageCircle, Phone, ExternalLink } from 'lucide-react';
import { WhatsAppIcon, AUTHORITIES } from './WhatsAppAuthorityCard';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getUrl = (phone: string, name: string) => {
    const text = `Hello ${name} Sir,\nI would like to contact VEOTA regarding: `;
    return `https://wa.me/91${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start">
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-emerald-200 dark:border-neutral-700 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <WhatsAppIcon size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">VEOTA WhatsApp Support</h4>
                <p className="text-[11px] text-emerald-200">Chat directly with authorities</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 space-y-3">
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Need immediate assistance or want to enquire about adding your testing center? Select an official below:
            </p>

            {AUTHORITIES.map((auth) => (
              <a
                key={auth.phone}
                href={getUrl(auth.phone, auth.name.split(' ')[0])}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-xs hover:shadow transition-all group"
              >
                <div className="relative shrink-0">
                  <img
                    src={auth.photo}
                    alt={auth.name}
                    className="w-11 h-11 rounded-full object-cover border border-emerald-500"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border border-white dark:border-neutral-800 rounded-full"></span>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 block">
                    {auth.badge}
                  </span>
                  <h5 className="text-xs font-bold text-neutral-900 dark:text-white truncate">
                    {auth.name}
                  </h5>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                    {auth.phone}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon size={16} className="text-white" />
                </div>
              </a>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-[10px] text-center text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-700">
            Vehicle Emission Testing Owner's Association
          </div>
        </div>
      )}

      {/* Main floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Open WhatsApp Authority Chat"
      >
        <WhatsAppIcon size={24} className="text-white shrink-0" />
        <span className="text-xs font-bold hidden sm:inline-block pr-1">
          WhatsApp Us
        </span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      </button>
    </div>
  );
};
