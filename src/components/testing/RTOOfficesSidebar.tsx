import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Search, 
  Info, 
  AlertTriangle,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { RTOOfficeInfo } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface RTOOfficesSidebarProps {
  offices: RTOOfficeInfo[];
  selectedOfficeId?: string | null;
  onSelectOffice?: (office: RTOOfficeInfo) => void;
  onFilterCenters?: (office: RTOOfficeInfo) => void;
  className?: string;
}

export const RTOOfficesSidebar: React.FC<RTOOfficesSidebarProps> = ({
  offices,
  onFilterCenters,
  className = ''
}) => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'ALL' | 'RTO' | 'SRTO'>('ALL');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const filteredOffices = offices.filter((office) => {
    const matchesType =
      filterType === 'ALL' ? true : office.type === filterType;

    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesType;

    const matchesSearch =
      office.name.toLowerCase().includes(query) ||
      (office.nameMl && office.nameMl.toLowerCase().includes(query)) ||
      office.code.toLowerCase().includes(query) ||
      office.address.toLowerCase().includes(query) ||
      (office.location && office.location.toLowerCase().includes(query)) ||
      office.phone.toLowerCase().includes(query) ||
      office.email.toLowerCase().includes(query) ||
      (office.pin && office.pin.includes(query));

    return matchesType && matchesSearch;
  });

  return (
    <div className={`flex flex-col space-y-4 ${className}`} id="rto-offices-section">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-slate-900 via-neutral-900 to-emerald-950 text-white p-5 rounded-2xl shadow-lg border border-emerald-900/40 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <Building2 size={13} className="text-emerald-400" />
              <span>{t('testingCenters.rtoOfficesDistrict')}</span>
            </div>
            <span className="text-xs text-neutral-400 font-mono">
              {offices.length} Offices
            </span>
          </div>

          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            {t('testingCenters.rtoOfficesTitle')}
          </h2>

          {/* CRITICAL NOTICE: NOT A TESTING CENTER */}
          <div className="mt-3.5 p-3 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-200">
            <div className="flex items-start gap-2.5">
              <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed">
                <span className="font-bold text-amber-300 block mb-0.5">
                  {t('testingCenters.rtoOfficesNotice')}
                </span>
                <span className="text-amber-200/90">
                  {t('testingCenters.rtoOfficesNoticeDesc')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white dark:bg-neutral-800 p-3.5 rounded-xl shadow-soft border border-neutral-200 dark:border-neutral-700/80 space-y-3">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder={t('testingCenters.searchRTOOffices')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 px-1.5 py-0.5 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 text-xs">
          <Filter size={13} className="text-neutral-400 shrink-0 ml-0.5" />
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setFilterType('ALL')}
              className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                filterType === 'ALL'
                  ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-sm'
                  : 'bg-neutral-100 dark:bg-neutral-700/60 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              All ({offices.length})
            </button>
            <button
              onClick={() => setFilterType('RTO')}
              className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                filterType === 'RTO'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-neutral-100 dark:bg-neutral-700/60 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              RTO (2)
            </button>
            <button
              onClick={() => setFilterType('SRTO')}
              className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                filterType === 'SRTO'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-neutral-100 dark:bg-neutral-700/60 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              Sub RTO (5)
            </button>
          </div>
        </div>
      </div>

      {/* Offices List */}
      <div className="space-y-3.5">
        {filteredOffices.length === 0 ? (
          <div className="p-6 text-center bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700/80">
            <Info size={28} className="mx-auto text-neutral-400 mb-2" />
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              No matching RTO offices found
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Try searching with another keyword like "Kozhikode", "KL 11", or "Feroke"
            </p>
          </div>
        ) : (
          filteredOffices.map((office, idx) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className="group bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-soft hover:shadow-md border border-neutral-200/90 dark:border-neutral-700/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200"
            >
              {/* Card Header: Title & Code Badge */}
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                        office.type === 'RTO'
                          ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50'
                          : 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50'
                      }`}
                    >
                      {office.type === 'RTO' ? t('testingCenters.mainRTO') : t('testingCenters.subRTO')}
                    </span>
                    {office.pin && (
                      <span className="text-[11px] font-mono text-neutral-400">
                        PIN: {office.pin}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mt-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {language === 'ml' && office.nameMl ? office.nameMl : office.name}
                  </h3>
                  {language === 'ml' && office.nameMl && (
                    <div className="text-xs text-neutral-500 font-medium">{office.name}</div>
                  )}
                </div>

                {/* RTO Code Badge */}
                <div className="shrink-0 text-right">
                  <div className="bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 px-2.5 py-1 rounded-md text-xs font-mono font-bold shadow-sm">
                    {office.code}
                  </div>
                </div>
              </div>

              {/* Office Details */}
              <div className="space-y-2 text-xs pt-2 border-t border-neutral-100 dark:border-neutral-700/60">
                {/* Phone */}
                <div className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                  <Phone size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="flex flex-wrap items-center gap-1.5">
                    <a
                      href={`tel:${office.phone.replace(/[^0-9]/g, '')}`}
                      className="font-medium hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline font-mono"
                      title={t('testingCenters.callOffice')}
                    >
                      {office.phone}
                    </a>
                    {office.additionalPhones && office.additionalPhones.map((p, pIdx) => (
                      <span key={pIdx} className="inline-flex items-center gap-1">
                        <span className="text-neutral-400">/</span>
                        <a
                          href={`tel:${p.replace(/[^0-9]/g, '')}`}
                          className="font-medium hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline font-mono"
                          title={t('testingCenters.callOffice')}
                        >
                          {p}
                        </a>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between gap-2 text-neutral-700 dark:text-neutral-300">
                  <div className="flex items-center gap-2 truncate">
                    <Mail size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="truncate hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline font-mono"
                      title="Send email"
                    >
                      {office.email}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopyEmail(office.email)}
                    className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors shrink-0"
                    title={copiedEmail === office.email ? t('testingCenters.emailCopied') : t('testingCenters.copyEmail')}
                    aria-label="Copy email address"
                  >
                    {copiedEmail === office.email ? (
                      <Check size={13} className="text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy size={13} />
                    )}
                  </button>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400">
                  <MapPin size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    {office.address}
                  </span>
                </div>
              </div>

              {/* Action Link: Google Maps and Call */}
              <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${office.name}, ${office.address}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline transition-colors"
                >
                  <span>{t('testingCenters.viewOnMap')}</span>
                  <ArrowUpRight size={13} />
                </a>

                <div className="flex items-center gap-2">
                  {onFilterCenters && (
                    <button
                      type="button"
                      onClick={() => onFilterCenters(office)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-700/80 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 font-medium text-[11px] transition-colors"
                      title="Filter authorized testing centers under this RTO"
                    >
                      <span>Testing Centers</span>
                      <ArrowUpRight size={11} />
                    </button>
                  )}
                  <a
                    href={`tel:${office.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 font-semibold text-[11px] transition-colors"
                  >
                    <Phone size={11} />
                    <span>{t('testingCenters.callOffice')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Helpful footer footnote */}
      <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 text-[11px] text-neutral-500 dark:text-neutral-400 text-center">
        Data verified for Kozhikode District Motor Vehicles Department (MVD) RTO Offices.
      </div>
    </div>
  );
};

export default RTOOfficesSidebar;
