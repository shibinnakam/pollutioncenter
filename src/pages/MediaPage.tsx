import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Image as ImageIcon, 
  Video, 
  Download, 
  ExternalLink, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Calendar, 
  MapPin, 
  Sparkles,
  Layers,
  ArrowRight,
  Share2
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { conferenceMediaItems } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { MediaItem } from '../types';

const MediaPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'photos' | 'videos'>('all');
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter media items
  const filteredMedia = useMemo(() => {
    if (activeTab === 'photos') {
      return conferenceMediaItems.filter(item => item.type === 'image');
    }
    if (activeTab === 'videos') {
      return conferenceMediaItems.filter(item => item.type === 'video');
    }
    return conferenceMediaItems;
  }, [activeTab]);

  const activeMediaItem = useMemo(() => {
    if (selectedMediaIndex === null || selectedMediaIndex < 0 || selectedMediaIndex >= filteredMedia.length) {
      return null;
    }
    return filteredMedia[selectedMediaIndex];
  }, [selectedMediaIndex, filteredMedia]);

  const handleNext = useCallback(() => {
    if (selectedMediaIndex === null) return;
    setSelectedMediaIndex((selectedMediaIndex + 1) % filteredMedia.length);
  }, [selectedMediaIndex, filteredMedia.length]);

  const handlePrev = useCallback(() => {
    if (selectedMediaIndex === null) return;
    setSelectedMediaIndex((selectedMediaIndex - 1 + filteredMedia.length) % filteredMedia.length);
  }, [selectedMediaIndex, filteredMedia.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMediaIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedMediaIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMediaIndex, handleNext, handlePrev]);

  const videoItem = conferenceMediaItems.find(m => m.type === 'video');
  const photoItems = conferenceMediaItems.filter(m => m.type === 'image');

  return (
    <main className="pb-16 min-h-screen bg-neutral-50/50 dark:bg-neutral-900/50">
      <PageHeader
        title="VETOA – 3rd Kozhikode District Conference and Family Gathering"
        subtitle={language === 'ml' 
          ? '3-ാമത് കോഴിക്കോട് ജില്ലാ സമ്മേളനത്തിന്റെയും കുടുംബസംഗമത്തിന്റെയും ഫോട്ടോകളും വീഡിയോയും' 
          : 'Official Photo & Video Gallery of the 3rd Kozhikode District Conference & Family Gathering'}
        image="/1.jpeg"
      />

      <section className="py-12">
        <div className="container-custom">
          {/* Hero Celebration Banner */}
          <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary-950 via-primary-900 to-emerald-950 text-white shadow-2xl relative overflow-hidden border border-primary-800/40">
            <div className="absolute right-0 top-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    <Sparkles size={14} className="mr-1.5" />
                    Special Conference Coverage
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90">
                    19 Photos • 1 Video
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  VETOA – 3rd Kozhikode District Conference and Family Gathering
                </h1>

                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
                  {language === 'ml'
                    ? 'വെഹിക്കിൾ എമിഷൻ ടെസ്റ്റിംഗ് ഓണേഴ്സ് അസോസിയേഷൻ (VETOA) 3-ാമത് കോഴിക്കോട് ജില്ലാ സമ്മേളനത്തിന്റെയും കുടുംബസംഗമത്തിന്റെയും അവിസ്മരണീയ മുഹൂർത്തങ്ങൾ.'
                    : 'Relive the memorable moments, ceremonies, speeches, and celebrations from the 3rd Kozhikode District Conference and Family Gathering of VETOA Kerala.'}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-primary-400" />
                    <span>2026 November 27</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={15} className="text-emerald-400" />
                    <span>Samudra Hall, Kozhikode</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <Link
                  to="/news"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all"
                >
                  <span>{language === 'ml' ? 'വാർത്തകൾ കാണുക' : 'Read News Coverage'}</span>
                  <ArrowRight size={15} className="ml-2" />
                </Link>
                {videoItem && (
                  <a
                    href="#conference-video"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-lg transition-all"
                  >
                    <Play size={16} className="mr-2 fill-current" />
                    <span>{language === 'ml' ? 'വീഡിയോ കാണുക' : 'Watch Video'}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Featured Video Spotlight */}
          {videoItem && (
            <section id="conference-video" className="mb-14">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300">
                    <Video size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      {language === 'ml' ? 'സമ്മേളന വീഡിയോ ഹൈലൈറ്റ്സ്' : 'Conference Video Highlights'}
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Official video footage (20.mp4) from the gathering
                    </p>
                  </div>
                </div>

                <a
                  href={videoItem.url}
                  download="VETOA_3rd_District_Conference_20.mp4"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition"
                  title="Download MP4 Video"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download Video</span>
                </a>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-neutral-950 shadow-2xl border border-neutral-800 aspect-video max-w-4xl mx-auto group">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-contain"
                  poster="/1.jpeg"
                >
                  <source src={videoItem.url} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </section>
          )}

          {/* Gallery Section Header & Filter Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <ImageIcon size={22} className="text-primary-600 dark:text-primary-400" />
                <span>{language === 'ml' ? 'ഫോട്ടോ ഗാലറി (1 - 19)' : 'Photo Gallery (Photos 1 – 19)'}</span>
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Click any photo to enlarge and browse full-screen
              </p>
            </div>

            {/* Filter Pills */}
            <div className="inline-flex p-1 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 border border-neutral-300/60 dark:border-neutral-700">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'all'
                    ? 'bg-white dark:bg-neutral-700 text-primary-700 dark:text-primary-300 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                All (20)
              </button>
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'photos'
                    ? 'bg-white dark:bg-neutral-700 text-primary-700 dark:text-primary-300 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Photos (19)
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'videos'
                    ? 'bg-white dark:bg-neutral-700 text-primary-700 dark:text-primary-300 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Video (1)
              </button>
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredMedia.map((item, index) => {
              const isVideo = item.type === 'video';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
                  onClick={() => setSelectedMediaIndex(index)}
                  className="group relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 shadow-soft hover:shadow-xl border border-neutral-200 dark:border-neutral-750 transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-950 relative">
                    {isVideo ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-950 via-neutral-900 to-black relative">
                        <img
                          src="/1.jpeg"
                          alt="Video thumbnail"
                          className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-primary-600 group-hover:bg-primary-500 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                            <Play size={24} className="fill-current ml-1" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.url}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5" />

                    {/* Badge top-left */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold shadow-sm ${
                        isVideo
                          ? 'bg-rose-600 text-white'
                          : 'bg-black/70 text-white backdrop-blur-sm border border-white/20'
                      }`}>
                        {isVideo ? (
                          <>
                            <Video size={11} className="mr-1" />
                            Video #20
                          </>
                        ) : (
                          <>
                            <ImageIcon size={11} className="mr-1" />
                            #{item.order}
                          </>
                        )}
                      </span>
                    </div>

                    {/* Expand icon bottom-right */}
                    <div className="absolute bottom-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="p-1.5 rounded-lg bg-white/90 text-neutral-900 shadow-md flex items-center justify-center hover:bg-white transition-colors">
                        <Maximize2 size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Card Label */}
                  <div className="p-3">
                    <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {isVideo ? 'MP4 Video (20.mp4)' : `Photo ${item.order}.jpeg`}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeMediaItem && selectedMediaIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 animate-fadeIn"
            onClick={() => setSelectedMediaIndex(null)}
          >
            <div
              className="relative w-full max-w-5xl max-h-[95vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Controls */}
              <div className="w-full flex items-center justify-between text-white p-2.5 sm:px-4 mb-2 z-10">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-neutral-300">
                    {selectedMediaIndex + 1} / {filteredMedia.length}
                  </span>
                  <span className="text-xs text-neutral-400 hidden sm:inline">•</span>
                  <span className="text-xs text-neutral-300 font-medium hidden sm:inline truncate max-w-md">
                    {activeMediaItem.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeMediaItem.url}
                    download
                    className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                    title="Download"
                  >
                    <Download size={18} />
                  </a>
                  <a
                    href={activeMediaItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                    title="Open original"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <button
                    onClick={() => setSelectedMediaIndex(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors ml-1"
                    title="Close"
                    aria-label="Close lightbox"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Main Media Container */}
              <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl bg-black max-h-[75vh]">
                {activeMediaItem.type === 'video' ? (
                  <video
                    controls
                    autoPlay
                    className="max-w-full max-h-[75vh] object-contain rounded-xl"
                  >
                    <source src={activeMediaItem.url} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                ) : (
                  <img
                    src={activeMediaItem.url}
                    alt={activeMediaItem.title}
                    className="max-w-full max-h-[75vh] object-contain rounded-xl select-none"
                  />
                )}

                {/* Left/Right Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors shadow-lg"
                  title="Previous (Arrow Left)"
                  aria-label="Previous"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors shadow-lg"
                  title="Next (Arrow Right)"
                  aria-label="Next"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Bottom Thumbnail Strip */}
              <div className="w-full mt-3 overflow-x-auto py-1 px-2 flex items-center gap-2 max-w-full no-scrollbar">
                {filteredMedia.map((thumb, idx) => (
                  <button
                    key={thumb.id}
                    onClick={() => setSelectedMediaIndex(idx)}
                    className={`relative shrink-0 w-12 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === selectedMediaIndex
                        ? 'border-primary-500 scale-105 shadow-md'
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    {thumb.type === 'video' ? (
                      <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white">
                        <Play size={14} className="fill-current text-rose-500" />
                      </div>
                    ) : (
                      <img
                        src={thumb.url}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default MediaPage;
