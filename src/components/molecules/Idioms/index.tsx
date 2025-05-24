import React from 'react';
import { FaGlobeAmericas, FaFlagUsa, FaFlag } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
        <FaGlobeAmericas className="text-primary" /> Idiomas
      </h2>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center gap-3 w-full">
          <FaFlagUsa className="text-blue-400 text-2xl" />
          <span className="font-semibold">Inglés</span>
          <div className="flex-1 mx-2 bg-gray-200 rounded h-2">
            <div className="bg-blue-400 h-2 rounded" style={{ width: '65%' }} />
          </div>
          <span className="ml-2 text-xs font-semibold text-blue-700">65%</span>
        </div>
        <div className="flex items-center gap-3 w-full">
          <FaFlag className="text-primary text-2xl" />
          <span className="font-semibold">Español</span>
          <div className="flex-1 mx-2 bg-gray-200 rounded h-2">
            <div className="bg-green-400 h-2 rounded" style={{ width: '100%' }} />
          </div>
          <span className="ml-2 text-xs font-semibold text-green-700">100%</span>
        </div>
      </div>
    </div>
  );
};

export default Index;