import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../contexts/ContextProvider'

export default function LoginAdmin() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);
    const {user, token, setUser, setToken} = useStateContext();

    // useEffect(()=>{
    //     if (token && user.role == "admin") {
    //         navigate('/admin/users');
    //         // return <Navigate to='/admin/users' />
    //     } else if (!token || user.role != "admin") {
    //         navigate('/admin');
    //         // return <Navigate to='/admin' />
    //     }
    // },[token,user])

    // if (!token || user.role != "admin") {
    //     return <Navigate to='/admin' />
    // }

    // if (token && user.role == 'admin') {
    //     return <Navigate to={'/admin/users'} />
    // }

    // useEffect(()=>{

    // }, [])

    // if (token && user && user.role == 'admin') {
    //     return <Navigate to='/admin/users' />
    // }

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        setErrors(null)
        axiosClient.post('/loginAdmin', payload)
        .then(({data})=>{
            // console.log('data=')
            // console.log(data)
            setUser(data.user)
            setToken(data.token)
            navigate('/admin')
        })
        .catch(err=>{
            const response = err.response;
            if (response && response.status === 422) {
                if (response.data.errors) {
                    setErrors(response.data.errors)
                } else {
                    setErrors({
                        email: [response.data.message]
                    })
                }
                
            }
        })
    }

    
    return (
        <div className='login-signup-form animated fadeInDown'>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className='title'>Login for administrators</h1>
                    {
                        errors && <div className="alert">
                            {Object.keys(errors).map(key=>(
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                        </div>
                    }
                    <input ref={emailRef} type='email' placeholder='Email' autoFocus/>
                    <input ref={passwordRef} type='password' placeholder='Password' />
                    <button className="btn btn-block">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
