import React from 'react';
import { motion } from 'framer-motion';
import { Activity, AlertCircle, Award, Clock, ShieldCheck, User } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary-600 mb-4" />,
    title: 'Quality Assurance',
    description: 'Ensuring high standards of testing across all centers',
  },
  {
    icon: <Activity className="w-10 h-10 text-primary-600 mb-4" />,
    title: 'Accurate Testing',
    description: 'Using modern equipment for precise emission measurements',
  },
  {
    icon: <Award className="w-10 h-10 text-primary-600 mb-4" />,
    title: 'Certified Centers',
    description: 'All testing centers are certified and regularly audited',
  },
  {
    icon: <User className="w-10 h-10 text-primary-600 mb-4" />,
    title: 'Professional Staff',
    description: 'Trained technicians to handle all types of vehicles',
  },
  {
    icon: <Clock className="w-10 h-10 text-primary-600 mb-4" />,
    title: 'Quick Service',
    description: 'Fast and efficient testing with minimal waiting time',
  },
  {
    icon: <AlertCircle className="w-10 h-10 text-primary-600 mb-4" />,
    title: 'Environmental Focus',
    description: 'Contributing to a cleaner and healthier environment',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('home.services.title')}</h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {t('home.services.description')}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-soft text-center"
              variants={item}
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;