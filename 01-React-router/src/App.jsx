import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

import DashboardLayout from './layouts/DashboardLayout'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        {/* Nested Routes */}

        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >

          <Route path="profile" element={<Profile />} />

          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>

    </div>
  )
}

export default App