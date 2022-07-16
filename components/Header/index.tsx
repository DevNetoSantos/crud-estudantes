import styles from '../../styles/Header.module.css';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
  return(
    <div className={`container`}>
      <nav className="navbar navbar-expand-lg bg-light">
        <Link className="navbar-brand" href="aaa">
          <a>
          <h1 className='display-8'>Crud</h1>
          </a>
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
              <Link href='#'>
                <button className='btn btn-primary'>Cadastrar</button>
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
}

export default Header;