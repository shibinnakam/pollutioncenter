import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileCheck2, Copy, Check, Printer, ShieldCheck } from 'lucide-react';
import { puccRenewalDocuments } from '../../data';
import { useLanguage } from '../../context/LanguageContext';

interface PuccRenewalChecklistProps {
  className?: string;
  compact?: boolean;
}

export const PuccRenewalChecklist: React.FC<PuccRenewalChecklistProps> = ({
  className = '',
  compact = false
}) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyList = () => {
    const text = [
      'PUCC RENEWAL - DOCUMENTS NEEDED:',
      ...puccRenewalDocuments.map((doc) => `${doc.id}. ${doc.title}`)
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      id="pucc-renewal-documents"
      className={`bg-white dark:bg-neutral-800 rounded-2xl shadow-soft border border-emerald-200 dark:border-emerald-800/60 overflow-hidden ${className}`}
    >
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-primary-900 to-slate-900 text-white p-5 sm:p-6 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-400/15 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <ShieldCheck size={14} />
              <span>
                {language === 'ml'
                  ? 'സൈറ്റ് വിവരങ്ങൾ • PUCC ലൈസൻസ് പുതുക്കൽ'
                  : 'Site Information • Center License Renewal'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <FileCheck2 size={24} className="text-emerald-400 shrink-0" />
              <span>
                {language === 'ml'
                  ? 'PUCC RENEWAL — ആവശ്യമായ രേഖകൾ (Documents Needed)'
                  : 'PUCC RENEWAL — Documents Needed'}
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-200">
              {language === 'ml'
                ? 'പുക പരിശോധനാ കേന്ദ്രങ്ങളുടെ (PUCC) ലൈസൻസ് പുതുക്കുന്നതിനായി ഹാജരാക്കേണ്ട 13 രേഖകളുടെ പട്ടിക'
                : 'Complete checklist of mandatory documents and details required for Pollution Testing Center (PUCC) license renewal'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopyList}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              title="Copy document checklist"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy List</span>
                </>
              )}
            </button>
            {!compact && (
              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
                title="Print checklist"
              >
                <Printer size={14} />
                <span>Print</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {puccRenewalDocuments.map((doc) => (
            <div
              key={doc.id}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-750/60 border border-neutral-200/80 dark:border-neutral-700/80 hover:border-emerald-400 dark:hover:border-emerald-500/60 transition-colors"
            >
              <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                {doc.id}
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 leading-snug">
                  {doc.title}
                </div>
                {doc.titleMl && (
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 leading-snug">
                    {doc.titleMl}
                  </div>
                )}
              </div>
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1 opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PuccRenewalChecklist;

