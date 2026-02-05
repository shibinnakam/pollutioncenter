import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Check if the link is active
  const isActive = (path: string) => location.pathname === path;

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/government-orders', label: t('nav.governmentOrders') },
    { path: '/testing-centers', label: t('nav.testingCenters') },
    { path: '/news', label: t('nav.news') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/request-form', label: t('nav.requestForm') },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Logo />
            <span className="ml-2 text-lg font-semibold hidden md:block">VETOA Kerala</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary-700 dark:text-primary-400 font-semibold'
                    : 'text-neutral-700 hover:text-primary-600 dark:text-neutral-200 dark:hover:text-primary-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme and Language Toggles */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ml' : 'en')}
              className="p-2 rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label={t('common.languageToggle')}
              title={t('common.languageToggle')}
            >
              <Globe size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label={theme === 'light' ? t('common.themeToggle.light') : t('common.themeToggle.dark')}
              title={theme === 'light' ? t('common.themeToggle.light') : t('common.themeToggle.dark')}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ml' : 'en')}
              className="p-2 rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label={t('common.languageToggle')}
            >
              <Globe size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label={theme === 'light' ? t('common.themeToggle.light') : t('common.themeToggle.dark')}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="container-custom py-2 space-y-1 pb-4 bg-white dark:bg-neutral-900">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                  : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800'
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;