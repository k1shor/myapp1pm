import React from 'react'
import { isAuthenticated } from '../api/userAPI'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
    const {user} = isAuthenticated()
  return (
    <>
    {user && user.role === 1 ? <Outlet/> : <Navigate to='/signin'/>}
    </>
  )
}

export default AdminRoutes