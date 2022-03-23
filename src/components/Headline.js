import React from 'react';

import { CtaButton } from './CtaButton';

export const Headline = () => {
  return (
    <div className='container'>
      <div className='headline'>
        <div className='row justify-content-center'>
          <div className='col-xl-9'>
            <h1 className='headline__title '>
              Líder en tecnologías para seguridad
            </h1>
            <div className='headline__subtitle'>
              Somos distribuidores mayoristas de equipamientos tecnológico para
              video vigilancia, sistemas de alarmas y control de acceso,
              representando a marcas líderes de nivel mundial y con el mejor
              precio en el mercado.
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
