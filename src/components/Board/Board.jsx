import { useAuth } from '../../context/authContext'
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
    <div>
      <button onClick={handleLogout}>CERRAR SESIÓN</button>
      <p>Elije la categoría de los desechos que deseas registrar</p>
      <button onClick={handleChangeCategory1}>Frutas y verduras</button>
      <button onClick={handleChangeCategory2}>Proteinas</button>
      <button onClick={handleChangeCategory3}>Carbohidratos</button>
      <button onClick={handleChangeCategory4}>Comida preparada</button>
    </div>   
  )
}