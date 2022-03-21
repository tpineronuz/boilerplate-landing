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
    title: 'Precios competitivos',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  },
  {
    id: 3,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Stock permanente',
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
                Sómos líderes en Tecnologías para Seguridad
              </div>
              <div className='section__header-subtitle'>
                Somos distribuidores mayoristas de equipamiento tecnológico para
                video vigilancia, sistemas de alarmas y control de acceso de
                marcas líderes a nivel mundial, con el mejor precio del mercado.
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
