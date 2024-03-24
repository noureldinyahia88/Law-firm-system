import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const LawyerRoutes = () => {
    // const hasToken = localStorage.getItem('profileType') === "ROLE_PROJECT_MANAGER"
    const hasToken = true


    return (
        hasToken ? <Outlet /> : <Navigate to="/" />
        
)
}

export default LawyerRoutes