import React from 'react';
import './text.scss';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '600',
  subsets: ['latin'],
});

export default function Title({ children }: any) {
  return (
    <h1 className={`title ${spaceGrotesk.className}`}>{children}</h1>
  );
}
