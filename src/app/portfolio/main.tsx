import React from 'react';
import Image from 'next/image';
import Title from '@/components/text/Title';
import Storm from '../../../public/images/logo/storm.svg';
import Button from '@/components/buttons/Button';

import './css/portfolio.scss';

export default function Main(){
  return (
    <div className='main-page'>
      <div className='bounce mb-20'>
        <Image 
          priority 
          src={Storm} 
          alt="Storm 3D illustration"
          className='heartbeat'
          width={200}
        />
      </div>
      <div className='flex flex-col justify-center content-center	flex-wrap mb-20'>
        <Title align="center">Transformando <b style={{ color: '#3AB795' }}>ideias</b> em</Title>
        <Title><b style={{ color: '#3AB795' }}>soluções</b> digitais para o <b  style={{ color: '#3AB795' }}>futuro</b>.</Title>
      </div>
      <Button type="outline" text="Saiba Mais" />
    </div>
  )
}