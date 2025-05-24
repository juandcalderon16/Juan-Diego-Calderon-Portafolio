import React from 'react';

const HeroTitle = ({ title }: { title: string }) => {
  return (
    <h1 className='text-center lg:text-left text-[48px] lg:text-[48px] font-inter font-bold text-black max-w-72 lg:max-w-[500px] leading-[123.6%]'>
      {title}
    </h1>
  );
};
const MediumTitle = ({ title }: { title: string }) => {
  return (
    <h2 className='text-center lg:text-left text-[32px] lg:text-[32px] font-inter font-bold text-black leading-[123.6%]'>
      {title}
    </h2>
  );
};
const SubTitle = ({ title }: { title: string }) => {
  return (
    <h6 className='text-center lg:text-left text-xl lg:text-[18px] font-inter font-medium text-black leading-[123.6%]'>
      {title}
    </h6>
  );
};
const TextTitle = ({ text }: { text: string }) => {
  return (
    <h3 className='text-center lg:text-left text-xl lg:text-[15px] font-inter font-regular text-gris leading-[24px]'>
      {text}
    </h3>
  );
};
const SubText = ({ text }: { text: string }) => {
  return (
    <div>
      <p className='text-base text-gris font-light text-center lg:text-left max-w-72 lg:max-w-72'>
        {text ??
          'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.'}
      </p>
    </div>
  );
};

export { HeroTitle, MediumTitle, SubTitle, TextTitle, SubText };