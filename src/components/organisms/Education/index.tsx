import React from 'react';
import TitleEducacion from '@/components/molecules/TitleEducacion/index';
import { SubTitle, TextTitle } from '@/components/atoms/Titles';

const education = [
  {
    title: 'Ingeniería de Sistemas',
    institution: 'Universidad de Antioquia',
    year: '2021 - Presente',
    description: 'Carrera enfocada en el desarrollo de software, algoritmos, bases de datos y gestión de proyectos tecnológicos.',
  },
  {
    title: 'Curso de Desarrollo Web',
    institution: 'Platzi',
    year: '2023',
    description: 'Aprendizaje de tecnologías modernas para la web como HTML, CSS, JavaScript y frameworks populares.',
  },
  {
    title: 'Cursos en línea de programación',
    institution: 'Udemy, Coursera y otras plataformas',
    year: '2022 - Presente',
    description: 'Diversos cursos sobre programación, frameworks y herramientas actuales del desarrollo de software.',
  },
  {
    title: 'Curso de Inglés',
    institution: 'Centro Colombo Americano',
    year: '2022',
    description: 'Curso de inglés enfocado en comunicación oral y escrita para entornos académicos y profesionales.',
  },
];

export default function Education() {
  return (
    <div className='flex flex-col items-center justify-center w-[970px]'>
      <div className='flex flex-col items-center gap-7 mb-6'>
        <TitleEducacion />
      </div>
      <div className="bg-white rounded-lg shadow p-4 mb-6 w-[970px]">
        <ul>
          {education.map((edu, idx) => (
            <React.Fragment key={idx}>
              <li className="mb-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 w-full">
                  <div className="flex flex-col md:w-1/2">
                    <SubTitle title={edu.title} />
                    <span className="text-gray-600">{edu.institution}</span>
                    <span className="text-gray-400 text-sm">{edu.year}</span>
                  </div>
                  <div className="md:w-1/2">
                    <TextTitle text={edu.description} />
                  </div>
                </div>
              </li>
              {idx < education.length - 1 && (
                <div className="border-t border-yellow-400 my-3 w-full" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}