import React, { useState } from 'react';
import axiosClient from '../axios-client'
import { Link, Navigate, Outlet } from 'react-router-dom';
import { SplitScreen } from '../components/SplitScreen'
import { useStateContext } from '../contexts/ContextProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLayout() {
  
  const {user, token, notification, setUser, setToken} = useStateContext();
  const navigate = useNavigate();

  useEffect(()=>{
    
    const fetchData = () => {
        // console.log(user)
        axiosClient.get('/user')
        .then(({data})=>{
            // console.log(data)
            setUser(data);
        })
        .catch((err)=>{
            if(err.response) {
              console.log(err.response.data);
            }
        })
    }
    fetchData()

    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms))
    // }
    
    // setTimeout(
    //     console.log(selectValue),
    //     1000
    // )
    // sleep(1000)

}, []);

  if (!token || user.role != 'admin') {
      return <Navigate to='/admin/home' />
  }

  const onLogout = (e) => {
    e.preventDefault()
    axiosClient.post('/logout')
    .then(()=>{
        setUser({})
        setToken(null)
    })
  }

  // useEffect(()=>{
  //   axiosClient.get('/user')
  //   .then(({data})=>{
  //     console.log(data);
  //     setUser(data);
  //     // setIsAuthenticated(true);
  //   })
  // },[])

  const handleEvents = () => {
    navigate('/admin/events')
  }

  const handleUsers = () => {
    navigate('/admin/users')
  }

  const LeftHandComponent = () => {
      return ( 
          <>
          <div style={{ height:'100%',backgroundColor:'grey',textAlign:'center' }}>
              <h3>Administrator</h3>
              <br /><br />
              <button onClick={handleUsers} style={{ width:'80%' }}>Gestion users</button>
              <br /><br />
              <button onClick={handleEvents} style={{ width:'80%' }}>Gestion events</button>
              <br /><br />
              <button onClick={onLogout} style={{ width:'80%' }}>Logout</button>
          </div>
          </>
      )
  }

  const RightHandComponent = () => {
      return (
          <>
          <h1 style={{ textAlign:'center', marginBottom: '20px' }}>Content administrator</h1>
          {/* <div style={{ margin:'10px 50px' }}>
            <h3>Partie droite</h3>
          </div> */}
          <Outlet />
          </>
      )
  }

  return (
    <SplitScreen leftWeight={1} rightWeight={4}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  )
}
