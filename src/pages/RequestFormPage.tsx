import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { rtoDistricts } from '../data';
import { useLanguage } from '../context/LanguageContext';

const RequestFormPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    rto: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          contact: '',
          rto: '',
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
        title={t('requestForm.title')}
        subtitle={t('requestForm.subtitle')}
        image="https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-8"
          >
            <div className="mb-6">
              <div className="flex items-start p-4 border-l-4 border-secondary-500 bg-secondary-50 dark:bg-secondary-900/20 rounded-r-md">
                <AlertCircle size={24} className="text-secondary-600 dark:text-secondary-400 mr-3 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-secondary-800 dark:text-secondary-300 font-medium mb-1">Important Note</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    This form is specifically for admin-related requests and concerns. For general inquiries, please use the 
                    <a href="/contact" className="text-secondary-600 dark:text-secondary-400 hover:underline mx-1">contact form</a>
                    instead.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    {t('requestForm.form.name')} <span className="text-error-500">*</span>
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
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    {t('requestForm.form.email')} <span className="text-error-500">*</span>
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
                
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    {t('requestForm.form.contact')}
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="rto" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    {t('requestForm.form.rto')}
                  </label>
                  <select
                    id="rto"
                    name="rto"
                    value={formData.rto}
                    onChange={handleChange}
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                  >
                    <option value="">Select RTO District</option>
                    {rtoDistricts.map(district => (
                      <option key={district.id} value={district.id}>
                        {district.code} - {district.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  {t('requestForm.form.subject')} <span className="text-error-500">*</span>
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
              
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  {t('requestForm.form.message')} <span className="text-error-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                ></textarea>
              </div>
              
              <div className="mt-8">
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
                      Submitting...
                    </span>
                  ) : formStatus === 'success' ? (
                    <span className="flex items-center">
                      Request Submitted Successfully
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={16} className="mr-2" />
                      {t('requestForm.form.submit')}
                    </span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default RequestFormPage;