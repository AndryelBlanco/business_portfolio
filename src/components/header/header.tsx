"use client"; 
import React, { useState, useEffect } from 'react';
import { Space_Grotesk, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Logo from '../../../public/images/logo/Dot&B.svg';
import LogoColor from '../../../public/images/logo/Dot&BColor.svg';
import Link from 'next/link';

import './header.scss';
 
const spaceGrotesk = Space_Grotesk({
  weight: '600',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '700',
  subsets: ['latin'],
});

export default function Header() {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolling ? `header-active ${spaceGrotesk.className}` : spaceGrotesk.className}>
      <Image 
        priority
        src={scrolling ? LogoColor : Logo}
        alt="Blanco Code Brand Logo"
        width={48}
        height={48}
      />
      <nav className={scrolling ? 'header-nav-container' : 'header-nav-container-disabled'}>
        <Link href="#" className={montserrat.className}>Home</Link>
        <Link href="#" className={montserrat.className}>Quem Somos</Link>
        <Link href="#" className={montserrat.className}>Soluções</Link>
      </nav>
      <div className={ scrolling ? `${montserrat.className} i-have-a-project-alt i-have-a-project` : `i-have-a-project ${montserrat.className}` }>
        { scrolling ? 'Tenho uma Ideia' : 'Fazer Orçamento' }
      </div>
    </header>
  )
}
