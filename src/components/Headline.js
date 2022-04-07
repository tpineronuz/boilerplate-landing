import React from 'react';

import { CtaButton } from './CtaButton';

export const Headline = () => {
  return (
    <div className='container'>
      <div className='headline'>
        <div className='row justify-content-center'>
          <div className='col-xl-8'>
            <h1 className='headline__title '>
              Líder en tecnologías para seguridad
            </h1>
            <div className='headline__subtitle'>
              Somos distribuidores mayoristas de equipamiento tecnológico para
              video vigilancia, sistemas de alarmas, control de acceso y
              cableado estructurado de marcas líderes a nivel mundial.
            </div>
            <CtaButton
              textBtn={'Saber más'}
              classBtn={'btn btn-outline-light btn-lg'}
              id={'btn-cta-headline'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
