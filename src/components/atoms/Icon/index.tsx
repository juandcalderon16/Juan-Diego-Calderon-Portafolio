import React from 'react';
import { Icon } from '@iconify/react';

const Index = ({ icon }: { icon: string }) => {
  return (
    <div className='gradient rounded-full w-20 h-20 flex justify-center items-center'>
      <Icon icon={`${icon}`} width='40' height='40' className='text-primary' />
    </div>
  );
};

export default Index;