import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './routes/ProtectedRoute'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route
        path='/'
        element={
          <Navigate to="/login"/>
        }
        />

        <Route path='/login' element={<Login />}/>

        <Route 
        path='dashboard'
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        />
      </Routes>
    </div>
  )
}

export default App