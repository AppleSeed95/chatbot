import React from 'react';

import { Input } from '../atoms/input';

interface UserActionProps {
  onSubmit: () => void;
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
}

export const UserAction: React.FC<UserActionProps> = ({ onSubmit, question, setQuestion }) => {
  return (
    <div className="user-action fixed bottom-0 w-full p-4 flex flex-col items-center space-y-4 z-10">

      <div className="flex w-3/5 justify-center items-center space-x-4 mx-auto p-[30px]">
        <Input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onEnterPress={onSubmit}
        />
      </div>
    </div>
  );
};

