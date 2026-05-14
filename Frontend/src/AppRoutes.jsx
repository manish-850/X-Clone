import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Features/Auth/Login'
import Register from './Features/Auth/Register'
import Home from "./Pages/Home";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={
          <ProtectedRoute>
          <Home />
          </ProtectedRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes