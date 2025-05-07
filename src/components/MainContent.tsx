
import React, { useState, useCallback } from 'react';
import VideoFrame from './VideoFrame';
import ResultTable from './ResultTable';
import NumberInput from './NumberInput';
import { BichoResult } from '../types/bicho';
import { determineAnimalFromNumber } from '../utils/bichoUtils';

const MainContent: React.FC = () => {
  const [results, setResults] = useState<BichoResult[]>([]);
  const [totalSum, setTotalSum] = useState<number>(0);

  const addResult = useCallback((number: string) => {
    if (results.length >= 10) {
      return; // Limite máximo de 10 resultados
    }
    
    const { group, animal } = determineAnimalFromNumber(number);
    
    const newResult: BichoResult = {
      number,
      group,
      animal
    };
    
    setResults(prevResults => [...prevResults, newResult]);
    setTotalSum(prevTotal => prevTotal + parseInt(number));
  }, [results]);

  const clearResults = useCallback(() => {
    setResults([]);
    setTotalSum(0);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-1/3">
        <VideoFrame />
      </div>
      
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <ResultTable results={results} totalSum={totalSum} />
        <NumberInput addResult={addResult} clearResults={clearResults} resultsCount={results.length} />
      </div>
    </div>
  );
};

export default MainContent;
