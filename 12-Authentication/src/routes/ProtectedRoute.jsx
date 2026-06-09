import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {isLoggedIn} =useContext(AuthContext)

    if(!isLoggedIn){
        <Navigate to="/login"/>

    }
    return children
}

export default ProtectedRoute