import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return <div>
    <head>
      <title>Seth Hogue's Portfolio</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
      <script src="../public/mouseTrail.js"></script>
    </head>
    <Header />
    <Component {...pageProps} />
  </div>
}

export default MyApp
