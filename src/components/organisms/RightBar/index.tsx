import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-white shadow-lg">
      <ul className="flex flex-col items-center gap-6 mt-8">
        <li>
          <a
            href="https://github.com/juandcalderon16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 text-2xl transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/juan-diego-calderon-bermeo-77467729a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 text-2xl transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/CalderonBe69607"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 text-2xl transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
      <div className="flex-1" />
      <div className="w-1 h-24 bg-gray-300 rounded-full mt-8 mb-8" />
    </div>
  );
};

export default Index;