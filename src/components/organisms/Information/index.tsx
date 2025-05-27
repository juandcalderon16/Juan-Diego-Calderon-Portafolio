import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser, FaBirthdayCake, FaHome, FaBriefcase } from 'react-icons/fa';

const Index = () => (
  <div className="p-6 flex flex-col gap-6 items-center w-full">
    {/* Foto y nombre */}
    <div className="flex flex-col items-center gap-2 w-full">
      <img
        src="/Hero1.jpg"
        alt="Juan Diego Calderón"
        className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow mb-2 scale-110"
      />
      <div className="flex items-center gap-2">
        <FaUser className="text-primary text-xl" />
        <span className="font-bold text-lg">Juan Diego Calderón</span>
      </div>
    </div>
    {/* Información de contacto */}
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center gap-3">
        <FaBirthdayCake className="text-primary" />
        <span className="text-black">22 años</span>
      </div>
      <div className="flex items-center gap-3">
        <FaHome className="text-primary" />
        <span className="text-black">Residencia: Medellín, Colombia</span>
      </div>
      <div className="flex items-center gap-3">
        <FaEnvelope className="text-primary" />
        <a
          href="mailto:juan.diego@email.com"
          className="text-black hover:text-blue-600 transition-colors"
        >
          juand.calderon@udea.edu.co
        </a>
      </div>
      <div className="flex items-center gap-3">
        <FaPhoneAlt className="text-primary" />
        <a
          href="tel:+573001234567"
          className="text-black hover:text-blue-600 transition-colors"
        >
          +57 350 260 7861
        </a>
      </div>
      <div className="flex items-center gap-3">
        <FaMapMarkerAlt className="text-primary" />
        <span className="text-gray-700">Medellín, Colombia</span>
      </div>
      <div className="flex items-center gap-3">
        <FaBriefcase className="text-primary" />
        <span className="text-green-700 font-semibold">¡Listo para trabajar!</span>
      </div>
    </div>
    {/* Mensaje final */}
    <div className="mt-2 text-sm text-gray-500 italic text-center w-full">
      ¡Siempre abierto a nuevas oportunidades y colaboraciones!
    </div>
  </div>
);

export default Index;