
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

interface NumberInputProps {
  addResult: (number: string) => void;
  clearResults: () => void;
  resultsCount: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ addResult, clearResults, resultsCount }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar se é um número de 4 dígitos
    if (!/^\d{4}$/.test(inputValue)) {
      toast.error("Digite uma milhar válida de 4 dígitos");
      return;
    }

    if (resultsCount >= 10) {
      toast.warning("Limite máximo de 10 resultados atingido. Limpe a tabela para adicionar mais.");
      return;
    }
    
    addResult(inputValue);
    setInputValue('');
    toast.success(`Milhar ${inputValue} adicionada com sucesso!`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Digite uma milhar (4 dígitos)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="font-bold text-xl text-center bg-white text-black border-2 border-bicho-border"
          maxLength={4}
        />
        <Button 
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold"
        >
          Adicionar
        </Button>
      </div>
      <Button 
        type="button" 
        onClick={clearResults}
        className="bg-bicho-red hover:bg-red-700 text-white font-bold"
      >
        Limpar Tabela
      </Button>
    </form>
  );
};

export default NumberInput;
