import React from 'react';
import { ServicesCard } from './ServicesCard';

const services = [
  {
    id: 1,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Lorem ipsum dolor 1',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  },
  {
    id: 2,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Lorem ipsum dolor 2',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  },
  {
    id: 3,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Lorem ipsum dolor 3',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  },
  {
    id: 4,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Lorem ipsum dolor 4',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  },
  {
    id: 5,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Lorem ipsum dolor 5',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  },
  {
    id: 6,
    icon: 'fa-solid fa-lg fa-video',
    title: 'Lorem ipsum dolor 6',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, eligendi!s'
  }
];

export const Servicies = () => {
  return (
    <section className='services'>
      <div className='container'>
        <div className='section__header'>
          <div className='section__header-pretitle'>Lorem ipsum</div>
          <div className='section__header-title'>
            Lorem ipsum dolor sit amet
          </div>
          <div className='section__header-subtitle'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            explicabo accusamus minus?
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
