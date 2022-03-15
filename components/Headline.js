import React from 'react';
import Image from 'next/image';
import Logo from '../public/images/loghitec-logo.svg';

export const Headline = () => {
  return (
    <div className='container'>
      <div className='headline'>
        <div className='row justify-content-center'>
          <div className='col-xl-10'>
            <div className='headline__logo'>
              <Image
                className='animate__animated animate__fadeIn animate__delay-1s'
                src={Logo}
                alt='Loghitec'
              />
            </div>
            <h1 className='headline__title animate__animated animate__fadeIn animate__delay-2s'>
              Líder en Tecnologías para Seguridad
            </h1>
            <div className='headline__subtitle animate__animated animate__fadeIn animate__delay-3s'>
              Somos distribuidores mayoristas de equipamiento tecnológico para{' '}
              <b>video vigilancia</b>, <b>sistemas de alarmas</b> y{' '}
              <b>control de acceso</b> de marcas líderes a nivel mundial, con el
              mejor precio del mercado.
            </div>
            <a
              href='#form'
              className='btn btn-outline-light btn-lg animate__animated animate__fadeIn animate__delay-4s'
            >
              Contactar a un asesor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
