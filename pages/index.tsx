import styles from '../styles/Home.module.css';
import api from '../services/api';
import {User} from '../types/User';
import Link from 'next/link';
import axios from 'axios';
import {FaRegEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'

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
            <th scope="col">Action</th>
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
                    <RiDeleteBin6Line className={styles.del} onClick={() =>deleteUser(item.id)}/>
                    
                    <Link href={{pathname: `/editar/${item.id}`}}>
                      <FaRegEdit className={styles.put}/>
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