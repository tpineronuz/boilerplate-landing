import React from 'react';
import Image from 'next/image';
import ImageDemo from '@assets/images/demo-equipos.png';

export const Brandings = () => {
  return (
    <div className='brandings'>
      <div className='container'>
        <Image src={ImageDemo} alt='Imagen formulario' className='mb-5' />
        <div className='brandings__title'>Somos distribuidores oficiales</div>
        <div className='brandings__content'>
          <div className='brandings__logo'>Hikvision</div>
          <div className='brandings__logo'>Hellermann Tyton</div>
          <div className='brandings__logo'>Sistemas Altel</div>
        </div>
      </div>
    </div>
  );
};
