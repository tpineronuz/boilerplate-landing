import React from 'react';

export const ServicesCard = ({ service }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-icon gradient'>
          <i className={`${service.icon}`}></i>
        </div>
      </div>
      <div className='card-body'>
        <div className='card-title'>{service.title}</div>
        <div className='card-text'>{service.text}</div>
      </div>
    </div>
  );
};
