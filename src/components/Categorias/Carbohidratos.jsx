import React from 'react'
import { useAuth } from '../../context/authContext';
import { createTracking } from '../../firebase/firestore'
import { useNavigate } from 'react-router-dom';


export default function Carbohidratos() {
  const { user } = useAuth();

  const saveValue = () => {
    createTracking(user.id, 'prueba')
  }
  const navigate = useNavigate();

   // función cambio de ruta a board
  const handleChangeBoard = () => {
    return navigate('/board', { replace: true });
  };

  return (
    <div>
      <button onClick={saveValue}></button>
      <button onClick={saveValue}></button>
      <button onClick={saveValue}></button>
      <button onClick={saveValue}></button>
      <div>
      <button onClick={handleChangeBoard}>REGRESA</button>
      </div>
    </div>
  )
}
