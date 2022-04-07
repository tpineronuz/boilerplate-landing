import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logotipo from '@assets/images/loghitec-logo.svg';

export const Logo = () => {
  return (
    <div className='logo'>
      <div className='logo__image animate__animated animate__flipInY'>
        <Link href='/'>
          <a>
            <Image src={Logotipo} alt='Loghitec' />
          </a>
        </Link>
      </div>
    </div>
  );
};
