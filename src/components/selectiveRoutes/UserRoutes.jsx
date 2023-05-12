import React from 'react'
import { isAuthenticated } from '../api/userAPI'
import { Navigate, Outlet } from 'react-router-dom'

const UserRoutes = () => {
    const {user} = isAuthenticated()
  return (
    <>
    {user && user.role === 0 ? <Outlet/> : <Navigate to='/signin'/>}
    </>
  )
}

export default UserRoutes