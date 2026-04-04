import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Features/Auth/Login'
import Register from './Features/Auth/Register'
import Home from "./Pages/Home";


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes