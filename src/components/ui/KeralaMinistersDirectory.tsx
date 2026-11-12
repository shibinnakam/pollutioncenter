import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, Download, Maximize2, ExternalLink, X, ZoomIn, ZoomOut } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface KeralaMinistersDirectoryProps {
  className?: string;
}

export const KeralaMinistersDirectory: React.FC<KeralaMinistersDirectoryProps> = ({
  className = ''
}) => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const imageUrl = '/contactnumbers.jpeg';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        id="kerala-ministers-contacts"
        className={`bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-primary-200 dark:border-neutral-700 overflow-hidden ${className}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-primary-900 to-emerald-900 text-white p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                <PhoneCall size={13} />
                <span>
                  {language === 'ml'
                    ? 'കേരള മന്ത്രിസഭ • ഔദ്യോഗിക ഫോൺ നമ്പറുകൾ'
                    : 'Kerala Cabinet • Official Contact Directory'}
                </span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {language === 'ml'
                  ? 'കേരള മന്ത്രിമാരുടെ ഫോൺ നമ്പറുകളും ഓഫീസ് വിവരങ്ങളും'
                  : 'Ministers of Kerala — Contact Numbers & Office Directory'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200">
                {language === 'ml'
                  ? 'കേരളത്തിലെ മന്ത്രിമാരുടെ വകുപ്പുകൾ, ഓഫീസ് നമ്പർ, ഔദ്യോഗിക ഫോൺ നമ്പറുകൾ (വലുതായി കാണാൻ ചിത്രത്തിൽ ക്ലിക്ക് ചെയ്യുക)'
                  : 'Official contact numbers, secretariat chambers, and portfolios of Kerala Ministers (Click image to enlarge & zoom)'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setIsZoomed(false);
                  setIsModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-all"
              >
                <Maximize2 size={14} />
                <span>{language === 'ml' ? 'വലുതായി കാണുക' : 'View Fullscreen'}</span>
              </button>
              <a
                href={imageUrl}
                download="Kerala-Ministers-Contact-Numbers.jpeg"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
              >
                <Download size={14} />
                <span>{language === 'ml' ? 'ഡൗൺലോഡ്' : 'Download'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Image Preview Container */}
        <div className="p-4 sm:p-6 bg-neutral-50 dark:bg-neutral-900/50">
          <div
            onClick={() => {
              setIsZoomed(false);
              setIsModalOpen(true);
            }}
            className="group relative cursor-pointer rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white shadow-sm max-w-4xl mx-auto"
          >
            <img
              src={imageUrl}
              alt="Ministers of Kerala Contact Numbers Directory"
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-neutral-900/85 text-white text-xs sm:text-sm font-semibold shadow-lg flex items-center gap-2">
                <ZoomIn size={16} />
                <span>{language === 'ml' ? 'വലുതായി കാണാൻ ക്ലിക്ക് ചെയ്യുക' : 'Click to Enlarge & Read Numbers'}</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Zoomable Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/90 border-b border-neutral-800 text-white shrink-0">
              <div className="flex items-center gap-2 truncate">
                <PhoneCall size={18} className="text-emerald-400 shrink-0" />
                <span className="font-bold text-sm sm:text-base truncate">
                  {language === 'ml'
                    ? 'കേരള മന്ത്രിസഭ — ഫോൺ നമ്പറുകൾ'
                    : 'Ministers of Kerala — Contact Numbers Directory'}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 transition"
                >
                  {isZoomed ? <ZoomOut size={15} /> : <ZoomIn size={15} />}
                  <span>{isZoomed ? 'Fit Screen' : 'Zoom In'}</span>
                </button>
                <a
                  href={imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-600 hover:bg-primary-500 text-white transition"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">Open Original</span>
                </a>
                <a
                  href={imageUrl}
                  download="Kerala-Ministers-Contact-Numbers.jpeg"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable Image Area */}
            <div
              className="flex-1 overflow-auto p-2 sm:p-6 flex items-start justify-center"
              onClick={() => setIsModalOpen(false)}
            >
              <img
                src={imageUrl}
                alt="Ministers of Kerala Contact Numbers Directory"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
                className={`rounded-lg shadow-2xl transition-all duration-200 ${
                  isZoomed
                    ? 'max-w-none w-[1400px] cursor-zoom-out'
                    : 'max-w-full max-h-[85vh] object-contain cursor-zoom-in'
                }`}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default KeralaMinistersDirectory;

