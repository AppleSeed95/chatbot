import React, { useState, useEffect } from 'react';
import { OpenAIResponse } from '../molecules/openAIResponse';
import { UserQuestion } from '../molecules/userQuestion';
interface ChatResultProps {
  question: string;
  response: string;
}

const ChatResult: React.FC<ChatResultProps> = ({ question, response }) => {
  const [displayedResponse, setDisplayedResponse] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < response.length) {
        const char = response[currentIndex];
        if (char !== undefined) {
          setDisplayedResponse((prev) => prev + char);
        }
        currentIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [response]);

  return (
    <div className="chat-result mt-12">
      <div className='flex w-4/5 mx-auto text-white justify-end mt-12'>
        <UserQuestion question={question} />
      </div>
      <div className='w-4/5 mx-auto text-white mt-12'>
        <OpenAIResponse response={displayedResponse} />
      </div>
    </div>
  );
};

export default ChatResult;