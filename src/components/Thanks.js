import React from 'react';

export const Thanks = () => {
  return (
    <div className='thanks'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h3>Gracias por completar el formulario</h3>
            <p className='lead mb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              debitis natus quidem fugiat quae porro animi alias, similique
              temporibus incidunt?
            </p>
            <a
              href='/'
              className='btn btn-lg btn-primary text-white text-uppercase'
            >
              Descargar Catálogo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
