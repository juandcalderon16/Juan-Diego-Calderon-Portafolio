import { MediumTitle, TextTitle } from '@/components/atoms/Titles/index';
import React from 'react';

const Index = () => {
    return(
        <div className='flex flex-col items-center gap-7'>
            <div className='flex flex-col gap-7'>
                <MediumTitle title='Education'/>
            </div>
            <div className='w-[438px] h-16'>
                <TextTitle text='Esta sección es un resumen de mi formación académica, cursos y certificaciones relevantes que han fortalecido mis conocimientos y habilidades en el desarrollo de software y tecnología.'/>
            </div>
        </div>
    );
};

export default Index;