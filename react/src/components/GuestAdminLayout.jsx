import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export default function GuestAdminLayout() {

    const {token, user} = useStateContext();
    const userLocal = JSON.parse(localStorage.getItem('USER'))
    // const userNew = JSON.parse(user)
    // if (token && user?.role == 'admin') {
    //     return <Navigate to='/admin/users' />
    // }

    // console.log(JSON.parse(JSON.stringify(user)))
    // console.log(user)
    // console.log(userLocal)

    // setTimeout(()=>{
    //     if (token && user?.role == 'admin') {
    //         return <Navigate to='/admin/users' />
    //     }
    // },1000)

    // setTimeout(()=>{
    // if (token && JSON.parse(user)?.role == 'admin') {
    //     return <Navigate to='/admin/users' />
    // }
    if (token && userLocal?.role == 'admin') {
        return <Navigate to='/admin/users' />
    }
    // },1100)
    

    // const redirect = () => {
    //     if (token && user?.role == 'admin') {
    //         return <Navigate to='/admin/users' />
    //     }
    // }

    // useEffect(()=>{
        // console.log('token')
        // console.log(token)
        // console.log('user')
        // console.log(user)

        // console.log('condition check :')
        // console.log(user.role == 'admin')
        // console.log(user.role)
        // console.log(typeof user.role)

        // redirect()
    // },[])

    return (
        <div>
            {/* {
                userLocal && Object.keys(userLocal).length > 0 && (
                    <div>
                    <div>User role = {userLocal.role}</div>
                    <div>User name = {userLocal.name}</div>
                    </div>
                )
            }
            {
                token && (
                    <div>Token = {token}</div>
                )
            } */}
            <Outlet />
        </div>
    )
}