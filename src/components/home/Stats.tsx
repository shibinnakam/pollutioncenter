import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '100+', label: 'Testing Centers' },
  { value: '14', label: 'Districts Covered' },
  { value: '6', label: 'Years of Service' },
  { value: '1M+', label: 'Vehicles Tested' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-700">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-500 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;