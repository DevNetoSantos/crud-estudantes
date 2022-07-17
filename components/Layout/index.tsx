import { ReactElement } from 'react';
import styles from '../../styles/Layout.module.css';
import Footer from '../Footer';
import Header from '../Header';
import Head from 'next/head';

type Props = {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  return(
    <div className={styles.container}>
      <Head>
        <title>Dev | Neto</title>
      </Head>
      <Header />
      <main className={`container ${styles.containerMain}`}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;