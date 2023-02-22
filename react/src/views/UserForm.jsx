import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function UserForm() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [selectValue,setSelectValue] = useState('')
    const [prestations, setPrestations] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const {setNotification} = useStateContext();
    const [user, setUser] = useState({
        id: null,
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 'user',
    });
    const roles = [
        {value: 'user', text: 'User'},
        {value: 'prestataire', text: 'Prestataire'},
        {value: 'admin', text: 'Admin'},
    ]

    const options = roles.map((option)=>{
        return <option 
        key={option.value}
        value={option.value}
        // defaultValue={option.value}
        // selected={option.value===selectValue}
        >
            {option.text}
        </option>  
    })

    const getPrestations = (id) => {
        axiosClient.get(`/user/${id}/getPrestations`)
        .then(({data})=>{
            // console.log(data);
            setPrestations(data);
        })
      }

    if (id) {
        useEffect(()=>{
            setLoading(true);
            const fetchData = async () => {
                await axiosClient.get(`/users/${id}`)
                .then(({data})=>{
                    setLoading(false);
                    // console.log(data)
                    setUser(data);
                    setSelectValue(data.role)
                    // console.log(data.role)
                })
                .catch((err)=>{
                    console.log(err);
                    setLoading(false);
                })
            }
            fetchData()
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms))
            }
            
            // setTimeout(
            //     console.log(selectValue),
            //     1000
            // )
            sleep(1000)
        }, []);
        useEffect(()=>{
            getPrestations(id)
          },[])
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // alert(user.role)
        if (user.id) {
            axiosClient.put(`/users/${user.id}`, user)
            .then(()=>{
                setNotification('User was successfully updated !')
                navigate('/admin/users')
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
                navigate('/admin/users')
            })
            .catch(err=>{
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
        }
    }

    const location = window.location.pathname

    function selectOptionByJSONValue(jsonValue){
        const optionSelector = `#role option[value="${jsonValue}"]`;
        return document.querySelector(optionSelector);  
    }

    return (
        <>
            <div className="card animated fadeInDown" style={{ padding: '0 20px 20px' }}>
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
                {user.id && <h1>Update User: {user.name}</h1>}
                {!user.id && <h1>New User</h1>}
                {!loading && 
                    <form onSubmit={onSubmit}>
                        <input value={user.name} onChange={e=>setUser({...user, name:e.target.value})} placeholder='Name' />
                        <input type={'email'} value={user.email} onChange={e=>setUser({...user, email:e.target.value})} placeholder='Email' />
                        <input type={'password'} onChange={e=>setUser({...user, password:e.target.value})} placeholder='Password' autoComplete="new-password"/>
                        <input type={'password'} onChange={e=>setUser({...user, password_confirmation:e.target.value})} placeholder='Password confirmation' />
                        <label>Choisir le rôle de l'utilisateur : </label>
                        <select onChange={e=>{setUser({...user,role:e.target.value});setSelectValue(e.target.value)}} id={'role'} value={selectValue}>
                            {/* <option value={'user'}>user</option>
                            <option value={'prestataire'}>prestataire</option>
                            <option value={'admin'}>admin</option> */}
                            {options}
                        </select>
                        <br /><br />
                        {prestations.length > 0 && (
                            <div style={{ marginBottom: '20px' }}>
                                <button onClick={()=>{navigate(`/admin/users/${id}/showPrestation`)}}>Voir les prestations de {user.name}</button>
                            </div>
                        )}
                        {user.role == 'prestataire' && location != '/admin/users/new' && (
                            <div style={{ marginBottom: '20px' }}>
                                <button onClick={()=>{navigate(`/admin/users/${id}/addPrestation`)}}>Ajouter une prestation</button>
                            </div>
                        )}
                        <button className="btn">Save</button>
                    </form>
                }
            </div>
        </>
    )
}
