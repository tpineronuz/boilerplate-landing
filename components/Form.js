import React from 'react';

export const Form = () => {
  return (
    <div className='container'>
      <div className='form'>
        <div className='row justify-content-center'>
          <div className='col-md-7'>
            <div className='card'>
              <div className='card-body'>
                <div className='card-image'></div>
                <div className='card-form'>
                  <h5 className='mb-3'>Lorem ipsum</h5>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Nombre'
                  />
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Apellido'
                  />
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Email'
                  />
                  <input
                    type='text'
                    className='form-control mb-3'
                    placeholder='Teléfono'
                  />
                  <button className='btn btn-secondary w-100'>Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
