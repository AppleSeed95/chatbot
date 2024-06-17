import React from 'react';
import { Avatar } from '../atoms/avatar';
import { Text } from '../atoms/text';

interface UserQuestionProps {
  question: string;
}

export const UserQuestion: React.FC<UserQuestionProps> = ({ question }) => {
  return (
    <div className="flex user-question justify-end space-x-4">
      <Text text={question} />
      <div className='flex-shrink-0'>
        <Avatar img="/user_avatar.png" />
      </div>
    </div>
  );
};

