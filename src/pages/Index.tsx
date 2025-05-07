
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContent from '@/components/MainContent';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bicho-background p-2 md:p-4 lg:p-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col border-4 border-white rounded-lg shadow-2xl overflow-hidden">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
