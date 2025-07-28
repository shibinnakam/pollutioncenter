import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-600 dark:bg-primary-700 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/80 to-secondary-700/80" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="6,6"
              d="M0,0 L100,100 M100,0 L0,100"
            />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Association Today
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Become a member of VEOTA Kerala and benefit from our advocacy, 
            support, and resources for emission testing center owners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-neutral-100">
              {t('contact.title')}
            </Link>
            <Link to="/request-form" className="btn border border-white text-white hover:bg-white/20">
              {t('requestForm.title')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;