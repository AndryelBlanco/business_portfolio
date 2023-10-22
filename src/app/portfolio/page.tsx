import React from 'react';
import Head from './head';
import Image from 'next/image';
import PortfolioLogo from '../../../public/images/logo/Dot&B.svg';
import Main from './main';

//Styles
import './css/portfolio.scss';
import About from './about';


export default function page() {
  return (
    <main className='main-page-container'>
      <Head/>
      <Main />
      <About />
    </main>
  )
}
