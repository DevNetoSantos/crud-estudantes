import styles from '../../styles/Cadastro.module.css'
import { useForm } from 'react-hook-form';

const Cadastro = () => {

  const { register, handleSubmit, formState: { erros } } = useForm()

  const onSubmit = handleSubmit(data => console.log(data));

  return(
    <div className={styles.containerCadastro}>
      <div className={styles.mainForm}>
        <div className='cardPost'>
          <h1>Register User</h1>
          <hr />
          <div className={styles.cardBody}>
            <form onSubmit={onSubmit} className={styles.form}>
              <div className={styles.fields}>
                <label>Name</label>
                <input type="text" {...register('nome')} name='nome'/>
              </div>
              <div className={styles.fields}>
                <label>Email</label>
                <input type="email" {...register('email')} name='email'/>
              </div>
              <div className={styles.fields}>
                <label>City</label>
                <input type="text" {...register('city')} name='city'/>
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