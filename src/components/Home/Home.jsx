import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate();

  // función cambio de ruta a login
  const handleChangeLogin = () => {
    return navigate('/login', { replace: true });
  };

   // función cambio de ruta a login
  const handleChangeRegister = () => {
    return navigate('/register', { replace: true });
  };


  return (
    <div>
      <h2>REDUCE</h2>
      <p>Registra la cantidad de alimentos que desechas</p>
      <button onClick={handleChangeRegister}>Crea tu cuenta</button>
      <button onClick={handleChangeLogin}>Incia sesión</button>
    </div>
  )
}
