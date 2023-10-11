import React from 'react';
import Image from 'next/image';
import Storm from '../../../public/images/logo/storm.svg';
import Title from '@/components/text/Title';

export default function Main(){
  return (
    <div className='main-page'>
        <Image 
          priority 
          src={Storm} 
          alt="Storm 3D illustration"
          className='heartbeat'
          width={250}
        />
        <Title>Transformando <b style={{ color: '#3AB795' }}>ideias</b> em</Title>
        <Title><b style={{ color: '#3AB795' }}>soluções</b> digitais para o <b  style={{ color: '#3AB795' }}>futuro</b>.</Title>
    </div>
  )
}