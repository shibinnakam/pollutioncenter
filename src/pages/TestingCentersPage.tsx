import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Info, ChevronDown, ChevronUp, Search, ArrowLeft, ExternalLink, Building2, X, AlertTriangle } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { testingCenters, rtoDistricts, kozhikodeRTOOffices } from '../data';
import { TestingCenter, RTOOfficeInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import RTOOfficesSidebar from '../components/testing/RTOOfficesSidebar';

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
          center.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (center.centerCode && center.centerCode.toLowerCase().includes(searchQuery.toLowerCase())));
    }

    // if main RTO selected (but no sub selected), show centers whose rto is the mainRTO OR any of its subRTO ids
    if (selectedMainRTO) {
      const main = (rtoDistricts as any[]).find((d: any) => d.id === selectedMainRTO);
      const subIds = Array.isArray(main?.subRTO) ? main.subRTO.map((s: any) => s.id) : [];
      const matchesRTO = center.rto === selectedMainRTO || subIds.includes(center.rto);
      return matchesRTO &&
        (center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          center.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          center.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (center.centerCode && center.centerCode.toLowerCase().includes(searchQuery.toLowerCase())));
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

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleFilterFromOffice = (office: RTOOfficeInfo) => {
    if (office.id === 'kl11') {
      setSelectedMainRTO('kl11');
      setSelectedSubRTO('');
    } else if (office.id === 'kl18') {
      setSelectedMainRTO('kl18');
      setSelectedSubRTO('');
    } else if (office.id === 'kl77') {
      setSelectedMainRTO('kl18');
      setSelectedSubRTO('kl77');
    } else if (office.id === 'kl56') {
      setSelectedMainRTO('kl18');
      setSelectedSubRTO('kl56');
    } else if (office.id === 'kl57') {
      setSelectedMainRTO('kl11');
      setSelectedSubRTO('kl57');
    } else if (office.id === 'kl76') {
      setSelectedMainRTO('kl11');
      setSelectedSubRTO('kl76');
    } else if (office.id === 'kl85') {
      setSelectedMainRTO('kl11');
      setSelectedSubRTO('kl73'); // Feroke maps to kl73 in center data
    }
    setMobileDrawerOpen(false);
    const el = document.getElementById('testing-centers-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pb-16">
      <PageHeader
        title={t('testingCenters.title')}
        subtitle={t('testingCenters.subtitle')}
        image="https://images.pexels.com/photos/3807581/pexels-photo-3807581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-12 md:py-16">
        <div className="container-custom">
          {/* Top Notice & Mobile Action Bar */}
          <div className="mb-8 p-4 md:p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <Building2 size={20} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-bold text-white">
                    {t('testingCenters.rtoOfficesTitle')} ({kozhikodeRTOOffices.length})
                  </h2>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    {t('testingCenters.rtoOfficesDistrict')}
                  </span>
                </div>
                <p className="text-xs text-amber-200/90 mt-1 flex items-center gap-1.5">
                  <AlertTriangle size={14} className="text-amber-400 shrink-0" />
                  <span>
                    <strong>{t('testingCenters.rtoOfficesNotice')}:</strong> {t('testingCenters.rtoOfficesNoticeDesc')}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setMobileDrawerOpen(true)}
                className="lg:hidden w-full md:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Building2 size={15} />
                <span>{t('testingCenters.toggleOffices')} (7)</span>
              </button>
              <button
                onClick={() => {
                  const target = document.getElementById('rto-offices-sidebar-container');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hidden md:inline-flex lg:hidden px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
              >
                Scroll to Details ↓
              </button>
            </div>
          </div>

          {/* Main 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (Testing Centers Filter & Listings) */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6" id="testing-centers-content">
              {/* Filters / Search */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Right Column: RTO Offices & Contact Details on the Side */}
            <aside 
              id="rto-offices-sidebar-container" 
              className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-1"
            >
              <RTOOfficesSidebar 
                offices={kozhikodeRTOOffices} 
                onFilterCenters={handleFilterFromOffice}
              />
            </aside>

          </div>
        </div>
      </section>

      {/* Mobile Slide-over Drawer for RTO Offices */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 240 }}
              className="relative w-full max-w-md h-full bg-neutral-100 dark:bg-neutral-900 shadow-2xl p-4 overflow-y-auto z-10 flex flex-col"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <Building2 size={18} className="text-emerald-600 dark:text-emerald-400" />
                  <span className="font-bold text-neutral-900 dark:text-neutral-100 text-sm">
                    {t('testingCenters.rtoOfficesTitle')}
                  </span>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <RTOOfficesSidebar 
                offices={kozhikodeRTOOffices} 
                onFilterCenters={handleFilterFromOffice}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
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
          {center.centerCode && (
            <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-mono font-medium">
              {center.centerCode}
            </div>
          )}
          <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium">
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
        className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3">{t('testingCenters.details')}</h4>
            <ul className="space-y-3">
              {center.centerCode && (
                <li className="flex items-center">
                  <Info size={18} className="text-primary-600 dark:text-primary-400 mr-2 shrink-0" />
                  <span className="text-neutral-500 dark:text-neutral-400 mr-1">{t('testingCenters.centerCode')}:</span>
                  <span className="font-mono font-semibold text-neutral-700 dark:text-neutral-300">{center.centerCode}</span>
                </li>
              )}
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-2 shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">{center.address || '-'}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-600 dark:text-primary-400 mr-2 shrink-0" />
                {center.contact ? (
                  <div className="flex flex-wrap items-center gap-x-1">
                    {center.contact.split(',').map((phone, idx, arr) => {
                      const trimmed = phone.trim();
                      return (
                        <span key={idx} className="inline-flex items-center">
                          <a
                            href={`tel:${trimmed}`}
                            className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            {trimmed}
                          </a>
                          {idx < arr.length - 1 && <span className="text-neutral-500 mr-1">,</span>}
                        </span>
                      );
                    })}
                  </div>
                ) : (
                  <span className="text-neutral-700 dark:text-neutral-300">-</span>
                )}
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
              {center.googleMapLinks && center.googleMapLinks.length > 0 ? (
                center.googleMapLinks.map((link, idx) => {
                  const mapHref = link.startsWith('http') ? link : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(link)}`;
                  return (
                    <li key={idx} className="flex items-center">
                      <MapPin size={18} className="text-green-600 dark:text-green-400 mr-2 shrink-0" />
                      <a
                        href={mapHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline font-medium"
                      >
                        View on Google Maps {center.googleMapLinks!.length > 1 ? `(Location ${idx + 1})` : ''} <ExternalLink size={14} />
                      </a>
                    </li>
                  );
                })
              ) : center.googleMapLink ? (
                <li className="flex items-center">
                  <MapPin size={18} className="text-green-600 dark:text-green-400 mr-2 shrink-0" />
                  <a
                    href={center.googleMapLink.startsWith('http') ? center.googleMapLink : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.googleMapLink)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline font-medium"
                  >
                    View on Google Maps <ExternalLink size={14} />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
          <div>
            {center.image && (
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src={center.image}
                  alt={center.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = '1';
                      if (target.src.endsWith('.jpeg')) {
                        target.src = target.src.replace(/\.jpeg$/, '.jpg');
                        return;
                      }
                      if (target.src.endsWith('.jpg')) {
                        target.src = target.src.replace(/\.jpg$/, '.jpeg');
                        return;
                      }
                    }
                    if (!target.dataset.triedSecondFallback) {
                      target.dataset.triedSecondFallback = '1';
                      if (target.src.toLowerCase().includes('westernpuccenter')) {
                        target.src = '/westernpuccenter.JPG';
                        return;
                      }
                      if (target.src.includes('valappilpollutiontestingcenters.jpg')) {
                        target.src = '/valappilpolutiontestingcenters.jpg';
                        return;
                      }
                      if (target.src.includes('venkwateshwarapollutioncenter.jpg')) {
                        target.src = '/venkateshwarapollutioncenter.jpg';
                        return;
                      }
                      if (target.src.includes('mtspollutiontestingcentre.jpg')) {
                        target.src = '/mtspollutiontestingcenter.jpg';
                        return;
                      }
                    }
                    if (target.parentElement) {
                      target.parentElement.style.display = 'none';
                    } else {
                      target.style.display = 'none';
                    }
                  }}
                  className="w-full h-64 object-contain bg-neutral-100 dark:bg-neutral-700 rounded-lg"
                />
              </div>
            )}
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
            {center.vehicleTypes && center.vehicleTypes.length > 0 && (
              <div className="mt-4">
                <h5 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">{t('testingCenters.vehicleTypes')}</h5>
                <div className="flex flex-wrap gap-2">
                  {center.vehicleTypes.map((vt, i) => (
                    <span key={i} className="bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded text-xs font-medium">
                      {vt}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestingCentersPage;
