import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head> 
      <title>Seth Hogue's Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    <Component {...pageProps} />
  </div>
}

export default MyApp
