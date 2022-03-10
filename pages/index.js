import Image from 'next/image';
import Logo from '../public/images/loghitec-logo.svg';

export default function Home() {
  return (
    <main>
      <Image src={Logo} alt='Loghitec' width='400' />
      <h3>Mayorista Tecnológico</h3>
    </main>
  );
}
