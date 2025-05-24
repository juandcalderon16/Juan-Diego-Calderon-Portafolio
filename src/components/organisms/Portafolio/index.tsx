import React, { useState } from 'react';
import { SubTitle, TextTitle } from '@/components/atoms/Titles';

const projects = [
  {
    name: 'CarShow',
    image: './CarShow.png',
    short: 'Personaliza el carro que deseas comprar y mira los cambios en tiempo real.',
    description: 'CarShow es una página interactiva donde puedes personalizar diferentes aspectos de un carro (color, accesorios, modelo, etc.) y ver los cambios reflejados al instante. Ideal para concesionarios o usuarios que desean explorar opciones antes de comprar. Incluye una interfaz moderna y fácil de usar.',
    github: 'https://github.com/juandcalderon16/CarShow',
    demo: '',
  },
  {
    name: 'Backend para página de vuelos',
    image: './FlightProject.jpeg',
    short: 'Desarrollo del backend para una plataforma de reservas de vuelos.',
    description: 'Implementé la API RESTful y la lógica de negocio para una página de reservas de vuelos. Incluye autenticación de usuarios, gestión de vuelos, reservas, pagos y notificaciones. Desarrollado con Node.js, Express y MongoDB, siguiendo buenas prácticas de seguridad y escalabilidad.',
    github: 'https://github.com/tu_usuario/backend-vuelos',
    demo: '',
  },
  {
    name: 'IA para predicción de notas',
    image: './Modelos.jpeg',
    short: 'Desarrollo de una inteligencia artificial para predecir notas de estudiantes.',
    description: 'Actualmente se está desarrollando una IA capaz de predecir las notas de los estudiantes a partir de datos históricos y características académicas. El objetivo es brindar herramientas de análisis y apoyo tanto para estudiantes como para docentes, utilizando técnicas de machine learning y análisis de datos.',
    github: '',
    demo: '',
  },
];

const Index = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg shadow p-6 w-[970px] mb-6">
      <SubTitle title="Portafolio" />
      <div className="mt-4 overflow-x-auto">
        <div className="flex flex-row gap-6 w-max">
          {projects.map((project, idx) => (
            <div
              key={project.name}
              className="min-w-[320px] max-w-xs bg-[#F9FAFB] rounded-xl shadow flex flex-col items-center p-4 relative"
              style={{ flex: '0 0 320px' }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="font-bold text-lg mb-1">{project.name}</h3>
              <TextTitle text={project.short} />
              <button
                className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
                onClick={() => setOpen(idx)}
              >
                Saber más
              </button>
              {/* Dialogo modal */}
              {open === idx && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                      onClick={() => setOpen(null)}
                    >
                      ×
                    </button>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          Código en GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 font-semibold hover:underline"
                        >
                          Ver Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;