import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import AboutSection from '../components/home/AboutSection';
import LatestNews from '../components/home/LatestNews';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';
import { slideImages, newsItems } from '../data';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero slides={slideImages} />
      <Stats />
      <AboutSection />
      <FeaturesSection />
      <LatestNews news={newsItems} />
      <CTA />
    </main>
  );
};

export default HomePage;