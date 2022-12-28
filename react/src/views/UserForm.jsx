import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function UserForm() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext();
    const [user, setUser] = useState({
        id: null,
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    if (id) {
        useEffect(()=>{
            setLoading(true);
            axiosClient.get(`/users/${id}`)
            .then(({data})=>{
                setLoading(false);
                setUser(data);
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            })
        }, []);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (user.id) {
            axiosClient.put(`/users/${user.id}`, user)
            .then(()=>{
                setNotification('User was successfully updated !')
                navigate('/users')
            })
            .catch(err=>{
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
        } else {
            axiosClient.post(`/users`, user)
            .then(()=>{
                
                setNotification('User was successfully created !')
                navigate('/users')
            })
            .catch(err=>{
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
        }
    }

    return (
        <>
            {user.id && <h1>Update User: {user.name}</h1>}
            {!user.id && <h1>New User</h1>}
            <div className="card animated fadeInDown">
                {loading && (
                    <div className="text-center">Loading ...</div>
                )}
                {
                    errors && <div className="alert">
                        {Object.keys(errors).map(key=>(
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>
                }
                {!loading && 
                    <form onSubmit={onSubmit}>
                        <input value={user.name} onChange={e=>setUser({...user, name:e.target.value})} placeholder='Name' />
                        <input type={'email'} value={user.email} onChange={e=>setUser({...user, email:e.target.value})} placeholder='Email' />
                        <input type={'password'} onChange={e=>setUser({...user, password:e.target.value})} placeholder='Password' />
                        <input type={'password'} onChange={e=>setUser({...user, password_confirmation:e.target.value})} placeholder='Password confirmation' />
                        <button className="btn">Save</button>
                    </form>
                }
            </div>
        </>
    )
}
