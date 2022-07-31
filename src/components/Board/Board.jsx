import { useAuth } from '../../context/authContext'
import '../Board/board.scss'
import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import fruit from '../../assets/one.png'
import protein from '../../assets/two.png'
import carbohidrato from '../../assets/three.png'
import comida from '../../assets/four.png'




export default function Board() { 

  const {user, logout, loading} =useAuth()//me trae la información del usuario (verifica el login)  
  console.log(user);

  const handleLogout = async() => {
    await logout();    
  }

  if(loading) return <h1>loading</h1>

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
              <button className='button-fruit'>
                 <img src={fruit} alt="" />
              </button>
              <p className='board-word'>Frutas y verduras</p>
              <button className='button-protein'>
              <img src={protein} alt="" />
              </button>
              <p className='board-word'>Proteina</p>
              <button className='buttton-carbohidrat'>
              <img src={carbohidrato} alt="" />
              </button>
              <p className='board-word'>Carbohidratos</p>
              <button className='food-preparate'>
              <img src={comida} alt="" />
              </button>
              <p className='board-word'>Comida preparada</p>
              </div>
          </div>
        </div>
    </div>   
  )
}