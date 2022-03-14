import { Brandings } from '../components/Brandings';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { Headline } from '../components/Headline';

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
      <div className='header'>
        <img
          src='https://images.unsplash.com/photo-1516345079912-c3e011a5a848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80'
          alt=''
        />
      </div>
      <div className='wrapper'>
        <Headline />
        <Form />
        <Brandings />
        <Footer />
      </div>
    </>
  );
}
