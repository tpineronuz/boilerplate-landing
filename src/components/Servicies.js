import React from 'react';
import { ServicesCard } from './ServicesCard';

const services = [
  {
    id: 1,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Asesoramiento profesional',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  },
  {
    id: 2,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Precios directo de fábrica',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  },
  {
    id: 3,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Stock local permanente',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  },
  {
    id: 4,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Envios a todo el país',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  },
  {
    id: 5,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Garantia oficial de fábrica',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  },
  {
    id: 6,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Soporte Técnico permanente',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
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
        <div className='row'>
          {services.map((service) => (
            <div key={service.id} className='col-md-4'>
              <ServicesCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
