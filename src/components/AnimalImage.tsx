
import React from 'react';

interface AnimalImageProps {
  animal: string;
}

const AnimalImage: React.FC<AnimalImageProps> = ({ animal }) => {
  // Mapeamento de nomes de animais para os nomes dos arquivos de imagem
  const animalImageMap: Record<string, string> = {
    'Avestruz': 'avestruz.png',
    'Águia': 'aguia.png',
    'Burro': 'burro.png',
    'Borboleta': 'borboleta.png',
    'Cachorro': 'cachorro.png',
    'Cabra': 'cabra.png',
    'Carneiro': 'carneiro.png',
    'Camelo': 'camelo.png',
    'Cobra': 'cobra.png',
    'Coelho': 'coelho.png',
    'Cavalo': 'cavalo.png',
    'Elefante': 'elefante.png',
    'Galo': 'galo.png',
    'Gato': 'gato.png',
    'Jacaré': 'jacare.png',
    'Leão': 'leao.png',
    'Macaco': 'macaco.png',
    'Porco': 'porco.png',
    'Pavão': 'pavao.png',
    'Peru': 'peru.png',
    'Touro': 'touro.png',
    'Tigre': 'tigre.png',
    'Urso': 'urso.png',
    'Veado': 'veado.png',
    'Vaca': 'vaca.png'
  };

  // Fallback para quando a imagem não existir
  const imageSrc = animalImageMap[animal] 
    ? `/animals/${animalImageMap[animal]}` 
    : '/animals/generic-animal.png';

  return (
    <div className="w-10 h-10 flex items-center justify-center">
      <img 
        src={imageSrc} 
        alt={animal} 
        className="max-w-full max-h-full object-contain"
        onError={(e) => {
          // Se a imagem não carregar, substitui por um emoji de animal
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.style.fontSize = '24px';
          
          // Emoji baseado no nome do animal
          const animalEmojiMap: Record<string, string> = {
            'Avestruz': '🐦',
            'Águia': '🦅',
            'Burro': '🐴',
            'Borboleta': '🦋',
            'Cachorro': '🐕',
            'Cabra': '🐐',
            'Carneiro': '🐏',
            'Camelo': '🐪',
            'Cobra': '🐍',
            'Coelho': '🐇',
            'Cavalo': '🐎',
            'Elefante': '🐘',
            'Galo': '🐓',
            'Gato': '🐈',
            'Jacaré': '🐊',
            'Leão': '🦁',
            'Macaco': '🐒',
            'Porco': '🐖',
            'Pavão': '🦚',
            'Peru': '🦃',
            'Touro': '🐂',
            'Tigre': '🐅',
            'Urso': '🐻',
            'Veado': '🦌',
            'Vaca': '🐄'
          };
          
          target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="50%" y="50%" font-size="20" text-anchor="middle" dominant-baseline="middle">${animalEmojiMap[animal] || '🐾'}</text></svg>`;
        }}
      />
    </div>
  );
};

export default AnimalImage;
