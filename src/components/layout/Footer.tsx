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
            <p className="text-sm text-neutral-400 mb-3">
              Vehicle Emission Testing Owner's Association (VEOTA) is a professional body 
              representing emission testing center owners across Kerala.
            </p>
            <div className="inline-block px-2.5 py-1 bg-neutral-800 border border-neutral-700 rounded text-xs font-semibold text-amber-400">
              Reg. No: KKD/CD/342/2020
            </div>
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
                  Room No: 8/19368, Prakash Building, Ghandhi Ashramam, Civil Station (P.O), Kozhikode - 673020
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-500 mr-2 shrink-0" />
                <a href="tel:04953554596" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  0495-3554596
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-500 mr-2 shrink-0" />
                <a href="mailto:emissiontesting2020@gmail.com" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                  emissiontesting2020@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500">
          <p>© {currentYear} VEOTA Kerala. {t('footer.rights')}.</p>
          <p className="mt-1">
            {t('footer.designed')}{' '}
            <a
              href="https://netscorps.website/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-400 hover:underline transition-colors font-medium"
            >
              Netscorps Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;