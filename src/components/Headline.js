import React from 'react';
import Image from 'next/image';
import Logo from '@assets/images/loghitec-logo.svg';

export const Headline = () => {
  const handleClick = () => {
    document.getElementById('form').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };
  return (
    <div className='container'>
      <div className='headline'>
        <div className='row justify-content-center'>
          <div className='col-xl-10'>
            <div className='headline__logo'>
              <Image className='' src={Logo} alt='Loghitec' />
            </div>
            <h1 className='headline__title '>
              Distribuidor tecnológico mayorista de materiales de seguridad
            </h1>
            <div className='headline__subtitle'>
              Precios oficiales, soporte y stock local
            </div>
            <button
              onClick={handleClick}
              className='btn btn-outline-light btn-lg'
            >
              Saber más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
