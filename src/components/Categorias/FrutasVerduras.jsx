import React from 'react'
import { useAuth } from '../../context/authContext';
import { createTracking } from '../../firebase/firestore'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import home from '../../assets/salir.png'
import manzana1 from '../../assets/manzana1.png'
import manzana2 from '../../assets/manzana2.png'
import manzana3 from '../../assets/manzana3.png'
import manzana4 from '../../assets/manzana4.png'

import '../Board/board.scss'


export default function FrutasVerduras() {
  const { user, logout } = useAuth();

  const saveValue = () => {
    createTracking(user.id, 'prueba')
  }

  const handleLogout = async() => {
    await logout();    
  }


  const navigate = useNavigate();

   // función cambio de ruta a board
  const handleChangeBoard = () => {
    return navigate('/board', { replace: true });
  };

  return (
    <div className='board-component-general'>
    <div className="board-component">
    <div className="home-logo">
      <div className="logo">
          <img src={logo} alt="" />
      </div>
      <div className="home">
        <button onClick={handleLogout} className="img">
           <img src={home} alt="" />
        </button>
      </div>
    </div>
      <p className='board-parraf'>Elije la categoría de los desechos</p>
      <p className='board-parraf'>que deseas registrar</p>
      <div className="board-buttons">
        <div className="board-one">
          <div className="container">
            <button onClick={saveValue} className='button-fruit'>
                <img src={manzana1} alt="" />
            </button>
            <p className='board-word'> 1 manzana </p>
            </div>
            <div className="container">
              <button onClick={saveValue} className='button-protein'>
                <img src={manzana2} alt="" />
              </button>
              <p className='board-word'> 2 manzanas </p>
            </div>
          </div>
          <div className="board-one">
            <div className="container">
              <button onClick={saveValue} className='buttton-carbohidrat'>
              <img src={manzana3} alt="" />
              </button>
              <p className='board-word'>3 manzanas</p>
            </div>
            <div className="container">
              <button onClick={saveValue} className='food-preparate'>
              <img src={manzana4} alt="" />
              </button>
              <p className='board-word'> 4 manzanas</p>
            </div>
          </div>
      </div>
    </div>
</div>
  )
}
