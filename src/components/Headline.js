import React from 'react';

import { CtaButton } from './CtaButton';

export const Headline = () => {
  return (
    <div className='container'>
      <div className='headline'>
        <div className='row justify-content-center'>
          <div className='col-xl-10'>
            <h1 className='headline__title '>
              Distribuidor tecnológico mayorista de materiales de seguridad
            </h1>
            <div className='headline__subtitle'>
              Precios oficiales, soporte técnico y stock local
            </div>
            <CtaButton
              textBtn={'Saber más'}
              classBtn={'btn btn-outline-light btn-lg'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
