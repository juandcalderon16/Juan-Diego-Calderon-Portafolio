import React, { useState } from 'react';
import Button from '@/components/atoms/Button/index'
import { HeroTitle, SubText } from '@/components/atoms/Titles/index'

const Index = () => {
    const [open, setOpen] = useState(false);

    return(
        <div className='flex flex-col gap-7'>
            <HeroTitle title='Soy Juan Diego desarrollador Web '/>
            <SubText text='Apasionado por el desarrollo de nuevas ideas y aplicaciones, disfruto crear soluciones innovadoras que impacten positivamente a las personas. Actualmente estudio Ingeniería de Sistemas en la Universidad de Antioquia, 
            donde potencio mis habilidades y mi creatividad cada día.' />
            <div onClick={() => setOpen(true)}>
                <Button />
            </div>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full relative animate-fade-in">
                        <button
                            className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-primary"
                            onClick={() => setOpen(false)}
                            aria-label="Cerrar"
                        >
                            ×
                        </button>
                        <div className="flex flex-col items-center gap-4">
                            <img
                                src="/Hero1.jpg"
                                alt="Juan Diego Calderón"
                                className="w-20 h-20 rounded-full object-cover border-4 border-primary shadow"
                            />
                            <h2 className="text-2xl font-bold text-primary mb-2">¡Hola! 👋</h2>
                            <p className="text-center text-gray-700">
                                Gracias por visitar mi portafolio.<br />
                                Me apasiona crear soluciones tecnológicas que ayuden a las personas.<br />
                                Si quieres saber más sobre mí o trabajar juntos, ¡no dudes en contactarme!
                            </p>
                            <a
                                href="mailto:juan.diego@email.com"
                                className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
                            >
                                Contáctame
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Index;