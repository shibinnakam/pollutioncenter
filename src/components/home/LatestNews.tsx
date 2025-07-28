import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
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
          <h2 className="text-3xl font-bold">{t('news.title')}</h2>
          <Link to="/news" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
            {t('common.viewAll')} <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="card hover:shadow-md transition-shadow duration-300"
            >
              {item.imageUrl && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover image-hover"
                  />
                </div>
              )}
              <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm mb-2">
                <Calendar size={14} className="mr-1" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-2">
                {item.summary}
              </p>
              <Link
                to={`/news/${item.id}`}
                className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center font-medium"
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