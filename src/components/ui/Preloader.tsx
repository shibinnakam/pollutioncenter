import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="preloader-overlay">
      <div className="preloader-spinner" />
    </div>
  );
};

export default Preloader;
