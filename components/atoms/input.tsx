import React, { ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress: () => void;
}

export const Input: React.FC<InputProps> = ({ value, onChange, onEnterPress }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onEnterPress();
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      className="w-full border boder-gray-900 px-4 py-4 rounded-lg bg-gray text-black text-xl"
      placeholder="press enter to get response..."
    />
  );
};

