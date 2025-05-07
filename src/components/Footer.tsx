
import React from 'react';
import Clock from './Clock';

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-bicho-blue to-bicho-blue rounded-b-lg p-4 flex flex-col md:flex-row items-center justify-between border-t-2 border-white">
      <div className="text-xl text-white font-bold mb-2 md:mb-0">
        WWW.BICHOCERTO.COM
      </div>
      <Clock />
    </div>
  );
};

export default Footer;
