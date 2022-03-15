import React from 'react';

export const Form = () => {
  return (
    <div className='container'>
      <div className='form' id='form'>
        <div className='row justify-content-center'>
          <div className=' col-lg-9 col-xl-8 col-xxl-7'>
            <div className='card'>
              <div className='card-body'>
                <div className='card-image'></div>
                <div className='card-form'>
                  <h5 className='mb-3'>Completá con tus datos</h5>
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
                  <div className='mb-1 mt-3'>Lorem, ipsum dolor.</div>
                  <div className='card-checkbox'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='flexRadioDefault'
                        id='flexRadioDefault1'
                        defaultChecked={true}
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexRadioDefault1'
                      >
                        Instalador
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='flexRadioDefault'
                        id='flexRadioDefault2'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexRadioDefault2'
                      >
                        Empresa
                      </label>
                    </div>
                  </div>
                  <button className='btn btn-primary w-100'>Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
