import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';
import PrestationForm from './PrestationForm';

export default function AjoutPrestation() {

  const {id} = useParams();
  const [prestataire, setPrestataire] = useState(null);
  const [prestations, setPrestations] = useState([]);
  const {user, token, notification, setUser, setToken} = useStateContext();
  const navigate = useNavigate();

//   useEffect(()=>{
//     axiosClient.get('/user/name')
//     .then(({data})=>{
//         // console.log(data);
//         // setUser(data);
//     })
//   }, [])

//   const getNomPrestataire = (id) => {
//     axiosClient.get(`/user/${id}/getName`)
//     .then(({data})=>{
//         console.log(data);
//     })
//   }

  const getPrestataire = (id) => {
    axiosClient.get(`/user/${id}/getPrestataire`)
    .then(({data})=>{
        // console.log(data);
        setPrestataire(data);
    })
  }

  const getPrestations = (id) => {
    axiosClient.get(`/user/${id}/getPrestations`)
    .then(({data})=>{
        // console.log(data);
        setPrestations(data);
    })
  }

  useEffect(()=>{
    // getNomPrestataire(id)
    getPrestataire(id)
    getPrestations(id)
  },[])

  return (
    <div style={{ padding: '0 20px 20px' }}>
        <h1 style={{ marginBottom: '20px' }}>AjoutPrestation</h1>

        {/* <p>Nom du prestataire = {prestataire && prestataire.name}</p>

        <p>nb prestations = {prestations && prestations.length}</p> */}

        <PrestationForm id={id} prestations={prestations} />

    </div>
  )
}
