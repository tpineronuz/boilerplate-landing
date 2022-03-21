import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Photo from '@assets/images/image.jpg';

export const Form = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      router.push('/gracias');
    }, 2000);
  };
  return (
    <div className='container'>
      <div className='form' id='form'>
        <div className='row justify-content-center'>
          <div className=' col-lg-9 col-xl-8 col-xxl-7'>
            <div className='card'>
              <div className='card-body'>
                <Image src={Photo} className={'card-image'} />
                <form onSubmit={handleSubmit}>
                  <div className='card-form'>
                    <h5 className='mb-4'>Descargá nuestro Catálogo</h5>
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
                    <div className='mb-1 mt-4'>¿A qué te dedicas?</div>
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
                    <button className='btn btn-primary text-white w-100'>
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
