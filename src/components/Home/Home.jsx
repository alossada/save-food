import React from 'react'
import logo from '../../assets/logo.png'
import '../Home/home.scss'
import icono from '../../assets/icono.png'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate();

  // función cambio de ruta a login
  const handleChangeLogin = () => {
    return navigate('/login', { replace: true });
  };

   // función cambio de ruta a Registro
  const handleChangeRegister = () => {
    return navigate('/register', { replace: true });
  };


  return (
    <div className='home-component'>
      <div className="home-component-general">
        <div className="home-logo">
          <img src={logo} alt="" />
        </div>
        <p id='home-title'>REDUCE</p>
        <p className='home-p'>Registra la cantidad de</p>
        <p className='home-p'>alimentos que desechas</p>
        <div className="home-images">
        <img src={icono} alt="" />
        </div>
        <div className="home-buttons">
          <button onClick={handleChangeRegister} className="button-one">Crea tu cuenta</button>
          <button onClick={handleChangeLogin} className="button-two">Incia sesión</button>
        </div>
      </div>
    </div>

  )
}
