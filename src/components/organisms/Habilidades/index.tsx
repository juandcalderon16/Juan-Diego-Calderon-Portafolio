import React from 'react';
import { FaUsers, FaLightbulb, FaComments, FaClock, FaLaptopCode } from 'react-icons/fa';

const habilidades = [
  {
    icon: <FaUsers className="text-primary text-xl" />,
    title: 'Trabajo en equipo',
    description: 'Colaboro eficazmente en equipos multidisciplinarios y valoro la comunicación abierta.',
  },
  {
    icon: <FaLightbulb className="text-primary text-xl" />,
    title: 'Pensamiento crítico',
    description: 'Analizo problemas y propongo soluciones creativas y eficientes.',
  },
  {
    icon: <FaComments className="text-primary text-xl" />,
    title: 'Comunicación asertiva',
    description: 'Expreso ideas de forma clara y escucho activamente a los demás.',
  },
  {
    icon: <FaClock className="text-primary text-xl" />,
    title: 'Gestión del tiempo',
    description: 'Organizo tareas y cumplo plazos de entrega de manera responsable.',
  },
  {
    icon: <FaLaptopCode className="text-primary text-xl" />,
    title: 'Aprendizaje autónomo',
    description: 'Me adapto rápidamente a nuevas tecnologías y metodologías.',
  },
];

const Index = () => (
  <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
    <h2 className="text-xl font-bold mb-2">Habilidades Extra</h2>
    <ul className="flex flex-col gap-3">
      {habilidades.map((hab) => (
        <li key={hab.title} className="flex items-start gap-3">
          {hab.icon}
          <div>
            <span className="font-semibold">{hab.title}</span>
            <p className="text-gray-600 text-sm">{hab.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Index;