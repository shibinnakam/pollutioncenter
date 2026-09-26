import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Building2, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { rtoDistricts } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppAuthoritySection } from '../components/ui/WhatsAppAuthorityCard';

const RequestFormPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    enquiryType: 'Add New Pollution Testing Center',
    centerName: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const encode = (data: { [key: string]: string }) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "request-form", ...formData })
      });

      if (response.ok) {
        setFormStatus('success');
        setTimeout(() => {
          setFormData({
            enquiryType: 'Add New Pollution Testing Center',
            centerName: '',
            name: '',
            email: '',
            contact: '',
            rto: '',
            subject: '',
            message: ''
          });
          setFormStatus('idle');
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Request form submission error:", error);
      setFormStatus('error');
    }
  };

  return (
    <main className="pb-16">
      <PageHeader
        title={t('requestForm.title')}
        subtitle={t('requestForm.subtitle')}
        image="https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          {/* Quick Direct WhatsApp Support for Testing Centers */}
          <div className="mb-10">
            <WhatsAppAuthoritySection
              title="Add Center / Inquire Instantly via WhatsApp"
              subtitle="Testing Center owners can send center details, license copy, and enquiries directly to our secretaries on WhatsApp for immediate onboarding."
              contextMode="center-enquiry"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-6 md:p-8"
          >
            {/* Informational Guidance Header */}
            <div className="mb-8">
              <div className="flex items-start p-4 border-l-4 border-primary-500 bg-primary-50 dark:bg-primary-950/30 rounded-r-md">
                <Building2 size={24} className="text-primary-600 dark:text-primary-400 mr-3 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-primary-900 dark:text-primary-200 font-bold mb-1">
                    Pollution Testing Center Registration & Enquiry
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                    Are you a testing center owner looking to list your center on the official VEOTA Kerala portal, update your listing, or submit official queries? Fill out the details below and our leadership team will process your request promptly.
                  </p>
                </div>
              </div>
            </div>

            {formStatus === 'error' && (
              <div className="mb-6 p-4 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
                There was an error submitting your request. Please try again or email us directly at <a href="mailto:emissiontesting2020@gmail.com" className="font-semibold underline">emissiontesting2020@gmail.com</a>.
              </div>
            )}

            {formStatus === 'success' && (
              <div className="mb-6 p-4 rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 text-sm flex items-center space-x-2">
                <CheckCircle2 size={20} className="text-green-600 shrink-0" />
                <span>Your testing center enquiry has been received successfully! Our team will contact you shortly.</span>
              </div>
            )}

            <form 
              name="request-form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* Hidden input for Netlify to identify the form */}
              <input type="hidden" name="form-name" value="request-form" />
              {/* Hidden honeypot field for spam prevention */}
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    {t('requestForm.form.enquiryType')} <span className="text-error-500">*</span>
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                  >
                    <option value="Add New Pollution Testing Center">Add / Register New Pollution Testing Center</option>
                    <option value="Update Existing Testing Center Details">Update Existing Center Details</option>
                    <option value="Membership & Affiliation Enquiry">Membership & Affiliation Enquiry</option>
                    <option value="Official Administrative Request">Administrative Request / Concern</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="centerName" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    {t('requestForm.form.centerName')} {formData.enquiryType.includes('Center') && <span className="text-error-500">*</span>}
                  </label>
                  <input
                    type="text"
                    id="centerName"
                    name="centerName"
                    placeholder="e.g. Kozhikode Auto Scan Testing Centre"
                    value={formData.centerName}
                    onChange={handleChange}
                    required={formData.enquiryType.includes('Center')}
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    {t('requestForm.form.name')} <span className="text-error-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
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
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    {t('requestForm.form.contact')} <span className="text-error-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    placeholder="e.g. 9876543210"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="rto" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    {t('requestForm.form.rto')} <span className="text-error-500">*</span>
                  </label>
                  <select
                    id="rto"
                    name="rto"
                    value={formData.rto}
                    onChange={handleChange}
                    required
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
                  placeholder="e.g. Inquiring to list our testing center with VEOTA"
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
                  rows={5}
                  placeholder="Enter center address, license details, equipment type, or your specific enquiry..."
                  className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 py-2.5 px-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
                ></textarea>
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full btn btn-primary flex items-center justify-center transition-all ${
                    formStatus === 'submitting' ? 'opacity-70 cursor-wait' : ''
                  } ${formStatus === 'success' ? 'bg-success-500 hover:bg-success-600 focus:ring-success-400' : ''}`}
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : formStatus === 'success' ? (
                    <span className="flex items-center">
                      Enquiry Submitted Successfully
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