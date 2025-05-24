import React from 'react';
import { SubTitle, TextTitle } from '@/components/atoms/Titles/index';
import Icon from '@/components/atoms/Icon/index';

const Index = ({
  title = '',
  text = '',
  icon = 'material-symbols:checkroom',
}: {
  title: string;
  text: string;
  icon: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center  max-w-[293px] h-[225px] bg-white rounded-lg shadow-md p-6 m-2 gap-4">
      <Icon icon={icon} />
      <SubTitle title={title} />
      <TextTitle text={text} />
    </div>
  );
};

export default Index; 