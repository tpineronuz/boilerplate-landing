import React from 'react';

export const CtaButton = ({
  textBtn = 'Saber más',
  classBtn = 'btn btn-primary'
}) => {
  const handleClick = () => {
    document.getElementById('form').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };
  return (
    <button onClick={handleClick} className={classBtn} id={'btn-cta-banners'}>
      {textBtn}
    </button>
  );
};
