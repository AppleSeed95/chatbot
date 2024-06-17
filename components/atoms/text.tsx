import React from 'react';

interface TextProps {
  text: string;
}

export const Text: React.FC<TextProps> = ({ text }) => {
  return <div className='w-auto text-base border border-gray-100 rounded-md px-2 py-2 object-cover'>
    {text}
  </div>;
};

