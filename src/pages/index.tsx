// Project: Next.js + Tailwind CSS + TypeScript + ESLint + Prettier
import React from 'react';
import Languages from '@/components/organisms/Languages';
import RightBar from '@/components/organisms/RightBar';
import Education from '@/components/organisms/Education';
import Hero from '@/components/organisms/Hero';
import Idioms from '@/components/molecules/Idioms';
import Knowledge from '@/components/organisms/Knowledge';
import Portafolio from '@/components/organisms/Portafolio';
import Information from '@/components/organisms/Information';
import Habilidades from '@/components/organisms/Habilidades';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <div className="bg-[#F0F0F6] min-h-screen flex flex-col justify-between">
      <main className="flex justify-center items-start py-10 pr-0 md:pr-20 flex-1">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-7 gap-10 relative w-full">
          {/* Columna izquierda unificada */}
          <div className="md:col-span-2 flex flex-col gap-0">
            <div className="flex flex-col gap-0 bg-white rounded-2xl shadow-lg overflow-hidden">
              <Information />
              <div className="border-t border-gray-200" />
              <Languages />
              <div className="border-t border-gray-200" />
              <Idioms />
              <div className="border-t border-gray-200" />
              <Habilidades />
            </div>
          </div>
          {/* Columna central: Hero, Educación, Portafolio y Knowledge */}
          <div className="md:col-span-3 flex flex-col items-center justify-center gap-10">
            <div className="w-full max-w-2xl mx-auto flex flex-col gap-8">
              <Hero />
              <div className="w-full">
                <Knowledge />
              </div>
              <div className="w-full">
                <Education />
              </div>
              <div className="w-full">
                <Portafolio />
              </div>
            </div>
          </div>
          {/* Espacio vacío para mantener el grid */}
          <div className="md:col-span-2"></div>
          {/* RightBar fija a la derecha, delgada y ocupa toda la altura */}
          <div className="hidden md:block fixed right-0 top-0 h-screen w-16 z-50">
            <RightBar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
