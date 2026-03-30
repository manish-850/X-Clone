import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Features/Auth/login'
import Register from './Features/Auth/register'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes