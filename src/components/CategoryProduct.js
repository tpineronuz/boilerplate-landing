import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Equipamiento tecnológico para Sistemas de Video Vigilancia',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt pariatur nobis porro cum ullam eveniet voluptas veritatis itaque? Sapiente?',
    image:
      'https://images.unsplash.com/photo-1549109926-58f039549485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    align: 'left'
  },
  {
    id: 2,
    title: 'Equipamiento tecnológico para Sistemas de Alarmas',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt pariatur nobis porro cum ullam eveniet voluptas veritatis itaque? Sapiente?',
    image:
      'https://img.freepik.com/free-photo/sistema-de-alarma-cctv-alarm-system-cctv-home-wooden-table_544912-75.jpg?w=1380',
    align: 'right'
  },
  {
    id: 3,
    title: 'Equipamiento tecnológico para Acceso de Control',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt pariatur nobis porro cum ullam eveniet voluptas veritatis itaque? Sapiente?',
    image:
      'https://img.freepik.com/free-photo/scanning-finger-coronavirus-contaminated-fingerprint-access-control_53876-95279.jpg?w=1380&t=st=1648237000~exp=1648237600~hmac=273770e47f5764488665e0b12c8be6d85aed6e183ccfeee063bcc21e631c10a5',
    align: 'left'
  }
];

export const CategoryProduct = () => {
  return (
    <div className='categories'>
      <div className='container'>
        {categories.map((category) => (
          <div key={category.id} className='categories__item'>
            <img
              src={category.image}
              alt=''
              className={
                category.align == 'left'
                  ? 'categories__image order-1'
                  : 'categories__image order-2'
              }
            />
            <div
              className={
                category.align == 'left'
                  ? 'categories__content order-2'
                  : 'categories__content order-1'
              }
            >
              <div className='categories__title'>{category.title}</div>
              <div className='categories__text'>{category.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
