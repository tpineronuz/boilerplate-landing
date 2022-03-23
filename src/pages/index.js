import { Cta } from 'components/Cta';
import { Features } from 'components/Features';
import { Logo } from 'components/Logo';
import { Brandings } from '../components/Brandings';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Headline } from '../components/Headline';
import { Servicies } from '../components/Servicies';

export default function Home() {
  return (
    <>
      <div className='header gradient'></div>
      <div className='wrapper'>
        <Logo />
        <Headline />
        <Form />
        <Servicies />
        <Brandings />
        <Cta
          ctaTitle={'Lorem, ipsum dolor.'}
          ctaSubtitle={'Lorem ipsum dolor sit amet.'}
          textBtn={'Descargar Catálogo!'}
        />
        <Features />
        <Cta
          ctaTitle={'Lorem, ipsum dolor.'}
          ctaSubtitle={'Lorem ipsum dolor sit amet.'}
          textBtn={'Solicitá nuestro Catálogo!'}
        />
        <Footer />
      </div>
    </>
  );
}
