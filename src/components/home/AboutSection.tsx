import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/10 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-500/10 rounded-lg z-0"></div>
              <img
                src="https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="VEOTA Kerala team meeting"
                className="rounded-lg shadow-soft relative z-10 w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">{t('home.mission.title')}</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              {t('home.mission.description')}
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-primary-600 w-5 h-5 mr-2 mt-1 shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">
                  Supporting emission testing center owners through advocacy and training
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary-600 w-5 h-5 mr-2 mt-1 shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">
                  Ensuring compliance with environmental regulations and government guidelines
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary-600 w-5 h-5 mr-2 mt-1 shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">
                  Working with government agencies to implement effective pollution control measures
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary-600 w-5 h-5 mr-2 mt-1 shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">
                  Promoting sustainable practices in vehicle emission testing industry
                </span>
              </li>
            </ul>

            <div>
              <Link to="/about" className="btn btn-primary mt-4">
                {t('common.readMore')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;