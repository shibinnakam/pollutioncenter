import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User, Search } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { representatives, rtoDistricts } from '../data';
import { useLanguage } from '../context/LanguageContext';

const RepresentativesPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedRTO, setSelectedRTO] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter representatives based on selected RTO and search query
  const filteredReps = representatives.filter(rep => {
    const matchesRTO = selectedRTO === '' || rep.rto === selectedRTO;
    const matchesSearch = rep.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rep.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRTO && matchesSearch;
  });

  return (
    <main className="pb-16">
      <PageHeader
        title={t('representatives.title')}
        subtitle={t('representatives.subtitle')}
        image="https://images.pexels.com/photos/8867433/pexels-photo-8867433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* RTO Select */}
            <div>
              <label htmlFor="rto-select" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t('representatives.selectRTO')}
              </label>
              <select
                id="rto-select"
                value={selectedRTO}
                onChange={(e) => setSelectedRTO(e.target.value)}
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
              >
                <option value="">{t('common.viewAll')}</option>
                {rtoDistricts.map(district => (
                  <option key={district.id} value={district.id}>
                    {district.code} - {district.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div>
              <label htmlFor="search-reps" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t('common.search')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-neutral-500 dark:text-neutral-400" />
                </div>
                <input
                  id="search-reps"
                  type="text"
                  placeholder="Search by name, role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                />
              </div>
            </div>
          </div>

          {/* Representatives Grid */}
          {filteredReps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReps.map((rep, index) => (
                <motion.div
                  key={rep.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    {rep.photo && (
                      <div className="sm:w-1/3">
                        <img
                          src={rep.photo}
                          alt={rep.name}
                          className="w-full h-full object-cover"
                          style={{ maxHeight: '180px', objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div className={`p-6 ${rep.photo ? 'sm:w-2/3' : 'w-full'}`}>
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-1">{rep.name}</h3>
                        <div className="text-primary-600 dark:text-primary-400 font-medium">{rep.role}</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {rtoDistricts.find(d => d.id === rep.rto)?.name}
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Phone size={16} className="text-primary-600 dark:text-primary-400 mr-2" />
                          <a 
                            href={`tel:${rep.contact}`} 
                            className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            {rep.contact}
                          </a>
                        </li>
                        {rep.email && (
                          <li className="flex items-center">
                            <Mail size={16} className="text-primary-600 dark:text-primary-400 mr-2" />
                            <a 
                              href={`mailto:${rep.email}`} 
                              className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
                            >
                              {rep.email}
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
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

export default RepresentativesPage;