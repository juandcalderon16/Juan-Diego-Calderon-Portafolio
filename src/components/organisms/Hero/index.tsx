import React from 'react';
import HeroMolecule from '@/components/molecules/HeroMolecule/index';

const Index = () => {
    return (
        <div className="flex flex-row justify-between items-center w-[970px] h-[468px] bg-white rounded-xl shadow-lg px-12 py-8 gap-8">
            <HeroMolecule />
            <div className="flex justify-center items-center h-full">
                <img
                    src="/Hero1.jpg"
                    alt="hero1"
                    className="w-60 h-60 object-cover rounded-full border-4 border-gray-200 shadow scale-110"
                />
            </div>
        </div>
    );
};

export default Index;