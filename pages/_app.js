import Head from 'next/head';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
