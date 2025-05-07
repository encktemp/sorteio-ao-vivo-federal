
import { AnimalMapping } from '../types/bicho';

// Mapeamento completo de grupos para animais no jogo do bicho
export const animalMappings: AnimalMapping[] = [
  { group: 1, animal: 'Avestruz', minNumber: 1, maxNumber: 4 },
  { group: 2, animal: 'Águia', minNumber: 5, maxNumber: 8 },
  { group: 3, animal: 'Burro', minNumber: 9, maxNumber: 12 },
  { group: 4, animal: 'Borboleta', minNumber: 13, maxNumber: 16 },
  { group: 5, animal: 'Cachorro', minNumber: 17, maxNumber: 20 },
  { group: 6, animal: 'Cabra', minNumber: 21, maxNumber: 24 },
  { group: 7, animal: 'Carneiro', minNumber: 25, maxNumber: 28 },
  { group: 8, animal: 'Camelo', minNumber: 29, maxNumber: 32 },
  { group: 9, animal: 'Cobra', minNumber: 33, maxNumber: 36 },
  { group: 10, animal: 'Coelho', minNumber: 37, maxNumber: 40 },
  { group: 11, animal: 'Cavalo', minNumber: 41, maxNumber: 44 },
  { group: 12, animal: 'Elefante', minNumber: 45, maxNumber: 48 },
  { group: 13, animal: 'Galo', minNumber: 49, maxNumber: 52 },
  { group: 14, animal: 'Gato', minNumber: 53, maxNumber: 56 },
  { group: 15, animal: 'Jacaré', minNumber: 57, maxNumber: 60 },
  { group: 16, animal: 'Leão', minNumber: 61, maxNumber: 64 },
  { group: 17, animal: 'Macaco', minNumber: 65, maxNumber: 68 },
  { group: 18, animal: 'Porco', minNumber: 69, maxNumber: 72 },
  { group: 19, animal: 'Pavão', minNumber: 73, maxNumber: 76 },
  { group: 20, animal: 'Peru', minNumber: 77, maxNumber: 80 },
  { group: 21, animal: 'Touro', minNumber: 81, maxNumber: 84 },
  { group: 22, animal: 'Tigre', minNumber: 85, maxNumber: 88 },
  { group: 23, animal: 'Urso', minNumber: 89, maxNumber: 92 },
  { group: 24, animal: 'Veado', minNumber: 93, maxNumber: 96 },
  { group: 25, animal: 'Vaca', minNumber: 97, maxNumber: 0 }, // 97 a 00 (que é 100)
];

// Função para calcular o grupo e animal com base no número da milhar
export const determineAnimalFromNumber = (milhar: string): { group: number, animal: string } => {
  // Extrai os dois últimos dígitos do número da milhar
  const lastTwoDigits = parseInt(milhar.slice(-2));
  
  // Caso especial: se for 00, é equivalente a 100
  const normalizedLastTwoDigits = lastTwoDigits === 0 ? 100 : lastTwoDigits;
  
  // Encontra o grupo/animal na tabela baseado nos últimos dois dígitos
  const result = animalMappings.find(mapping => {
    if (mapping.maxNumber === 0) {
      // Caso especial para o grupo 25 (97 a 00/100)
      return normalizedLastTwoDigits >= mapping.minNumber || normalizedLastTwoDigits === 100;
    } else {
      return normalizedLastTwoDigits >= mapping.minNumber && normalizedLastTwoDigits <= mapping.maxNumber;
    }
  });

  if (!result) {
    // Fallback caso não encontre (não deveria acontecer se a tabela estiver completa)
    return { group: 0, animal: 'Desconhecido' };
  }

  return { group: result.group, animal: result.animal };
};
