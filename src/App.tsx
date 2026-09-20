import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/ui/Preloader';
import {
  RoyalInauguration,
  RoyalFloatingBadge,
  isCelebrationDate,
} from './components/inauguration/RoyalInauguration';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GovernmentOrdersPage from './pages/GovernmentOrdersPage';
import TestingCentersPage from './pages/TestingCentersPage';
import RepresentativesPage from './pages/RepresentativesPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import RequestFormPage from './pages/RequestFormPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top when navigating to a new page
const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{children}</>;
};

function App() {
  const [loading, setLoading] = useState(true);
  const celebrationActive = isCelebrationDate();
  const [showInauguration, setShowInauguration] = useState(() => celebrationActive);

  useEffect(() => {
    // Hide preloader after page resources are ready
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterWebsite = () => {
    setShowInauguration(false);
    setLoading(false);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        {showInauguration ? (
          <RoyalInauguration
            onEnterWebsite={handleEnterWebsite}
            autoTransitionSeconds={10}
          />
        ) : (
          <>
            {loading && <Preloader />}
            <Router>
              <ScrollToTop>
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <div className="flex-grow pt-16"> {/* Add padding for fixed navbar */}
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/government-orders" element={<GovernmentOrdersPage />} />
                      <Route path="/testing-centers" element={<TestingCentersPage />} />
                      <Route path="/representatives" element={<RepresentativesPage />} />
                      <Route path="/news" element={<NewsPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/request-form" element={<RequestFormPage />} />
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </div>
                  <Footer />
                </div>
              </ScrollToTop>
            </Router>

            {/* Floating Royal Celebration Badge for replaying ceremony anytime */}
            {celebrationActive && (
              <RoyalFloatingBadge onClick={() => setShowInauguration(true)} />
            )}
          </>
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;