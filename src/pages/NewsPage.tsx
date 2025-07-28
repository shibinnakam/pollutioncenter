import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { newsItems } from '../data';
import { useLanguage } from '../context/LanguageContext';

const NewsPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter news based on search query
  const filteredNews = newsItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft overflow-hidden flex flex-col"
                >
                  {item.imageUrl && (
                    <div className="overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-48 object-cover image-hover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" />
                        <span>{item.date}</span>
                      </div>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex items-center">
                          <Tag size={14} className="mr-1" />
                          <span>{item.tags.join(', ')}</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6 line-clamp-3 flex-1">
                      {item.summary}
                    </p>
                    
                    <a
                      href={`/news/${item.id}`}
                      className="mt-auto text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center font-medium"
                    >
                      {t('news.readMore')} <ArrowRight size={16} className="ml-1" />
                    </a>
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
    </main>
  );
};

export default NewsPage;