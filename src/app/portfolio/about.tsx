import React from 'react';

import Guy from '../../../public/images/logo/Guy&Laptop.svg';
import './css/portfolio.scss';
import Image from 'next/image';
import { Callout } from '@/components/text/callout';

export default function About() {
  return (
    <div className='page about-page'>
      <Image 
          priority 
          src={Guy} 
          alt="A guy with a laptop illustration"
          className='about-page-illustration'
        />
      <div className='about-page-text'>
        <Callout color='orange'>
          Por que somos a 
        </Callout>
        <h1 className='about-page-title'>Melhor <b>Opção ?</b></h1>
        <p className='about-page-paragraph'>Ajudamos empresas e empreendedores a transformar suas ideias em realidade digital, 
          desenvolvendo software, aplicativos e landing pages sob medida. Além disso, oferecemos consultoria 
          especializada, desenvolvimento completo e manutenção de códigos desatualizados, garantindo alta 
          qualidade e eficiência em todos os projetos digitais. Nossa equipe altamente qualificada garante 
          resultados confiáveis e soluções personalizadas para atender às necessidades digitais de nossos clientes.
        </p>
      </div>
    </div>
  )
}
