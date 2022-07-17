import styles from '../styles/Home.module.css';
import api from '../services/api';
import {User} from '../types/User';
import Link from 'next/link';
import axios from 'axios';

type Props = {
  users: User[];
}

const Home = ({ users }: Props) => {

  const deleteUser = (id: number) => {
    axios.delete(`/api/users/${id}`)
  }

  return(
  <div className={`${styles.containerHome}`}>
      <table className={`table table-striped table-hover ${styles.table}`}>
        <thead className='table-dark'>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
            {users.map((item, index)=> (
              <>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.city}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() =>deleteUser(item.id)}>Delete</button>
                  </td>
                  <td>
                    <Link href={{pathname: `/editar/${item.id}`}}>
                      <button className='btn btn-primary'>Edit</button>
                    </Link>
                  </td> 
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export const getServerSideProps = async () => {
  const users = await api.getAllUsers(0);

  return {
    props: {
      users
    }
  }
}

export default Home;