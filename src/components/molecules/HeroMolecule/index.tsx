import React from 'react';
import Button from '@/components/atoms/Button/index'
import { HeroTitle, SubText } from '@/components/atoms/Titles/index'

const Index = () => {
    return(
        <div className='flex flex-col gap-7'>
            <HeroTitle title='Soy Juan Diego desarrollador Web '/>
            <SubText text='Apasionado por el desarrollo de nuevas ideas y aplicaciones, disfruto crear soluciones innovadoras que impacten positivamente a las personas. Actualmente estudio Ingeniería de Sistemas en la Universidad de Antioquia, 
            donde potencio mis habilidades y mi creatividad cada día.' />
            <Button />
        </div>
    );
};

export default Index;