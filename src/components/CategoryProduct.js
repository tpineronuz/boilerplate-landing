import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Equipamiento tecnológico para Sistemas de Video Vigilancia',
    text: 'Proveemos todo lo necesario para una integración exitosa, nuestra propuesta de stock local brinda una salida ágil para nuevos proyectos o ampliaciones.',
    image: '/images/product-camera.jpg',
    align: 'left'
  },
  {
    id: 2,
    title: 'Equipamiento tecnológico para Sistemas de Alarmas',
    text: 'Distribuímos de manera directa Centrales de alarmas, periféricos y accesorios de los principales fabricantes. Precios exclusivos y stock inmediato.',
    image: '/images/product-alarm.jpg',
    align: 'right'
  },
  {
    id: 3,
    title: 'Equipamiento tecnológico para Acceso de Control',
    text: 'Con foco en la integración de sistemas que colaboren al control y registro, representamos a marcas líderes de sistemas de control de acceso y asistencia.',
    image: '/images/product-access-control.jpg',
    align: 'left'
  },
  {
    id: 4,
    title: 'Equipamiento tecnológico para Cableado Estructurado',
    text: 'Nuestras representaciones y experiencia en conectividad nos promueven como socio estratégico en cuanto a provisión de materiales y electrónica para redes de datos.',
    image: '/images/product-structured-cable.jpg',
    align: 'right'
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
