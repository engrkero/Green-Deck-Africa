import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-primary-green flex flex-col justify-center items-center z-[9999]">
      <div className="text-center text-white">
        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
        <h3 className="mt-5 text-2xl font-medium">Loading GreenDeck Africa</h3>
      </div>
    </div>
  );
};

export default Preloader;
