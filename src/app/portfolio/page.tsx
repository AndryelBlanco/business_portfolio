import React from 'react';
import Head from './head';
import Image from 'next/image';
import PortfolioLogo from '../../../public/images/logo/Dot&B.svg';

export default function page() {
  return (
    <>
      <Head/>
      <Image 
        priority
        src={PortfolioLogo}
        alt="Blanco Code Brand"
      />
      <h1>aaa</h1>
    </>
  )
}
