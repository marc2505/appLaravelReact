import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../contexts/ContextProvider'

export default function LoginAdmin() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);
    const {user, token, setUser, setToken} = useStateContext();

    useEffect(()=>{
        console.log('token=',token);
        console.log('role=',user.role)
        if (token && user.role == "admin") {
            navigate('/admin/dashboard');
        } else if (!token || user.role != "admin") {
            navigate('/admin');
        }
    },[])

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        setErrors(null)
        axiosClient.post('/loginAdmin', payload)
        .then(({data})=>{
            setUser(data.user)
            setToken(data.token)
            navigate('/admin/dashboard')
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
                    <input ref={emailRef} type='email' placeholder='Email' />
                    <input ref={passwordRef} type='password' placeholder='Password' />
                    <button className="btn btn-block">
                        Login
                    </button>
                </form>
            </div>
        </div>    
    )
}
