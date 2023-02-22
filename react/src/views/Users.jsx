import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function Users() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const {user, token, notification, setUser, setToken, setNotification} = useStateContext()

  useEffect(()=>{
    getUsers();
  }, [])

  const onDelete = (u) => {
    if (!window.confirm('Are you sure you want to delete this user ?')) {
      return;
    }
    axiosClient.delete(`/users/${u.id}`)
    .then(()=>{
      setNotification('User was successfully deleted !')
      getUsers();
    })
  }

  const getUsers = () => {
    setLoading(true);
    axiosClient.get('/users')
    .then(({data}) => {
      setLoading(false);
      // console.log(data);
      setUsers(data.data);
    })
    .catch((e)=>{
      setLoading(false);
      console.error(e);
    })
  }

  return (
    <div>
      <h1>{user.role}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Users</h1>
        <Link to='/new' className='btn-add'>Add new</Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Create Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {loading && <tbody>
            <tr>
              <td colSpan={5} className={'text-center'}>
                Loading ...
              </td>
            </tr>
          </tbody>
          }
          {!loading && <tbody>
            {users.map(u=>(
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.created_at}</td>
                <td>
                  <Link to={'/users/'+u.id} className='btn-edit'>Edit</Link>
                  &nbsp;
                  <button onClick={e=>onDelete(u)} className='btn-delete'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          }
        </table>
      </div>
    </div>
  )
}
