import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Info, ChevronDown, ChevronUp, Search } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { testingCenters, rtoDistricts } from '../data';
import { TestingCenter } from '../types';
import { useLanguage } from '../context/LanguageContext';

const TestingCentersPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedRTO, setSelectedRTO] = useState<string>('');
  const [expandedCenter, setExpandedCenter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter centers based on selected RTO and search query
  const filteredCenters = testingCenters.filter(center => {
    const matchesRTO = selectedRTO === '' || center.rto === selectedRTO;
    const matchesSearch = center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          center.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          center.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRTO && matchesSearch;
  });

  // Toggle expanded center
  const toggleExpand = (centerId: string) => {
    setExpandedCenter(expandedCenter === centerId ? null : centerId);
  };

  return (
    <main className="pb-16">
      <PageHeader
        title={t('testingCenters.title')}
        subtitle={t('testingCenters.subtitle')}
        image="https://images.pexels.com/photos/3807581/pexels-photo-3807581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* RTO Select */}
            <div>
              <label htmlFor="rto-select" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t('testingCenters.selectRTO')}
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
              <label htmlFor="search-centers" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t('common.search')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-neutral-500 dark:text-neutral-400" />
                </div>
                <input
                  id="search-centers"
                  type="text"
                  placeholder="Search by name, location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                />
              </div>
            </div>
          </div>

          {/* Centers List */}
          {filteredCenters.length > 0 ? (
            <div className="grid gap-6">
              {filteredCenters.map((center, index) => (
                <CenterCard
                  key={center.id}
                  center={center}
                  isExpanded={expandedCenter === center.id}
                  toggleExpand={() => toggleExpand(center.id)}
                  rtoName={rtoDistricts.find(d => d.id === center.rto)?.name || ''}
                  index={index}
                />
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

interface CenterCardProps {
  center: TestingCenter;
  isExpanded: boolean;
  toggleExpand: () => void;
  rtoName: string;
  index: number;
}

const CenterCard: React.FC<CenterCardProps> = ({ center, isExpanded, toggleExpand, rtoName, index }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft overflow-hidden"
    >
      {/* Card Header */}
      <div 
        className="p-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
        onClick={toggleExpand}
      >
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-1">{center.name}</h3>
          <div className="flex items-center text-neutral-600 dark:text-neutral-400">
            <MapPin size={16} className="mr-1" />
            <span>{center.location}, {rtoName}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium">
            {rtoDistricts.find(d => d.id === center.rto)?.code}
          </div>
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      <div
        className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3">{t('testingCenters.details')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-2 shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">{center.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-600 dark:text-primary-400 mr-2 shrink-0" />
                <a 
                  href={`tel:${center.contact}`} 
                  className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {center.contact}
                </a>
              </li>
              {center.email && (
                <li className="flex items-center">
                  <Mail size={18} className="text-primary-600 dark:text-primary-400 mr-2 shrink-0" />
                  <a 
                    href={`mailto:${center.email}`} 
                    className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {center.email}
                  </a>
                </li>
              )}
              {center.workingHours && (
                <li className="flex items-center">
                  <Clock size={18} className="text-primary-600 dark:text-primary-400 mr-2 shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300">{center.workingHours}</span>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3">Services</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Info size={16} className="text-primary-600 dark:text-primary-400 mr-2 shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">PUC Certification</span>
              </li>
              <li className="flex items-center">
                <Info size={16} className="text-primary-600 dark:text-primary-400 mr-2 shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">Emission Testing</span>
              </li>
              <li className="flex items-center">
                <Info size={16} className="text-primary-600 dark:text-primary-400 mr-2 shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">Vehicle Inspection</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestingCentersPage;