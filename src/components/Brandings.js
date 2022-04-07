import React from 'react';
import Image from 'next/image';
import ImageDemo from '@assets/images/demo-equipos.png';
import { BrandingLogos } from './BrandingLogos';

export const Brandings = () => {
  return (
    <div className='brandings'>
      <div className='container'>
        <div className='brandings__image'>
          <Image src={ImageDemo} alt='Imagen formulario' className='' />
        </div>
        <BrandingLogos />
      </div>
    </div>
  );
};
