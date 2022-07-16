import { ReactElement } from 'react';
import styles from '../../styles/Layout.module.css';
import Footer from '../Footer';
import Header from '../Header';

type Props = {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  return(
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;