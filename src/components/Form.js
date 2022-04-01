import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Photo from '@assets/images/image-form.jpg';
import { useForm } from 'hooks/useForm';
import addLead from 'services/addLead';

export const Form = () => {
  const router = useRouter();

  const initialForm = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    tag: 'instalador'
  };

  const [values, handleInputChange, reset] = useForm(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    if (
      values.fname == '' ||
      values.lname == '' ||
      values.email == '' ||
      values.phone == ''
    ) {
      setError(true);
    } else {
      setLoading(true);

      //TODO: Capturar fuente y medio de capaña

      addLead(values).then((res) => {
        console.log(res);
        if (res.status === 200) {
          // reset();
          router.push('/gracias');
        } else {
          setError(true);
        }
        setLoading(false);
      });
    }
    //console.log(values);
  };
  return (
    <div className='container'>
      <div className='form' id='form'>
        <div className='row justify-content-center'>
          <div className=' col-lg-11 col-xl-10 col-xxl-9'>
            <div className='card'>
              <div className='card-body'>
                <Image
                  src={Photo}
                  className={'card-image'}
                  alt='Imagen formulario'
                  priority
                />
                <form onSubmit={handleSubmit}>
                  <div className='card-form'>
                    <h5 className=''>Descargá nuestro Catálogo</h5>
                    <div className='mb-3'>
                      <small>
                        {error ? (
                          <span className='text-danger'>
                            Todos los campos son obligatorios
                          </span>
                        ) : (
                          <span>Completa con tus datos</span>
                        )}
                      </small>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Nombre'
                          name='fname'
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className='col-md-6'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Apellido'
                          name='lname'
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                      name='email'
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Teléfono'
                      name='phone'
                      onChange={handleInputChange}
                      required
                    />
                    <div className='mb-1'>¿A qué te dedicas?</div>
                    <div className='card-checkbox'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='tag'
                          id='tag1'
                          value='instalador'
                          checked={values.tag == 'instalador' ? true : false}
                          onChange={handleInputChange}
                        />
                        <label className='form-check-label' htmlFor='tag1'>
                          Instalador
                        </label>
                      </div>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='tag'
                          id='tag2'
                          value='empresa'
                          checked={values.tag == 'empresa' ? true : false}
                          onChange={handleInputChange}
                        />
                        <label className='form-check-label' htmlFor='tag2'>
                          Empresa
                        </label>
                      </div>
                    </div>
                    <button
                      className='btn btn-lg btn-secondary w-100'
                      disabled={loading ? true : false}
                    >
                      Descargar Catalogo{' '}
                      {loading && (
                        <span
                          className='spinner-border spinner-border-sm mr-5'
                          role='status'
                          aria-hidden='true'
                        ></span>
                      )}
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
