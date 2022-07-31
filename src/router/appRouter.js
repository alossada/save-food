import {Routes, Route} from 'react-router-dom'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Board from '../components/Board/Board'
import AuthProvider from '../context/authContext'
import { ProtectedRoute } from './protectedRoute'
import Carbohidratos from '../components/Categorias/Carbohidratos'
import ComidaPreparada from '../components/Categorias/ComidaPreparada'
import FrutasVerduras from '../components/Categorias/FrutasVerduras'
import Proteinas from '../components/Categorias/Proteinas'

export default function AppRouter() {
  return (
    <AuthProvider>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route 
          path='/board' 
          element={
            <ProtectedRoute>
              <Board/>
            </ProtectedRoute>
        }/>
        <Route 
          path='/board/carbohydrate' 
          element={
            <ProtectedRoute>
              <Carbohidratos/>
            </ProtectedRoute>
        }/>
        <Route 
          path='/board/finishfood' 
          element={
            <ProtectedRoute>
              <ComidaPreparada/>
            </ProtectedRoute>
        }/>
        <Route 
          path='/board/fruitvegetable' 
          element={
            <ProtectedRoute>
              <FrutasVerduras/>
            </ProtectedRoute>
        }/>
        <Route 
          path='/board/protein' 
          element={
            <ProtectedRoute>
              <Proteinas/>
            </ProtectedRoute>
        }/>
      </Routes>
    </AuthProvider>
  )
}