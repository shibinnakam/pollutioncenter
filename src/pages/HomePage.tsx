import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import AboutSection from '../components/home/AboutSection';
import LatestNews from '../components/home/LatestNews';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';
import PuccRenewalChecklist from '../components/ui/PuccRenewalChecklist';
import KeralaMinistersDirectory from '../components/ui/KeralaMinistersDirectory';
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
      <section className="section bg-white dark:bg-neutral-900">
        <div className="container-custom space-y-12">
          <PuccRenewalChecklist />
          <KeralaMinistersDirectory />
        </div>
      </section>
      <LatestNews news={newsItems} />
      <CTA />
    </main>
  );
};

export default HomePage;