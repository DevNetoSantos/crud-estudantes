import styles from '../../styles/Cadastro.module.css'
import { useForm } from 'react-hook-form';

const Cadastro = () => {

  const { register, handleSubmit, formState: { erros } } = useForm()

  return(
    <div className={styles.containerCadastro}>
      <div className={styles.mainForm}>
        <div className='cardPost'>
          <h1>Register User</h1>
          <hr />
          <div className={styles.cardBody}>
            <form className={styles.form}>
              <div className={styles.fields}>
                <label>Name</label>
                <input type="text"/>
              </div>
              <div className={styles.fields}>
                <label>Email</label>
                <input type="email"/>
              </div>
              <div className={styles.fields}>
                <label>City</label>
                <input type="text"/>
              </div>
              <div className={styles.btnCadastro}>
                <button className='btn btn-primary'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;