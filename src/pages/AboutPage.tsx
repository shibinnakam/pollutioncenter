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
              <div className="mt-6 p-4 bg-primary-50 dark:bg-neutral-800 rounded-lg border border-primary-100 dark:border-neutral-700">
                <span className="text-xs uppercase font-bold text-primary-700 dark:text-primary-400 block mb-1">
                  Registered Association
                </span>
                <p className="text-sm font-bold text-neutral-900 dark:text-white">
                  Reg: No: KKD/CD/342/2020
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 leading-relaxed">
                  Room No: 8/19368, Prakash Building, Ghandhi Ashramam, Civil Station (Po), Kozhikode - 673020
                </p>
                <div className="mt-2 pt-2 border-t border-primary-100 dark:border-neutral-700 flex flex-wrap gap-4 text-xs text-neutral-600 dark:text-neutral-300">
                  <span>Ph: <a href="tel:04953554596" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">0495-3554596</a></span>
                  <span>Email: <a href="mailto:emissiontesting2020@gmail.com" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">emissiontesting2020@gmail.com</a></span>
                </div>
              </div>
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
            <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">Our Leadership</h2>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              Meet the dedicated team that leads VEOTA Kerala and Kozhikode District in its mission to ensure quality emission testing and environmental compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                name: 'Dr. A. Neelalohitha dasan Naadar Ex. M . P',
                role: 'State President',
                image: '/neelalohithadasannadar.jpeg',
                description: 'Former Minister & Ex. Member of Parliament, leading VEOTA Kerala with distinguished leadership.',
                imagePosition: 'object-top'
              },
              {
                name: 'Krishnan Ambady',
                role: 'State General Secretary',
                image: '/person7.jpg',
                description: 'State General Secretary, spearheading statewide administration and association coordination.',
                imagePosition: 'object-center'
              },
              {
                name: 'Premraj M P',
                role: 'District President',
                image: '/districtpresident.jpeg',
                description: 'President of VETOA Kozhikode District Committee, leading district welfare and compliance initiatives.',
                imagePosition: 'object-top'
              },
              {
                name: 'Joys M Joy',
                role: 'District Secretary',
                image: '/districtsecratary.jpeg',
                description: 'Secretary of VETOA Kozhikode District Committee, driving operational excellence and member support.',
                imagePosition: 'object-center'
              },
              {
                name: 'Sangeetha Pradheep',
                role: 'District Treasurer',
                image: '/districttressur.jpeg',
                description: 'Treasurer of VETOA Kozhikode District Committee, managing organizational finances with integrity.',
                imagePosition: 'object-center'
              },
              {
                name: 'Muhammad Sherief',
                role: 'State Treasurer',
                image: '/person6.jpg',
                description: 'State Treasurer, managing financial affairs and organizational resources with integrity.',
                imagePosition: 'object-center'
              },
              {
                name: 'Muhammed Kunji',
                role: 'Vice-President',
                image: '/person2.jpg',
                description: 'Guiding environmental emission compliance and member welfare initiatives across the region.',
                imagePosition: 'object-center'
              },
              {
                name: 'KPA Razak',
                role: 'Vice-President',
                image: '/person4.jpg',
                description: 'Advancing testing equipment standards, regulatory compliance, and regional representation.',
                imagePosition: 'object-center'
              },
              {
                name: 'Veli Pramod',
                role: 'Vice-President',
                image: '/person3.jpg',
                description: 'Supporting organizational growth, member relations, and committee development activities.',
                imagePosition: 'object-center'
              },
              {
                name: 'Suvin Sagar',
                role: 'Technical Advisor',
                image: '/person1.jpg',
                description: 'Automotive engineer specializing in emission control systems and testing equipment.',
                imagePosition: 'object-center'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-700 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden text-center flex flex-col group border border-neutral-100 dark:border-neutral-600"
              >
                <div className="relative overflow-hidden h-64 bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${member.imagePosition}`}
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-3">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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

    </main>
  );
};

export default AboutPage;