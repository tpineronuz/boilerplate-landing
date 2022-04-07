import React from 'react';
import Image from 'next/image';
import LogoHikVision from '@assets/images/logo-hikvision.svg';
import LogoHellermanTylon from '@assets/images/logo-hellermantylon.svg';
import LogoEzviz from '@assets/images/logo-ezviz.svg';
import LogoAltel from '@assets/images/logo-altel.svg';

export const BrandingLogos = () => {
  return (
    <>
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
    </>
  );
};
