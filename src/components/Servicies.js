import React from 'react';
import { ServicesCard } from './ServicesCard';

const services = [
  {
    id: 1,
    icon: 'fa-solid fa-2x fa-chalkboard-user',
    title: 'Asesoramiento especializado a instaladores',
    text: 'Soporte experto. Más de dos décadas en el rubro seguridad y conectividad al servicio del instalador.'
  },
  {
    id: 2,
    icon: 'fa-solid fa-2x fa-money-bill-1-wave',
    title: 'Precio oficial a Gremio',
    text: 'Mediante alianzas estratégicas con distribuidores y fabricantes, llevamos una propuesta exclusiva a integradores.'
  },
  {
    id: 3,
    icon: 'fa-solid fa-2x fa-cube',
    title: 'Stock local permanente',
    text: 'Materiales para integración de proyectos tecnológicos. Somos distribuidores directos, disponemos de stock inmediato.'
  },
  {
    id: 4,
    icon: 'fa-solid fa-2x fa-dolly',
    title: 'Envios a todo el país',
    text: 'Contamos con acuerdos con las principales empresas logísticas del país. Priorizamos tu envío.'
  },
  {
    id: 5,
    icon: 'fa-solid fa-2x fa-award',
    title: 'Garantia oficial de fábrica',
    text: 'Nuestros acuerdos oficiales nos permiten extender las condiciones  de garantía de cada fabricante.'
  }
];

export const Servicies = () => {
  return (
    <section className='services'>
      <div className='container'>
        <div className='section__header'>
          <div className='row justify-content-center'>
            <div className='col-md-9'>
              <div className='section__header-pretitle'>
                tecnología & innovación
              </div>
              <div className='section__header-title'>
                Soluciones tecnológicas aplicadas a la seguridad
              </div>
              <div className='section__header-subtitle'>
                Contamos con un servicio personalizado de acompañamiento para el
                instalador ó responsables tecnológicos de las compañías y los
                ayudamos a tomar la mejor desición en la elección de
                equipamiento de seguridad a adquirir.
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          {services.map((service) => (
            <div key={service.id} className='col-md-6 col-lg-5 col-xl-4'>
              <ServicesCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
