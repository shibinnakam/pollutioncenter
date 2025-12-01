import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Info, ChevronDown, ChevronUp, Search, ArrowLeft } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { testingCenters, rtoDistricts } from '../data';
import { TestingCenter } from '../types';
import { useLanguage } from '../context/LanguageContext';

const TestingCentersPage: React.FC = () => {
  const { t } = useLanguage();
  // selectedMainRTO = id of main RTO (e.g. 'kl11' or 'kl18')
  const [selectedMainRTO, setSelectedMainRTO] = useState<string>('');
  // selectedSubRTO = id of sub RTO (e.g. 'kl11a'), this is also used to filter centers
  const [selectedSubRTO, setSelectedSubRTO] = useState<string>('');
  const [expandedCenter, setExpandedCenter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // helper: get main RTOs (those in data that have subRTO array)
  const mainRTOs = Array.isArray(rtoDistricts)
    ? rtoDistricts.filter((d: any) => Array.isArray((d as any).subRTO) && (d as any).subRTO.length > 0)
    : [];

  // helper: find a district object by id (works for main and sub)
  const findDistrictById = (id: string) => {
    if (!id) return undefined;
    // search main
    const main = rtoDistricts.find((d: any) => d.id === id);
    if (main) return main;
    // search sub inside mains
    for (const m of rtoDistricts as any[]) {
      if (Array.isArray(m.subRTO)) {
        const s = m.subRTO.find((x: any) => x.id === id);
        if (s) return s;
      }
    }
    return undefined;
  };

  // Compute which centers to show depending on selectedSubRTO (lowest level) or selectedMainRTO + "view all" option
  const centersToShow = testingCenters.filter(center => {
    // if a sub-rto is selected, only show centers with that rto
    if (selectedSubRTO) {
      return center.rto === selectedSubRTO &&
        (center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         center.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
         center.address.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // if main RTO selected (but no sub selected), show centers whose rto is the mainRTO OR any of its subRTO ids
    if (selectedMainRTO) {
      const main = (rtoDistricts as any[]).find((d: any) => d.id === selectedMainRTO);
      const subIds = Array.isArray(main?.subRTO) ? main.subRTO.map((s: any) => s.id) : [];
      const matchesRTO = center.rto === selectedMainRTO || subIds.includes(center.rto);
      return matchesRTO &&
        (center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         center.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
         center.address.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // default: no RTO selected -> return empty, because we show only main RTO cards initially
    return false;
  });

  // Toggle expanded center
  const toggleExpand = (centerId: string) => {
    setExpandedCenter(expandedCenter === centerId ? null : centerId);
  };

  // Reset sub selection when main selection changes
  useEffect(() => {
    setSelectedSubRTO('');
  }, [selectedMainRTO]);

  return (
    <main className="pb-16">
      <PageHeader
        title={t('testingCenters.title')}
        subtitle={t('testingCenters.subtitle')}
        image="https://images.pexels.com/photos/3807581/pexels-photo-3807581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container-custom">
          {/* Filters / Search */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left area: either main RTO list (when nothing selected) OR breadcrumb + subRTOs */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {selectedMainRTO ? t('testingCenters.selectSubRTO') : t('testingCenters.selectRTO')}
              </label>

              {/* If no main RTO selected -> show main RTO buttons */}
              {!selectedMainRTO && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mainRTOs.map((m: any) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMainRTO(m.id)}
                      className="w-full text-left p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:shadow-sm transition-shadow flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">{m.code}</div>
                        <div className="text-lg font-semibold">{m.name}</div>
                      </div>
                      <div className="text-neutral-400">
                        <ChevronDown size={20} />
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* If main RTO selected -> show breadcrumb + subRTO buttons and "View all centers" */}
              {selectedMainRTO && (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <button
                      onClick={() => { setSelectedMainRTO(''); setSelectedSubRTO(''); setExpandedCenter(null); }}
                      className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                      aria-label="Back to main RTOs"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">
                        {(findDistrictById(selectedMainRTO) as any)?.code}
                      </div>
                      <div className="text-lg font-semibold">
                        {(findDistrictById(selectedMainRTO) as any)?.name}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 flex flex-wrap gap-2">
                    {/* Button to view all centers under main RTO (including centers directly assigned to main RTO or its subs) */}
                    <button
                      onClick={() => { setSelectedSubRTO(''); /* centersToShow already handles main selection */ }}
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${selectedSubRTO === '' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-primary-200' : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200'} `}
                    >
                      {t('testingCenters.viewAllInRTO') || 'View all centers in this RTO'}
                    </button>

                    {/* render subRTOs */}
                    {(() => {
                      const main = (rtoDistricts as any[]).find((d: any) => d.id === selectedMainRTO);
                      if (!main || !Array.isArray(main.subRTO)) return null;
                      return main.subRTO.map((s: any) => (
                        <button
                          key={s.id}
                          onClick={() => setSelectedSubRTO(s.id)}
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${selectedSubRTO === s.id ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-primary-200' : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200'} `}
                        >
                          {s.code} - {s.name}
                        </button>
                      ));
                    })()}
                  </div>
                </div>
              )}
            </div>

            {/* Right area: search input (keeps same style) */}
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

          {/* MAIN VIEW CONTROL:
              - If no main RTO selected -> show main RTO cards only (user clicks them to load subRTOs)
              - If a main RTO selected -> show centers area (filtered by selectedMainRTO and optionally selectedSubRTO)
          */}
          {!selectedMainRTO ? (
            // Show main RTO cards (big tiles)
            <div className="grid gap-6">
              {mainRTOs.map((m: any, idx: number) => (
                <motion.button
                  key={m.id}
                  onClick={() => setSelectedMainRTO(m.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-6 text-left flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">{m.code}</div>
                    <h3 className="text-2xl font-semibold">{m.name}</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                      {(m.subRTO || []).length} sub RTO{(m.subRTO || []).length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className="text-neutral-300">
                    <ChevronDown size={28} />
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            // Show centers filtered (centersToShow). If none found show message
            <>
              {centersToShow.length > 0 ? (
                <div className="grid gap-6">
                  {centersToShow.map((center, index) => (
                    <CenterCard
                      key={center.id}
                      center={center}
                      isExpanded={expandedCenter === center.id}
                      toggleExpand={() => toggleExpand(center.id)}
                      rtoName={(findDistrictById(center.rto) as any)?.name || ''}
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
            </>
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
            <span>{center.location}{rtoName ? `, ${rtoName}` : ''}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium">
            {/* show the district code if available */}
            {(function getCode() {
              const d = (rtoDistricts as any[]).find((dr: any) => dr.id === center.rto)
                || (rtoDistricts as any[]).flatMap((m: any) => m.subRTO || []).find((s: any) => s.id === center.rto);
              return d?.code ?? center.rto;
            })()}
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
                <span className="text-neutral-700 dark:text-neutral-300">{center.address || '-'}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-600 dark:text-primary-400 mr-2 shrink-0" />
                <a 
                  href={`tel:${center.contact}`} 
                  className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {center.contact || '-'}
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
