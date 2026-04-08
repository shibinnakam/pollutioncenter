import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Short delay before fading out
      const timeout = setTimeout(() => setFadeOut(true), 300);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <div
      className={`preloader-overlay ${fadeOut ? 'preloader-fadeout' : ''}`}
    >
      {/* Background */}
      <div className="preloader-bg" />

      {/* Animated Rings */}
      <div className="preloader-rings">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
      </div>

      {/* Logo & Content */}
      <div className="preloader-content">
        {/* Leaf / Eco icon */}
        <div className="preloader-icon">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" stroke="#0d9488" strokeWidth="2" opacity="0.3" />
            <path
              d="M32 14 C32 14 46 20 46 36 C46 44 40 50 32 50 C24 50 18 44 18 36 C18 20 32 14 32 14Z"
              fill="#0d9488"
              opacity="0.15"
            />
            <path
              d="M32 14 C32 14 46 20 46 36 C46 44 40 50 32 50 C24 50 18 44 18 36 C18 20 32 14 32 14Z"
              stroke="#0d9488"
              strokeWidth="2"
              fill="none"
            />
            <line x1="32" y1="50" x2="32" y2="30" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M32 38 C28 34 22 34 20 30" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M32 32 C36 28 42 28 44 24" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <h1 className="preloader-title">VEOTA Kerala</h1>
        <p className="preloader-subtitle">Vehicle Emission Testing &amp; Operations Association</p>

        {/* Progress bar */}
        <div className="preloader-progress-track">
          <div
            className="preloader-progress-bar"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="preloader-percent">{Math.min(Math.round(progress), 100)}%</p>
      </div>
    </div>
  );
};

export default Preloader;
