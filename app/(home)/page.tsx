'use client'

import React, { useState, useEffect, useRef } from 'react';
import { UserAction } from '@/components/molecules/userAction';
import ChatResult from '@/components/organisms/chatResult';
import { Title } from '@/components/atoms/title';


const ChatPage: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState<{ question: string; response: string }[]>([]);
  const chatTempRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    if (!question.trim()) return;

    const response = await fetch('api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (response.ok) {
      const data = await response.json();
      const answer = data.answer;
      setChatHistory([...chatHistory, { question, response: answer }]);
      setQuestion('');
    } else {
      alert('something went wrong');
    }
  };

  useEffect(() => {
    if (chatTempRef.current) {
      chatTempRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  return (
    <>
      <div >
        <div className='text-4xl w-full  p-[50px] text-center font-bold'>
          <Title text="Simple ChatGPT" color="#14b7fc" />
        </div>
        <UserAction
          onSubmit={handleSendMessage}
          question={question}
          setQuestion={setQuestion}
        />
        <div className='chatHistory overflow-y-auto p-4 mt-32'>
          {chatHistory.map((chat, index) => (
            <ChatResult key={index} question={chat.question} response={chat.response} />
          ))}
          <br />
          <div ref={chatTempRef} />
        </div>
      </div>
    </>
  );
};

export default ChatPage;

