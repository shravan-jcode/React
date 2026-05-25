import React from 'react'
import Navbar from '../component/Navbar'

const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}

    </div>
  )
}

export default MainLayout