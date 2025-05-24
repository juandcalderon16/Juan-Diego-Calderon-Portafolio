import React from 'react';

const languages = [
  { name: 'Java', percent: 90 },
  { name: 'TypeScript', percent: 80 },
  { name: 'Python', percent: 75 },
  { name: 'JavaScript', percent: 60 },
  { name: 'C#/C++', percent: 50 },
  { name: 'Go', percent: 10 },
];

const Index = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">Lenguajes de Programación</h2>
      <ul>
        {languages.map((lang) => (
          <li key={lang.name} className="mb-3">
            <div className="flex justify-between">
              <span>{lang.name}</span>
              <span>{lang.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2 mt-1">
              <div
                className="bg-primary h-2 rounded"
                style={{ width: `${lang.percent}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;