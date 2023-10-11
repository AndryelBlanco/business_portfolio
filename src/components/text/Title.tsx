import React from 'react';
import './text.scss';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '600',
  subsets: ['latin'],
});

interface TitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right'; // Defina os valores permitidos para o alinhamento
}

export default function Title({ children, align = 'left' }: TitleProps) {
  const alignmentClass = align === 'center' ? 'center' : align === 'right' ? 'right' : 'left';
  
  return (
    <h1 className={`title ${spaceGrotesk.className} ${alignmentClass}`}>{children}</h1>
  );
}
