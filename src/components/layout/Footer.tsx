import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 text-lg font-semibold text-white">VEOTA Kerala</span>
            </div>
            <p className="text-sm text-neutral-400 mb-4">
              Vehicle Emission Testing Owners Association Kerala (VEOTA) is a professional body 
              representing emission testing center owners across the state of Kerala.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-semibold mb-4">{t('footer.links')}</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/government-orders" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  {t('nav.governmentOrders')}
                </Link>
              </li>
              <li>
                <Link to="/testing-centers" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  {t('nav.testingCenters')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h5 className="text-white font-semibold mb-4">{t('footer.contact')}</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-500 mt-0.5 mr-2 shrink-0" />
                <span className="text-sm text-neutral-400">
                  VEOTA Kerala, TC 25/2342, Sasthamangalam P.O, Thiruvananthapuram, Kerala 695010
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-500 mr-2 shrink-0" />
                <span className="text-sm text-neutral-400">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-500 mr-2 shrink-0" />
                <a href="mailto:info@veotakerala.org" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  info@veotakerala.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500">
          <p>© {currentYear} VEOTA Kerala. {t('footer.rights')}.</p>
          <p className="mt-1">
            {t('footer.designed')} <span className="text-primary-500">VEOTA Web Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;