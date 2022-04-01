import React from 'react';
import Image from 'next/image';
import logoWip from '@assets/images/wip-white.svg';

export const Footer = () => {
  return (
    <footer>
      <a
        href='https://wipargentina.com/?utm_source=loghitec&utm_medium=link&utm_campaign=link-footer-landing'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src={logoWip} height={16} />
      </a>
    </footer>
  );
};
