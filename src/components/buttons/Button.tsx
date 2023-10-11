import React from 'react';

import './button.scss';

interface ButtonProps {
  type: 'outline' | 'default';
  text: string;
}

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  const buttonClassName = `glow ${type === 'outline' ? 'btn-outline' : ''}`;

  return (
    <button className={buttonClassName}>
      {text}
    </button>
  );
};

export default Button;