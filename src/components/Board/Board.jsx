import { useAuth } from '../../context/authContext'
import '../Board/board.scss'
import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import fruit from '../../assets/one.png'
import protein from '../../assets/two.png'
import carbohidrato from '../../assets/three.png'
import comida from '../../assets/four.png'
import { useNavigate } from 'react-router-dom';



export default function Board() { 

  const {user, logout, loading} =useAuth()//me trae la información del usuario (verifica el login)  
  console.log(user);
  
  const navigate = useNavigate();

  const handleLogout = async() => {
    await logout();    
  }

  if(loading) return <h1>Loading</h1>

   // función cambio de ruta a Categoria1
  const handleChangeCategory1 = () => {
    return navigate('/board/fruitvegetable', { replace: true });
  };
   // función cambio de ruta a Categoria2
  const handleChangeCategory2 = () => {
    return navigate('/board/protein', { replace: true });
  };
  // función cambio de ruta a Categoria3
  const handleChangeCategory3 = () => {
    return navigate('/board/carbohydrate', { replace: true });
  };
  // función cambio de ruta a Categoria4
  const handleChangeCategory4 = () => {
    return navigate('/board/finishfood', { replace: true });
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
              <button onClick={handleChangeCategory1} className='button-fruit'>
                 <img src={fruit} alt="" />
              </button>
              <button onClick={handleChangeCategory2} className='button-protein'>
              <img src={protein} alt="" />
              </button>
            </div>
            <div className="board-one">
              <button onClick={handleChangeCategory3} className='buttton-carbohidrat'>
              <img src={carbohidrato} alt="" />
              </button>
              <button onClick={handleChangeCategory4} className='food-preparate'>
              <img src={comida} alt="" />
              </button>
            </div>
          </div>
        </div>
    </div>   
  )
}