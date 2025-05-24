import { MediumTitle, TextTitle } from '@/components/atoms/Titles/index';
import React from 'react';

const Index = () => {
    return(
        
        <div className='flex flex-col items-center gap-7'>
            <div className='flex flex-col gap-7'>
                <MediumTitle title='My Knowledge'/>
            </div>
            <div className='w-[438px] h-16'>
                <TextTitle text='En esta sección encontrarás las principales 
                áreas de conocimiento, tecnologías y herramientas que manejo 
                para el desarrollo de software, tanto en frontend como en 
                backend.'/>
            </div>
        </div>
    );
};

export default Index;