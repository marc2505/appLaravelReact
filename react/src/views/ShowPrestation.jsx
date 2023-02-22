import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axiosClient from '../axios-client';
import parse from 'html-react-parser';
// import functions from '../apifunction/PrestationsApi';



export default function ShowPrestation() {
    
    const {id} = useParams();
    let catNom = '';
    const [cat, setCat] = useState([]);
    const [prestataire, setPrestataire] = useState(null);
    const [prestations, setPrestations] = useState([]);
    const [loading, setLoading] = useState(false)

    const getPrestataire = (id) => {
        axiosClient.get(`/user/${id}/getPrestataire`)
        .then(({data})=>{
            // console.log(data);
            setPrestataire(data);
        })
    }

    const getPrestations = async (id) => {
        await axiosClient.get(`/user/${id}/getPrestations`)
        .then(({data})=>{
            // console.log(data);
            setPrestations(data);
        })
    }

    let prestations2 = []

    useEffect(()=>{
        getPrestataire(id)
        // setTimeout(()=>{
        // console.log(functions.getPrestations(id))
        // },1000)
        // prestations2 = functions.getPrestations(id)
        getPrestations(id)
        getCategories()
        // console.log(prestations2)
        // console.log(prestations)
    },[])

    const onDelete = (prestation) => {
        console.log(prestation)
        axiosClient.get('/delete/prestation/'+prestation.id)
        .then(()=>{
          alert('Prestation supprimé')
          getPrestations(id)
        })
        .catch(()=>{

        })
    }

    const getCategories = async () => {
      await axiosClient.get('/getCategories')
      .then(({data})=>{
        // console.log(data)
        setCat(data)
      })
      .catch((e)=>{
        console.log(e)
      })
    }

    const getCategorieNom = async (catId) => {
      await axiosClient.get('/getCategorieNom/'+catId)
      .then(({data})=>{
        // console.log(data)
        // setCatNom(data)
      })
      .catch((e)=>{
        console.log(e)
      })
    }

    const handleDelete = (prestation, idUser) => {
      functions.onDelete(prestation, idUser)
      // setPrestations(functions.getPrestations(idUser))

    }

    return (
    <div style={{ padding: '0 20px 20px' }}>
        {prestataire && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Les prestations de {prestataire.name} ({prestations.length})</h1>
            <Link to={'/admin/users/'+id+'/addPrestation'} className='btn-add'>Add new</Link>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Catégorie</th>
              <th>Description</th>
              <th>Image</th>
              <th>Create Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {prestations.map(p=>(
              <tr key={p.id}>
                <td>{p.nom}</td>
                {cat.map(c=>{
                  if (c.id == p.id_cat) {
                    catNom = c.name
                  }
                })}
                <td>{catNom}</td>
                <td>{parse(p.description)}</td>
                <td><img src={'/upload/'+p.photo} alt="" width={'150px'} height={'100px'} /></td>
                <td>{p.created_at}</td>
                <td>
                  <Link to={'/admin/prestation/'+p.id} className='btn-edit'>Edit</Link>
                  &nbsp;
                  {/* <button onClick={e=>handleDelete(p,id)} className='btn-delete'>Delete</button> */}
                  <button onClick={e=>onDelete(p)} className='btn-delete'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
