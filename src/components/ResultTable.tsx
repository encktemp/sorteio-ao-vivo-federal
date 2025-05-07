
import React from 'react';
import { BichoResult } from '../types/bicho';
import AnimalImage from './AnimalImage';

interface ResultTableProps {
  results: BichoResult[];
  totalSum: number;
}

const ResultTable: React.FC<ResultTableProps> = ({ results, totalSum }) => {
  return (
    <div className="flex flex-col bg-bicho-blue p-4 rounded-lg shadow-lg border-2 border-bicho-border">
      <div className="bg-bicho-header p-2 rounded-t-lg">
        <h2 className="text-2xl font-bold text-center text-white">RESULTADOS</h2>
      </div>
      
      <div className="overflow-auto max-h-[400px]">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-bicho-blue text-white border-b-2 border-bicho-border">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Milhar</th>
              <th className="py-2 px-4">Grupo</th>
              <th className="py-2 px-4">Animal</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="text-white border-b border-bicho-border text-center">
                <td className="py-2 px-4">{index + 1}º</td>
                <td className="py-2 px-4 text-2xl font-bold">{result.number}</td>
                <td className="py-2 px-4 text-xl">{result.group.toString().padStart(2, '0')}</td>
                <td className="py-2 px-4 text-xl font-semibold">{result.animal}</td>
                <td className="py-2 px-4">
                  <AnimalImage animal={result.animal} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 pt-2 border-t-2 border-bicho-border">
        <div className="flex justify-between items-center">
          <span className="text-white text-xl font-bold">SOMATÓRIO GERAL:</span>
          <span className="text-white text-2xl font-bold">{totalSum}</span>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
