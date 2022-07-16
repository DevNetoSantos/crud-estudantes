import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from 'react'
import  Layout  from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap" as string);
  },[]);

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
