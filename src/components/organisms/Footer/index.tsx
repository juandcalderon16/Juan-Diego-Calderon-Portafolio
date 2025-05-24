import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="relative w-full mt-10">
    {/* Fondo animado de ondas */}
    <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none">
      <svg
        className="w-full h-24 md:h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <path
          // Cambia aquí el color de la banda curveada
          fill="#fbbf24" // Ejemplo: amarillo Tailwind (bg-yellow-400)
          fillOpacity="0.3"
          d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,117.3C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,117.3C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,197.3C672,192,768,128,864,117.3C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,117.3C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
            "
          />
        </path>
      </svg>
    </div>
    {/* Contenido del footer */}
    <div className="relative z-10 flex flex-col items-center justify-center py-10">
      <p className="font-semibold text-lg text-secondary mb-2">
        Hecho con <span className="animate-pulse text-red-500">❤️</span> en Medellín
      </p>
      <div className="flex gap-6 mb-2">
        <a
          href="https://github.com/juandcalderon16"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-primary text-2xl transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/juandcalderon16"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-primary text-2xl transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:juan.diego@email.com"
          className="text-gray-700 hover:text-primary text-2xl transition"
        >
          <FaEnvelope />
        </a>
      </div>
      <span className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Juan Diego Calderón. Todos los derechos reservados.
      </span>
    </div>
  </footer>
);

export default Footer;