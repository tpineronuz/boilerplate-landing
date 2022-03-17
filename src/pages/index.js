import { Cta } from 'components/Cta';
import { Brandings } from '../components/Brandings';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { Headline } from '../components/Headline';
import { Servicies } from '../components/Servicies';

export default function Home() {
  return (
    <>
      {/* <Header />
      <main>
        <Image
          className='animate__animated animate__fadeIn animate__delay-1s	'
          src={Logo}
          alt='Loghitec'
          width='400'
        />
        <h3 className='animate__animated animate__fadeIn animate__delay-2s	'>
          Mayorista Tecnológico
        </h3>
      </main> */}
      <div className='header'></div>
      <div className='wrapper'>
        <Headline />
        <Form />
        <Servicies />
        <Brandings />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
