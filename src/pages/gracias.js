import { Logo } from 'components/Logo';
import { Thanks } from 'components/Thanks';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className='header thanks'></div>
      <div className='wrapper'>
        <Logo />
        <Thanks />
      </div>
      <Footer />
    </>
  );
}
