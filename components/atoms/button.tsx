import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  textColor: string;
  backgroundColor: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, textColor, backgroundColor }) => {
  return (
    <button
      onClick={onClick}
      style={{ color: textColor, backgroundColor }}
      className="button"
    >
      {children}
    </button>
  );
};

