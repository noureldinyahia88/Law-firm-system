import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const LawyerRoutes = () => {
    const hasToken = localStorage.getItem('profileType') === "ROLE_LAWYER"


    return (
        hasToken ? <Outlet /> : <Navigate to="/" />
        
)
}

export default LawyerRoutes