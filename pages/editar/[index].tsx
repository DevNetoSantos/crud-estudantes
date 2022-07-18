import styles from '../../styles/Editar.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IFormInputs {
  name: string;
  email: string;
  city: string;
}

const schema = yup.object({
  name: yup.string().required().min(2),
  email: yup.string().required(),
  city: yup.string().required().min(2)
}).required();

const Editar = () => {
  let router = useRouter()
  const { query } = useRouter()
  const  useID  = query.index

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  useEffect(()=>{
    axios.get(`/api/users/${useID}`)
    .then((res)=>{
      setValue('name', res.data.user.name)
      setValue('email', res.data.user.email)
      setValue('city', res.data.user.city)
    })
  }, [])
  
  const onSubmit = (data: IFormInputs) => axios.put(`/api/users/${useID}`, data)
  .then(()=>{
    console.log('user edit com sucesso.')
    router.push('/')
  })
  .catch((error)=>{
    console.log(error)
    alert('Error, tente novamente.')
  })

  return(
    <div className={styles.containerEditar}>
      <div className={styles.mainForm}>
        <div className='cardPost'>
          <h1>Edit User</h1>
          <hr />
          <div className={styles.cardBody}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.fields}>
                <label>Name</label>
                <input type="text" {...register('name')} name='name'/>
                <p className='text-danger'>{errors.name?.message}</p>
              </div>
              <div className={styles.fields}>
                <label>Email</label>
                <input type="email" {...register('email')} name='email'/>
                <p className='text-danger'>{errors.email?.message}</p>
              </div>
              <div className={styles.fields}>
                <label>City</label>
                <input type="text" {...register('city')} name='city'/>
                <p className='text-danger'>{errors.city?.message}</p>
              </div>
              <div className={styles.btnEditar}>
                <button className='btn btn-primary'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editar;