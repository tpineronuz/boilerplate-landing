import React from 'react';
import Image from 'next/image';
import logoWip from '@assets/images/wip-white.svg';

export const Footer = () => {
  return (
    <footer>
      <a href='/' target='_blank' rel='noopener noreferrer'>
        <Image src={logoWip} height={16} />
      </a>
    </footer>
  );
};
