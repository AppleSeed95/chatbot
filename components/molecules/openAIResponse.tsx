import React from 'react';
import { Avatar } from '../atoms/avatar';
import { Text } from '../atoms/text';

interface OpenAIResponse {
  response: string;
}

export const OpenAIResponse: React.FC<OpenAIResponse> = ({ response }) => {
  return (
    <div className='bot-response flex items-start space-x-4'>
      <div className='flex-shrink-0'>
        <Avatar img="/bot_avatar.png" />
      </div>
      <Text text={response} />
    </div>
  );
};

