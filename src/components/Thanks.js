import React from 'react';

export const Thanks = () => {
  return (
    <div className='thanks'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h3>Gracias por completar el formulario!</h3>
            <p className='lead mb-5'>
              Somos distribuidores mayoristas de equipamiento tecnológico para
              video vigilancia, sistemas de alarmas, control de acceso y
              cableado estructurado de marcas líderes a nivel mundial.
            </p>
            <a
              id='btn-download'
              href='https://drive.google.com/drive/folders/1FByrlrZBr8gtWc7uBrlKXRzLRlcNo9pb?usp=sharing'
              target='_blank'
              className='btn btn-lg btn-secondary text-white text-uppercase px-4'
            >
              Descargar Catálogos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
