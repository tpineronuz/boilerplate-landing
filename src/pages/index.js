import { CategoryProduct } from 'components/CategoryProduct';
import { Cta } from 'components/Cta';
import { Features } from 'components/Features';
import { Logo } from 'components/Logo';
import { Validation } from 'components/Validation';
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
          ctaTitle={'¿Sos instalador?'}
          ctaSubtitle={'Descubrí hoy los beneficios especiales para vos'}
          textBtn={'Descargar Catálogo!'}
        />
        <Features />
        <CategoryProduct />
        <Cta
          ctaTitle={'Precio especial a Gremio'}
          ctaSubtitle={
            'Consigue nuestro cátalago y accede a productos exclusivos'
          }
          textBtn={'Descargar Catálogo!'}
        />
        <Validation />
        <Footer />
      </div>
    </>
  );
}
