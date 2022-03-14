import React from 'react';
import Image from 'next/image';
import Logo from '../public/images/loghitec-logo.svg';

export const Headline = () => {
  return (
    <div className='container'>
      <div className='headline'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='headline__logo'>
              <Image
                className='animate__animated animate__fadeIn animate__delay-1s	'
                src={Logo}
                alt='Loghitec'
                width='180'
              />
            </div>
            <h1 className='headline__title animate__animated animate__fadeIn animate__delay-2s'>
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <div className='headline__subtitle animate__animated animate__fadeIn animate__delay-3s'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ipsa cumque nam necessitatibus obcaecati beatae iste blanditiis
              impedit neque provident!
            </div>
            <a
              href='#'
              className='btn btn-light animate__animated animate__fadeIn animate__delay-4s'
            >
              Más Información
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
