import React from 'react';
import Image from 'next/image';
import LogoIntercity from '@assets/images/logo-intercity.png';

export const Validation = () => {
  return (
    <div className='validation'>
      <div className='container'>
        <div className='validation__title'>Garantia de confianza</div>
        <div className='validation__content'>
          <div className='validation__logo'>
            <Image src={LogoIntercity} alt='Intercity' />
          </div>
        </div>
      </div>
    </div>
  );
};
