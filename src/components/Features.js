import React from 'react';

export const Features = () => {
  return (
    <>
      <section className='features'>
        <div className='container'>
          <div className='section__header'>
            <div className='row justify-content-center'>
              <div className='col-md-9'>
                <div className='section__header-pretitle'>
                  trayectoria & experiencia
                </div>
                <div className='section__header-title'>
                  Somos expertos en sistemas de seguridad
                </div>
                <div className='section__header-subtitle'>
                  Nuestros acuerdos de distribucion te ofrecen ventajas
                  competitivas unicas.
                </div>
              </div>
            </div>
          </div>
          <div className='features__content'>
            <ul>
              <li>Tecnología de primera linea</li>
              <li>Mesa de ayuda para integradores</li>
              <li>Demos y webinars de productos</li>
              <li>Catálogo y notificaiciones de lanzamientos</li>
              <li>Envios a todo el país</li>
              <li>Financiación propia a medida</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
