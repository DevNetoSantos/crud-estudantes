import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return(
    <div className={`container bg-light ${styles.containerFooter}`}>
      <h5 className='display-8'>Projeto feito para praticas de estudos</h5>
    </div>
  );
}

export default Footer;