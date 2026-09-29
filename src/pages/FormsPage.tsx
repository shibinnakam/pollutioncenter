import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  ExternalLink, 
  FileText, 
  Search, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  FileCheck, 
  Eye, 
  Printer, 
  Building2, 
  HelpCircle,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { officialForms } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const FormsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormForPreview, setSelectedFormForPreview] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredForms = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return officialForms;

    return officialForms.filter(form => {
      const searchFields = [
        form.title,
        form.titleMl || '',
        form.code,
        form.category,
        form.description,
        form.purpose,
        ...form.requirements
      ].map(f => f.toLowerCase());

      return searchFields.some(field => field.includes(q));
    });
  }, [searchQuery]);

  const activePreviewForm = useMemo(() => {
    if (!selectedFormForPreview) return null;
    return officialForms.find(f => f.id === selectedFormForPreview) || null;
  }, [selectedFormForPreview]);

  return (
    <main className="pb-16 min-h-screen bg-neutral-50/50 dark:bg-neutral-900/50">
      <PageHeader
        title={t('forms.title')}
        subtitle={t('forms.subtitle')}
        image="/govorders.jpeg"
      />

      <section className="py-12">
        <div className="container-custom">
          {/* Header Banner & Notice */}
          <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-primary-900 via-primary-800 to-emerald-900 text-white shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                  <ShieldCheck size={14} className="mr-1.5" />
                  Official MVD Application Formats
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {language === 'ml' ? 'വാഹന നോംസ് തിരുത്തൽ & ബി.എസ് മാറ്റൽ ഫോമുകൾ' : 'Norms Correction & BS Change Applications'}
                </h2>
                <p className="text-neutral-200 text-sm md:text-base leading-relaxed">
                  {language === 'ml'
                    ? 'പുക പരിശോധനയിൽ തെറ്റായ നോംസ് കാരണം തടസ്സം നേരിടുമ്പോഴും ഭാരത് സ്റ്റേജ് (BS) അപ്ഡേറ്റ് ചെയ്യുന്നതിനും ആർ.ടി.ഒ ഓഫീസിൽ സമർപ്പിക്കേണ്ട ഔദ്യോഗിക ഫോമുകൾ താഴെ നിന്ന് ഡൗൺലോഡ് ചെയ്യാം.'
                    : 'Download official application forms required for correcting vehicle emission norms and updating Bharat Stage classifications in the Parivahan / Vahan portal.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/government-orders"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all"
                >
                  <FileText size={16} className="mr-2" />
                  {language === 'ml' ? 'സർക്കാർ ഉത്തരവുകൾ കാണുക' : 'Government Orders'}
                </Link>
                <Link
                  to="/testing-centers"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition-all"
                >
                  <Building2 size={16} className="mr-2" />
                  {language === 'ml' ? 'RTO ഓഫീസുകൾ' : 'RTO Offices'}
                </Link>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder={t('forms.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 py-3 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                  title="Clear search"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Forms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredForms.map((form, index) => {
              const isBSForm = form.id === 'form-bs-change';

              return (
                <motion.article
                  key={form.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.1 }}
                  className={`flex flex-col justify-between bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border transition-all duration-300 hover:shadow-xl ${
                    isBSForm 
                      ? 'border-emerald-200 dark:border-emerald-800/60 hover:border-emerald-400' 
                      : 'border-blue-200 dark:border-blue-800/60 hover:border-blue-400'
                  }`}
                >
                  <div className="p-6 md:p-8 space-y-5">
                    {/* Top Meta Header */}
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                        isBSForm 
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
                      }`}>
                        <FileCheck size={14} className="mr-1.5" />
                        {form.badge}
                      </span>
                      <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        <span className="bg-neutral-100 dark:bg-neutral-700/60 px-2 py-0.5 rounded text-neutral-600 dark:text-neutral-300">
                          {form.fileSize}
                        </span>
                        <span>•</span>
                        <span>{form.pageCount}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white leading-snug">
                        {form.title}
                      </h3>
                      {form.titleMl && (
                        <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mt-1">
                          {form.titleMl}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {language === 'ml' && form.descriptionMl ? form.descriptionMl : form.description}
                    </p>

                    {/* Purpose Callout */}
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-750/70 border border-neutral-200/80 dark:border-neutral-700/80 space-y-1">
                      <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-200 flex items-center gap-1.5">
                        <AlertCircle size={14} className="text-amber-500" />
                        {language === 'ml' ? 'ഉപയോഗം:' : 'Purpose / Applicability:'}
                      </span>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300">
                        {language === 'ml' && form.purposeMl ? form.purposeMl : form.purpose}
                      </p>
                    </div>

                    {/* Checklist of Requirements */}
                    <div className="space-y-2.5 pt-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        {language === 'ml' ? 'ഹാജരാക്കേണ്ട രേഖകൾ (Checklist)' : 'Required Attachments Checklist'}
                      </h4>
                      <ul className="space-y-2">
                        {(language === 'ml' && form.requirementsMl ? form.requirementsMl : form.requirements).map((req, i) => (
                          <li key={i} className="flex items-start text-xs text-neutral-700 dark:text-neutral-300 leading-tight">
                            <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mr-2 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 md:p-8 pt-0 border-t border-neutral-100 dark:border-neutral-750 mt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedFormForPreview(form.id)}
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-sm transition-all"
                    >
                      <Eye size={16} className="mr-2" />
                      {t('forms.view')}
                    </button>

                    <a
                      href={encodeURI(form.documentUrl)}
                      download
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
                    >
                      <Download size={16} className="mr-2" />
                      {t('forms.download')}
                    </a>

                    <a
                      href={encodeURI(form.documentUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-750 dark:hover:bg-neutral-700 transition"
                      title="Open full PDF in new tab"
                      aria-label="Open PDF in new tab"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Submission Guidelines Guide */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-soft border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300">
                <HelpCircle size={22} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                  {language === 'ml' ? 'ഫോം പൂരിപ്പിച്ച് സമർപ്പിക്കേണ്ട വിധം' : 'Step-by-Step Submission Procedure'}
                </h3>
                <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
                  {language === 'ml' 
                    ? 'ഈ ഫോമുകൾ പൂരിപ്പിച്ച് ആർ.ടി.ഒ ഓഫീസിൽ എങ്ങനെ സമർപ്പിക്കാം എന്നതിനെക്കുറിച്ചുള്ള വിവരങ്ങൾ'
                    : 'Simple guidelines for submitting Norms Correction & BS Change forms at RTO offices'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-750/50 border border-neutral-200/60 dark:border-neutral-700/60 space-y-2">
                <div className="w-7 h-7 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center text-xs">
                  1
                </div>
                <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                  {language === 'ml' ? 'ഫോം ഡൗൺലോഡ് ചെയ്ത് പ്രിന്റ് എടുക്കുക' : 'Download & Print'}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {language === 'ml'
                    ? 'മുകളിലെ ഡൗൺലോഡ് ബട്ടൺ ക്ലിക്ക് ചെയ്ത് അതാത് ഫോം A4 പേപ്പറിൽ പ്രിന്റ് എടുക്കുക.'
                    : 'Download the required form from above and take a clear printout on standard A4 paper.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-750/50 border border-neutral-200/60 dark:border-neutral-700/60 space-y-2">
                <div className="w-7 h-7 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center text-xs">
                  2
                </div>
                <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                  {language === 'ml' ? 'വിവരങ്ങൾ രേഖപ്പെടുത്തുക' : 'Fill Vehicle Details'}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {language === 'ml'
                    ? 'വാഹനത്തിന്റെ രജിസ്ട്രേഷൻ നമ്പർ, എഞ്ചിൻ നമ്പർ, ഷാസി നമ്പർ, ശരിയായ BS നോംസ് എന്നിവ വ്യക്തമായി എഴുതുക.'
                    : 'Fill in vehicle registration number, engine number, chassis number, and correct Bharat Stage norm.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-750/50 border border-neutral-200/60 dark:border-neutral-700/60 space-y-2">
                <div className="w-7 h-7 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center text-xs">
                  3
                </div>
                <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                  {language === 'ml' ? 'രേഖകൾ ചേർക്കുക' : 'Attach Documents'}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {language === 'ml'
                    ? 'ആർ.സി. ബുക്കിന്റെ പകർപ്പ്, മുൻപത്തെ പുക പരിശോധന സ്ലിപ്പ്, ഉടമയുടെ തിരിച്ചറിയൽ രേഖ എന്നിവ ഒപ്പം വെക്കുക.'
                    : 'Attach self-attested RC copy, latest emission test receipt, and vehicle owner ID copy.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-750/50 border border-neutral-200/60 dark:border-neutral-700/60 space-y-2">
                <div className="w-7 h-7 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center text-xs">
                  4
                </div>
                <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                  {language === 'ml' ? 'RTO ഓഫീസിൽ സമർപ്പിക്കുക' : 'Submit at RTO'}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {language === 'ml'
                    ? 'അതാത് RTO / സബ് RTO ഓഫീസിൽ നേരിട്ട് അപേക്ഷ നൽകി വാഹൻ പോർട്ടലിൽ അപ്ഡേഷൻ നേടുക.'
                    : 'Submit the application at your local RTO / Sub-RTO office to have the Vahan portal updated.'}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                <AlertCircle size={15} className="text-primary-600 shrink-0" />
                <span>
                  {language === 'ml' 
                    ? 'കൂടുതൽ വിവരങ്ങൾക്കും സഹായങ്ങൾക്കും അടുത്തുള്ള അംഗീകൃത VETOA പുക പരിശോധന കേന്ദ്രവുമായോ RTO ഓഫീസുമായോ ബന്ധപ്പെടുക.'
                    : 'For assistance with forms, consult with any authorized VETOA testing center or your local RTO office.'}
                </span>
              </div>
              <Link
                to="/testing-centers"
                className="inline-flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline shrink-0"
              >
                <span>{language === 'ml' ? 'ടെസ്റ്റിംഗ് സെന്ററുകൾ കണ്ടെത്തുക' : 'Find Testing Centers'}</span>
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* In-page PDF Preview Modal */}
      <AnimatePresence>
        {activePreviewForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-neutral-300 dark:border-neutral-700"
            >
              {/* Modal Header */}
              <div className="p-4 sm:px-6 py-3.5 bg-neutral-100 dark:bg-neutral-750 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <FileText className="text-primary-600 dark:text-primary-400 shrink-0" size={20} />
                  <div className="truncate">
                    <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white truncate">
                      {activePreviewForm.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {activePreviewForm.badge} • {activePreviewForm.fileSize}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={encodeURI(activePreviewForm.documentUrl)}
                    download
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-sm"
                  >
                    <Download size={14} className="mr-1.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <a
                    href={encodeURI(activePreviewForm.documentUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-600 hover:bg-primary-700 text-white transition shadow-sm"
                  >
                    <ExternalLink size={14} className="mr-1.5" />
                    <span className="hidden sm:inline">Open Fullscreen</span>
                  </a>
                  <button
                    onClick={() => setSelectedFormForPreview(null)}
                    className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
                    title="Close"
                    aria-label="Close Preview"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Preview Frame */}
              <div className="flex-1 w-full bg-neutral-200 dark:bg-neutral-900 relative">
                <iframe
                  src={`${encodeURI(activePreviewForm.documentUrl)}#toolbar=1&navpanes=0`}
                  title={activePreviewForm.title}
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:px-6 bg-neutral-50 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between text-xs text-neutral-500">
                <span>Official PDF Document from Motor Vehicles Department</span>
                <button
                  onClick={() => setSelectedFormForPreview(null)}
                  className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default FormsPage;
