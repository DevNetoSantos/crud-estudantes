import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return(
    <div className={` bg-light ${styles.container}`}>
      <div className={`container ${styles.containerFooter}`}>
        <h5 id={styles.h5} >Projeto feito para praticas de estudos</h5>
      </div>
    </div>
  );
}

export default Footer;