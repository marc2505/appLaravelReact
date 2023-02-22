import React from 'react'
import { useState } from 'react';
import axiosClient from '../axios-client';


const getPrestations = async (id) => {
    let prestations = []
    await axiosClient.get(`/user/${id}/getPrestations`)
    .then(({data})=>{
        // console.log(data);
        prestations = data
        // apifunction(data) 
        // setPrestations(data);
        // return data
    })
    .finally(()=>{
        // console.log(prestations)
        return prestations
    })
}

const onDelete = (prestation, id) => {
    console.log(prestation)
    axiosClient.get('/delete/prestation/'+prestation.id)
    .then(()=>{
        alert('Prestation supprimé')
        // getPrestations(id)
    })
    .catch(()=>{

    })
}



const functions = {getPrestations,onDelete}
export default functions
