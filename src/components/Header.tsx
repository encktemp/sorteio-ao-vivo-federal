
import React from 'react';

const Header: React.FC = () => {
  // Formata a data atual para exibir no formato DD/MM/YYYY - HH:MM
  const formatDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  };

  return (
    <div className="w-full bg-gradient-to-r from-bicho-blue to-bicho-blue rounded-t-lg p-4 flex flex-col items-center justify-center border-b-2 border-white">
      <div className="flex items-center justify-center mb-2">
        <h1 className="text-4xl md:text-5xl font-bold text-bicho-green">
          BICHO CERTO
        </h1>
        <img 
          src="/lovable-uploads/9a36f867-95f2-46f4-92a1-fa3562641b03.png" 
          alt="Logo" 
          className="h-12 md:h-16 ml-4"
          style={{ filter: 'brightness(0) invert(1)' }} // Torna a imagem branca
        />
      </div>
      <div className="bg-white text-bicho-blue text-xl md:text-2xl font-bold px-8 py-2 rounded-md">
        RESULTADO {formatDate()}
      </div>
    </div>
  );
};

export default Header;
