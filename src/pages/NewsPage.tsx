import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight, Search, Clock, MapPin, X, Sparkles } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { newsItems } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { NewsItem } from '../types';

const NewsPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter news based on search query
  const filteredNews = newsItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <main className="pb-16">
      <PageHeader
        title={t('news.title')}
        subtitle={t('news.subtitle')}
        image="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="mb-10 max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-neutral-500 dark:text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search news and updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
              />
            </div>
          </div>

          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className={filteredNews.length === 1 ? "max-w-3xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
              {filteredNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-neutral-200 dark:border-neutral-700 overflow-hidden flex flex-col hover:shadow-lg transition-all"
                >
                  {item.imageUrl && (
                    <div 
                      className="overflow-hidden cursor-pointer relative group"
                      onClick={() => setSelectedNews(item)}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-64 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                          <Sparkles size={14} className="text-amber-400" /> Click to view full announcement
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    {/* Meta badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <div className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800/40">
                        <Calendar size={13} className="mr-1" />
                        <span>{item.date}</span>
                      </div>
                      {item.tags && item.tags.length > 0 && item.tags.map((tag) => (
                        <div key={tag} className="inline-flex items-center text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300">
                          <Tag size={12} className="mr-1" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h3 
                      className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3 cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      onClick={() => setSelectedNews(item)}
                    >
                      {item.title}
                    </h3>
                    
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                      {item.summary}
                    </p>

                    {/* Quick Highlights for Conference & Family Meet */}
                    <div className="mb-6 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-700/60 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar size={15} className="text-primary-500 shrink-0" />
                        <span><strong>തീയതി:</strong> 2026 നവംബർ 27</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={15} className="text-amber-500 shrink-0" />
                        <span><strong>സമയം:</strong> രാവിലെ 10:00 AM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={15} className="text-emerald-500 shrink-0" />
                        <span><strong>സ്ഥലം:</strong> സാമുദ്ര ഹാൾ, കോഴിക്കോട്</span>
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => setSelectedNews(item)}
                      className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-primary-600 hover:bg-primary-700 text-white transition-colors shadow-sm"
                    >
                      <span>മുഴുവൻ വിവരങ്ങൾ കാണുക (View Details)</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white dark:bg-neutral-800 rounded-lg shadow-soft">
              <p className="text-neutral-600 dark:text-neutral-300">
                {t('common.noResults')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Full News Detail Modal */}
      {selectedNews && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-neutral-200 dark:border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            {selectedNews.imageUrl && (
              <div className="relative w-full h-56 sm:h-72 bg-neutral-950 overflow-hidden shrink-0">
                <img
                  src={selectedNews.imageUrl}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover object-top"
                />
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-md"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            )}

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              {!selectedNews.imageUrl && (
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 font-semibold border border-primary-200 dark:border-primary-800/40">
                  <Calendar size={13} />
                  2026 നവംബർ 27
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-semibold border border-amber-200 dark:border-amber-800/40">
                  <Clock size={13} />
                  രാവിലെ 10:00 AM
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800/40">
                  <MapPin size={13} />
                  സാമുദ്ര ഹാൾ, കോഴിക്കോട്
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white leading-snug">
                {selectedNews.title}
              </h2>

              <div className="text-neutral-700 dark:text-neutral-200 text-sm sm:text-base leading-relaxed whitespace-pre-line bg-neutral-50 dark:bg-neutral-800/70 p-5 rounded-xl border border-neutral-200 dark:border-neutral-700/80 font-sans">
                {selectedNews.content}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedNews(null)}
                  className="px-6 py-2 rounded-xl text-sm font-semibold bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default NewsPage;