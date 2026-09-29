import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Search, Filter, ExternalLink, X, FileText, Calendar, Building2, ArrowRight, FileCheck } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { governmentOrders } from '../data';
import { useLanguage } from '../context/LanguageContext';

const GovernmentOrdersPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(governmentOrders.map(order => order.category)))];
  }, []);

  // Filter orders based on search query and category
  const filteredOrders = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const qClean = q.replace(/[-\s]/g, '');
    const qNoZeros = qClean.replace(/0+/g, '');

    return governmentOrders.filter(order => {
      // Category match
      const matchesCategory = selectedCategory === 'All' || selectedCategory === '' || order.category === selectedCategory;
      if (!matchesCategory) return false;

      // If no search query, return category match
      if (!q) return true;

      // Fields to search in
      const fields = [
        order.title,
        order.number,
        order.summary,
        order.category,
        order.badge || '',
        order.date
      ].map(f => f.toLowerCase());

      // Direct substring match
      if (fields.some(f => f.includes(q))) return true;

      // Cleaned comparison (spaces/hyphens removed)
      if (qClean.length > 0) {
        if (fields.some(f => f.replace(/[-\s]/g, '').includes(qClean))) return true;
        // Zero-normalized comparison (e.g. searching "kl11" matches "KL-011")
        if (qNoZeros.length >= 2 && fields.some(f => f.replace(/[-\s]/g, '').replace(/0+/g, '').includes(qNoZeros))) {
          return true;
        }
      }

      // Keyword associations
      if ((q === '11' || q === '011') && order.number.includes('011')) return true;
      if ((q === '57' || q === '057') && order.number.includes('057')) return true;
      if ((q === '76' || q === '076') && order.number.includes('076')) return true;
      if (q.includes('calicut') && (order.number.includes('011') || order.number.includes('DTC'))) return true;

      return false;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="pb-16 min-h-screen">
      <PageHeader
        title={t('governmentOrders.title')}
        subtitle={t('governmentOrders.subtitle')}
        image="/govorders.jpeg"
      />

      <section className="py-12">
        <div className="container-custom">
          {/* Quick Notice to Forms */}
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-primary-50 to-emerald-50 dark:from-neutral-800 dark:to-neutral-800 border border-primary-200/80 dark:border-neutral-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 shrink-0">
                <FileCheck size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Looking for Norms Incorrect or Bharat Stage (BS) Change Forms?
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Download official application forms directly from our dedicated Forms section.
                </p>
              </div>
            </div>
            <Link
              to="/forms"
              className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-xs transition-colors shrink-0"
            >
              <span>Download Forms</span>
              <ArrowRight size={14} className="ml-1.5" />
            </Link>
          </div>

          {/* Search, Filter & Quick Pills */}
          <div className="mb-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Bar */}
              <div className="relative md:col-span-2">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search orders, guidelines, circular, fee, KL codes (KL-11, KL-57, KL-76)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 py-3 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm"
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

              {/* Category Dropdown */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                  <Filter size={18} />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition shadow-sm appearance-none cursor-pointer"
                >
                  <option value="All">All Categories ({governmentOrders.length})</option>
                  {categories.filter(cat => cat !== 'All').map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Filter Category Chips */}
            <div className="flex flex-wrap gap-2 pt-1 items-center">
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mr-1">
                Filter:
              </span>
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-primary-600 text-white shadow-sm ring-2 ring-primary-300 dark:ring-primary-900'
                        : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="text-xs text-primary-600 dark:text-primary-400 hover:underline ml-2"
                >
                  Reset filter
                </button>
              )}
            </div>

            {/* Results count status */}
            <div className="flex justify-between items-center text-xs text-neutral-500 dark:text-neutral-400 px-1">
              <span>
                Showing <strong className="text-neutral-700 dark:text-neutral-200">{filteredOrders.length}</strong> of {governmentOrders.length} documents
              </span>
              {searchQuery && (
                <span>
                  Search results for "<span className="italic text-primary-600 dark:text-primary-400">{searchQuery}</span>"
                </span>
              )}
            </div>
          </div>

          {/* Desktop Table View (Hidden on mobile) */}
          <div className="hidden md:block bg-white dark:bg-neutral-800 rounded-xl shadow-soft border border-neutral-200/80 dark:border-neutral-700/80 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                <thead className="bg-neutral-50 dark:bg-neutral-750">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
                      {t('governmentOrders.orderNumber')}
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
                      {t('governmentOrders.title')}
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
                      {t('governmentOrders.date')}
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
                      {t('governmentOrders.category')}
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
                      {t('governmentOrders.summary')}
                    </th>
                    <th scope="col" className="px-6 py-4 text-center text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order, index) => {
                      const isDistrictList = order.id === 'go-pucc-dtc-kozhikode';
                      return (
                        <motion.tr
                          key={order.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: index * 0.04 }}
                          className={`hover:bg-neutral-50 dark:hover:bg-neutral-750/70 transition-colors ${
                            isDistrictList ? 'bg-amber-50/30 dark:bg-amber-950/10' : ''
                          }`}
                        >
                          {/* Order Number / Code */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold tracking-wide ${
                                isDistrictList
                                  ? 'bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/50'
                                  : 'bg-primary-100 text-primary-900 dark:bg-primary-900/40 dark:text-primary-300 border border-primary-200 dark:border-primary-800'
                              }`}
                            >
                              <Building2 size={13} className="mr-1.5 opacity-80" />
                              {order.number}
                            </span>
                          </td>

                          {/* Title */}
                          <td className="px-6 py-4">
                            <div className="font-semibold text-neutral-900 dark:text-neutral-100 flex items-center flex-wrap gap-1.5">
                              <FileText size={16} className="text-primary-600 dark:text-primary-400 shrink-0" />
                              <span>{order.title}</span>
                              {order.badge && (
                                <span className="ml-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                                  {order.badge}
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Date */}
                          <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-600 dark:text-neutral-400">
                            <div className="flex items-center">
                              <Calendar size={13} className="mr-1.5 opacity-70" />
                              {order.date}
                            </div>
                          </td>

                          {/* Category */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
                              {order.category}
                            </span>
                          </td>

                          {/* Summary */}
                          <td className="px-6 py-4 text-xs text-neutral-600 dark:text-neutral-300 max-w-xs leading-relaxed">
                            {order.summary}
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            <div className="flex items-center justify-center space-x-2">
                              <a
                                href={encodeURI(order.documentUrl)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-50 hover:bg-primary-100 text-primary-700 dark:bg-primary-950/50 dark:hover:bg-primary-900/60 dark:text-primary-300 border border-primary-200 dark:border-primary-800 transition shadow-xs"
                                title="Open document in new tab"
                              >
                                <ExternalLink size={14} className="mr-1.5" />
                                {t('governmentOrders.viewDocument')}
                              </a>
                              <a
                                href={encodeURI(order.documentUrl)}
                                download
                                className="inline-flex items-center p-1.5 rounded-lg text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-750 dark:hover:bg-neutral-700 transition"
                                title="Download PDF"
                                aria-label="Download PDF"
                              >
                                <Download size={15} />
                              </a>
                            </div>
                          </td>
                        </motion.tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-neutral-500 dark:text-neutral-400">
                        <FileText size={36} className="mx-auto mb-2 text-neutral-400 opacity-60" />
                        <p className="text-sm font-medium">{t('common.noResults')}</p>
                        <p className="text-xs text-neutral-400 mt-1">Try adjusting your search terms or filters</p>
                        <button
                          onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                          className="mt-3 px-3 py-1 rounded bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs font-medium"
                        >
                          Clear Filters
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View (Visible on small screens) */}
          <div className="md:hidden space-y-4">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => {
                const isDistrictList = order.id === 'go-pucc-dtc-kozhikode';
                return (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className={`bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-soft border transition ${
                      isDistrictList
                        ? 'border-amber-300 dark:border-amber-700/60 bg-gradient-to-br from-amber-50/20 to-transparent'
                        : 'border-neutral-200 dark:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                          isDistrictList
                            ? 'bg-amber-100 text-amber-900 dark:bg-amber-900/50 dark:text-amber-300'
                            : 'bg-primary-100 text-primary-900 dark:bg-primary-900/40 dark:text-primary-300'
                        }`}
                      >
                        <Building2 size={12} className="mr-1" />
                        {order.number}
                      </span>
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {order.date}
                      </span>
                    </div>

                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm mb-1.5 flex items-start gap-1.5">
                      <FileText size={16} className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                      <span>{order.title}</span>
                    </h3>

                    {order.badge && (
                      <div className="mb-2">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                          {order.badge}
                        </span>
                      </div>
                    )}

                    <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-3 leading-relaxed">
                      {order.summary}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-neutral-150 dark:border-neutral-750">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
                        {order.category}
                      </span>

                      <div className="flex items-center gap-2">
                        <a
                          href={encodeURI(order.documentUrl)}
                          download
                          className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 transition"
                          title="Download PDF"
                          aria-label="Download PDF"
                        >
                          <Download size={15} />
                        </a>
                        <a
                          href={encodeURI(order.documentUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-600 hover:bg-primary-700 text-white transition shadow-xs"
                        >
                          <ExternalLink size={13} className="mr-1.5" />
                          {t('governmentOrders.viewDocument')}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 text-center border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400">
                <FileText size={32} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm font-medium">{t('common.noResults')}</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="mt-3 px-3 py-1 rounded bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GovernmentOrdersPage;