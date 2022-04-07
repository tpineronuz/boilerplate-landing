import { BrandingLogos } from 'components/BrandingLogos';
import { Brandings } from 'components/Brandings';
import { Logo } from 'components/Logo';
import { Thanks } from 'components/Thanks';
import { Validation } from 'components/Validation';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className='header gradient thanks'></div>
      <div className='wrapper'>
        <Logo />
        <div className='pb-5'>
          <Thanks />
        </div>
        <div className='container text-center mt-5'>
          <BrandingLogos />
        </div>
        <Validation />
        <Footer />
      </div>
    </>
  );
}
