import React, { useState } from 'react';
import axiosClient from '../axios-client'
import { Link, Navigate, Outlet } from 'react-router-dom';
import { SplitScreen } from '../components/SplitScreen'
import { useStateContext } from '../contexts/ContextProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { display } from '@mui/system';

export default function DefaultAdminLayout() {

    const {user, token, notification, setUser, setToken} = useStateContext();
    const navigate = useNavigate();
    const userLocal = JSON.parse(localStorage.getItem('USER'))

    // if (!token || user.role != 'admin') {
    //     return <Navigate to='/admin' />
    // }

    // if (!token || user?.role != 'admin') {
    //     return <Navigate to='/admin' />
    // }

    // console.log(Object.keys(user));

    useEffect(()=>{
        axiosClient.get('/user')
        .then(({data})=>{
            return setUser(data,()=>{
                // console.log(user.role)
                if (!token || userLocal?.role != 'admin') {
                    return <Navigate to='/admin' />
                }
            })
        })
        .then(()=>{
            // console.log(userLocal)
            // console.log(userLocal.role)
            // console.log(user)
            // console.log(user.role)
        })
    }, [])

    // useEffect(()=>{
    //     alert(user.role)
    // },[])
    
    // setTimeout(()=>{
    // if (!token || JSON.parse(user)?.role != 'admin') {
    //     return <Navigate to='/admin' />
    // }
    if (!token || userLocal?.role != 'admin') {
        return <Navigate to='/admin' />
    }
    // },1100)
    

    // if (!token || user?.role != 'admin') {
    //     return <Navigate to='/admin' />
    // }


    // useEffect(()=>{
    //     axiosClient.get('/user')
    //     .then(({data})=>{
    //         setUser(data)
    //     })
    // }, [])



    const onLogout = (e) => {
        e.preventDefault()
        axiosClient.post('/logout')
        .then(()=>{
            setUser({})
            setToken(null)
            // navigate('/admin')
        })
    }

    const handleEvents = () => {
        navigate('/admin/events')
      }
    
      const handleUsers = () => {
        navigate('/admin/users')
      }

      const handleCategories = () => {
        navigate('/admin/categories')
      }

      const handleTest = () => {
        navigate('/admin/filesUpload')
      }
    
      const LeftHandComponent = () => {
          return ( 
              <>
              <div style={{ height:'100%',backgroundColor:'grey',textAlign:'center' }}>
              <br />
                  <div style={{ display:'flex' }}>
                    <Link to={'/admin/users'} style={{ display:'flex', justifyContent:'center', flex:'1',textDecoration:'none',color:'inherit' }}>
                    <svg style={{ flex:'30%' }} width={50} height={50} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 style={{ display:'flex',flex:'50%',alignItems:'center' }}>{user.name}</h3>
                    </Link>
                  </div>
                  <br />
                  <button onClick={handleUsers} style={{ width:'80%' }}>Gestion users</button>
                  <br /><br />
                  <button onClick={handleCategories} style={{ width:'80%' }}>Gestion catégories</button>
                  <br /><br />
                  <button onClick={handleEvents} style={{ width:'80%' }}>Réservations</button>
                  <br /><br />
                  <button onClick={handleTest} style={{ width:'80%' }}>Upload images</button>
                  <br /><br />
                  <button onClick={onLogout} style={{ width:'80%' }}>Logout</button>
              </div>
              </>
          )
      }
    
      const RightHandComponent = () => {
          return (
              <>
              <div>
              <h1 style={{ textAlign:'center', marginBottom: '20px' }}>Content administrator</h1>
              {/* <div style={{ margin:'10px 50px' }}>
                <h3>Partie droite</h3>
              </div> */}
              <Outlet />
              </div>
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
    