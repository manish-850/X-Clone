import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Features/Auth/Login'
import Register from './Features/Auth/Register'

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