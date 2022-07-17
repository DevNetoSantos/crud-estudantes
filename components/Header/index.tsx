import styles from '../../styles/Header.module.css';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
  return(
    <div className={styles.container}>
      <div className={`container`}>
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" href={"/"}>
            <h1 className={`${styles.h1}`}>Crud</h1>
          </Link>

          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
              
              <span> <AiOutlineMenu /> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className='navbar-nav ms-auto text-center'>
              <li className='nav-item'>
                <Link href={'/cadastro'}>
                  <button className='btn btn-primary'>Register</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;