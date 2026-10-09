import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import { NewsItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface LatestNewsProps {
  news: NewsItem[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ news }) => {
  const { t } = useLanguage();

  // Take only the latest 3 news items
  const latestNews = news.slice(0, 3);

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">{t('news.title')}</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Latest announcements &amp; events from VEOTA
            </p>
          </div>
          <Link to="/news" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center font-medium">
            {t('common.viewAll')} <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className={latestNews.length === 1 ? "max-w-2xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
          {latestNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="card hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
            >
              {item.imageUrl && (
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Link to="/news">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-56 sm:h-64 object-cover object-top image-hover"
                    />
                  </Link>
                </div>
              )}
              <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mb-2.5">
                <Calendar size={14} className="mr-1 text-primary-500" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2.5 text-neutral-900 dark:text-white leading-snug">
                <Link to="/news" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {item.title}
                </Link>
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                {item.summary}
              </p>

              {/* Event Quick Details */}
              <div className="mb-5 p-3 rounded-lg bg-neutral-100 dark:bg-neutral-700/50 text-xs text-neutral-600 dark:text-neutral-300 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-primary-500 shrink-0" />
                  <span><strong>തീയതി:</strong> 2026 സെപ്റ്റംബർ 27</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={13} className="text-amber-500 shrink-0" />
                  <span><strong>സമയം:</strong> രാവിലെ 10:00 AM</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-emerald-500 shrink-0" />
                  <span><strong>സ്ഥലം:</strong> സമുദ്ര ഹാൾ, കോഴിക്കോട്</span>
                </div>
              </div>

              <Link
                to="/news"
                className="mt-auto text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center font-semibold text-sm"
              >
                {t('news.readMore')} <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;