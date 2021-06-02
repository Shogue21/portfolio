import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/Header'
import Head from 'next/head'
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const cacheURL = [];

const handleLoadStyle = url => {
  if (cacheURL.includes(url)) {
    return;
  }

  const styleLinks = document.querySelectorAll(
    'link[href*="/_next/static/css/styles.chunk.css"]'
  );

  const timestamp = new Date().valueOf();

  [...styleLinks].map(link => {
    if (link.rel === 'stylesheet') {
      link.href = `/_next/static/css/styles.chunk.css?v=${timestamp}`;
      cacheURL.push(url);
    }
  });
};


function MyApp({ Component, pageProps }) {
  const { asPath, events } = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    events.on('routeChangeComplete', handleLoadStyle);

    return () => {
      events.off('routeChangeComplete', handleLoadStyle);
    };
  }, [asPath]);
  
  return <div>
    <Head> 
      <title>Seth Hogue's Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    </Head>
    
    <Header />
    <Component {...pageProps} />
  </div>
}

export default MyApp
