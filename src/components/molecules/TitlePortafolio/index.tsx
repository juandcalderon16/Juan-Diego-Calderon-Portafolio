import { MediumTitle, TextTitle } from '@/components/atoms/Titles/index';
import React from 'react';

const Index = () => {
    return(
        <div className='flex flex-col items-center gap-7'>
            <div className='flex flex-col gap-7'>
                <MediumTitle title='Portafolio'/>
            </div>
            <div className='w-[438px] h-16'>
                <TextTitle text='En esta sección podrás ver algunos de mis 
                proyectos destacados, donde aplico mis conocimientos en 
                desarrollo web y tecnología para crear soluciones innovadoras 
                y funcionales.'/>
            </div>
        </div>
    );
};

export default Index;