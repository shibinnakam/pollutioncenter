import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Clock } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { useLanguage } from '../context/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pb-16">
      <PageHeader
        title={t('about.title')}
        subtitle={t('about.intro')}
        image="https://images.pexels.com/photos/3807318/pexels-photo-3807318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* History Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">{t('about.history')}</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {t('about.history.content')}
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                Since its formation, VEOTA Kerala has been instrumental in representing the interests of emission testing center owners before government authorities. The association has grown from a small group of testing center owners to a statewide organization with members from all districts in Kerala.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-first md:order-last"
            >
              <img
                src="/cmvetoa.jpeg"
                alt="VEOTA Kerala History"
                className="rounded-lg shadow-soft w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      
      
      {/* Leadership */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              Meet the dedicated team that leads VEOTA Kerala in its mission to ensure quality emission testing and environmental compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* President */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-700 rounded-lg shadow-soft overflow-hidden text-center"
            >
              <img
                src=""
                alt="Anand Kumar - President"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Anand Kumar</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">President</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  Leading VEOTA Kerala since 2018 with over 20 years of experience in the automotive industry.
                </p>
              </div>
            </motion.div>
            
            {/* Secretary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-700 rounded-lg shadow-soft overflow-hidden text-center"
            >
              <img
                src="/person2.jpg"
                alt="Muhammed Kunji - Vice-President"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Muhammed Kunji</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">Vice-President</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  Environmental engineer with extensive experience in emission control technologies.
                </p>
              </div>
            </motion.div>
             {/* Secretary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-700 rounded-lg shadow-soft overflow-hidden text-center"
            >
              <img
                src="/person4.jpg"
                alt="KPA Razak - Vice-President"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">KPA Razak</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">Vice-President</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  Environmental engineer with extensive experience in emission control technologies.
                </p>
              </div>
            </motion.div>
             {/* Secretary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-700 rounded-lg shadow-soft overflow-hidden text-center"
            >
              <img
                src="/person3.jpg"
                alt="Veli Pramod - Vice-President"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Veli Pramod</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">Vice-President</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  Environmental engineer with extensive experience in emission control technologies.
                </p>
              </div>
            </motion.div>
            {/* Secretary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-700 rounded-lg shadow-soft overflow-hidden text-center"
            >
              <img
                src="/person7.jpg"
                alt="Krishnan Ambadi - General Secretary"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Krishnan Ambadi</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">General Secretary</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  Environmental engineer with extensive experience in emission control technologies.
                </p>
              </div>
            </motion.div>
            {/* Secretary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-700 rounded-lg shadow-soft overflow-hidden text-center"
            >
              <img
                src="/person5.jpg"
                alt="Joys M Joy - Working Secretary"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Joys M Joy</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">Working Secretary</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  Environmental engineer with extensive experience in emission control technologies.
                </p>
              </div>
            </motion.div>
            
            {/* Treasurer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-700 rounded-lg shadow-soft overflow-hidden text-center"
            >
              <img
                src="/person6.jpg"
                alt="Muhammad Sherief - Treasurer"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Muhammad Sherief</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">Treasurer</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  Financial expert with a strong background in business management and accounting.
                </p>
              </div>
            </motion.div>
            
            {/* Technical Advisor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-700 rounded-lg shadow-soft overflow-hidden text-center"
            >
              <img
                src="/person1.jpg"
                alt="Suvin Sagar- Technical Advisor"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Suvin Sagar</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">Technical Advisor</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  Automotive engineer specializing in emission control systems and testing equipment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Vision and Mission */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-soft"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-full">
                  <Target size={40} className="text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{t('about.vision')}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-center">
                {t('about.vision.content')}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-700 p-8 rounded-lg shadow-soft"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-secondary-100 dark:bg-secondary-900/30 p-4 rounded-full">
                  <Award size={40} className="text-secondary-600 dark:text-secondary-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{t('about.mission')}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-center">
                {t('about.mission.content')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Milestones */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Milestones</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 dark:bg-primary-800 ml-6 md:ml-0 md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* 2005 */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="ml-16 md:ml-0 md:w-1/2 md:pr-10 md:text-right"
                >
                  <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-soft">
                    <h3 className="text-xl font-bold mb-2">2005</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Foundation of VEOTA Kerala with 25 founding members
                    </p>
                  </div>
                </motion.div>
                <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full md:-translate-x-1/2"></div>
              </div>
              
              {/* 2010 */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="ml-16 md:ml-auto md:w-1/2 md:pl-10"
                >
                  <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-soft">
                    <h3 className="text-xl font-bold mb-2">2010</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Expansion to all districts in Kerala with over 100 members
                    </p>
                  </div>
                </motion.div>
                <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full md:-translate-x-1/2"></div>
              </div>
              
              {/* 2015 */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="ml-16 md:ml-0 md:w-1/2 md:pr-10 md:text-right"
                >
                  <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-soft">
                    <h3 className="text-xl font-bold mb-2">2015</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Official recognition by the Kerala State Transport Department
                    </p>
                  </div>
                </motion.div>
                <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full md:-translate-x-1/2"></div>
              </div>
              
              {/* 2020 */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="ml-16 md:ml-auto md:w-1/2 md:pl-10"
                >
                  <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-soft">
                    <h3 className="text-xl font-bold mb-2">2020</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Implemented standardized testing protocols across all member centers
                    </p>
                  </div>
                </motion.div>
                <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full md:-translate-x-1/2"></div>
              </div>
              
              {/* 2023 */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="ml-16 md:ml-0 md:w-1/2 md:pr-10 md:text-right"
                >
                  <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-soft">
                    <h3 className="text-xl font-bold mb-2">2023</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Achieved 300+ member testing centers across Kerala
                    </p>
                  </div>
                </motion.div>
                <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full md:-translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </section>

    </main>
  );
};

export default AboutPage;