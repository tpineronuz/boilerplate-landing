import React from 'react';
import Image from 'next/image';
import ImageDemo from '@assets/images/demo-equipos.png';
import LogoHikVision from '@assets/images/logo-hikvision.svg';
import LogoHellermanTylon from '@assets/images/logo-hellermantylon.svg';
import LogoEzviz from '@assets/images/logo-ezviz.svg';
import LogoAltel from '@assets/images/logo-altel.svg';

export const Brandings = () => {
  return (
    <div className='brandings'>
      <div className='container'>
        <div className='brandings__image'>
          <Image src={ImageDemo} alt='Imagen formulario' className='' />
        </div>
        <div className='brandings__title'>Somos distribuidores oficiales</div>
        <div className='brandings__content'>
          <div className='brandings__logo'>
            <Image src={LogoHikVision} alt='logo ht' />
          </div>
          <div className='brandings__logo'>
            <Image src={LogoHellermanTylon} alt='logo ht' />
          </div>
          <div className='brandings__logo'>
            <Image src={LogoAltel} alt='logo ht' />
          </div>
          <div className='brandings__logo'>
            <Image src={LogoEzviz} alt='logo ht' />
          </div>
        </div>
      </div>
    </div>
  );
};
