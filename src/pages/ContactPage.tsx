import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { useLanguage } from '../context/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <main className="pb-16">
      <PageHeader
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        image="https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">{t('contact.title')}</h2>
              
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-6 mb-8">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin size={24} className="text-primary-600 dark:text-primary-400 mt-1 mr-4 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.address')}</h3>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        VEOTA Kerala<br />
                        TC 25/2342, Sasthamangalam P.O<br />
                        Thiruvananthapuram, Kerala 695010
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone size={24} className="text-primary-600 dark:text-primary-400 mt-1 mr-4 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.phone')}</h3>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        <a href="tel:+919876543210" className="hover:text-primary-600 dark:hover:text-primary-400">
                          +91 9876543210
                        </a><br />
                        <a href="tel:+919876543211" className="hover:text-primary-600 dark:hover:text-primary-400">
                          +91 9876543211
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail size={24} className="text-primary-600 dark:text-primary-400 mt-1 mr-4 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.email')}</h3>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        <a href="mailto:info@veotakerala.org" className="hover:text-primary-600 dark:hover:text-primary-400">
                          info@veotakerala.org
                        </a><br />
                        <a href="mailto:support@veotakerala.org" className="hover:text-primary-600 dark:hover:text-primary-400">
                          support@veotakerala.org
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Map */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-2">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    title="VEOTA Kerala Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126931.66373132048!2d76.81565858036993!3d8.499608086962906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1689919463723!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">{t('contact.sendMessage')}</h2>
              
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      {t('contact.form.name')} <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      {t('contact.form.email')} <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      {t('contact.form.subject')} <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      {t('contact.form.message')} <span className="text-error-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                    ></textarea>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting' || formStatus === 'success'}
                      className={`w-full btn btn-primary flex items-center justify-center transition-all ${
                        formStatus === 'submitting' ? 'opacity-70 cursor-wait' : ''
                      } ${formStatus === 'success' ? 'bg-success-500 hover:bg-success-600 focus:ring-success-400' : ''}`}
                    >
                      {formStatus === 'submitting' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                            <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : formStatus === 'success' ? (
                        <span className="flex items-center">
                          Message Sent Successfully
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={16} className="mr-2" />
                          {t('contact.form.submit')}
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;