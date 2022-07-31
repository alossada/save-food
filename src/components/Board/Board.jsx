import { useAuth } from '../../context/authContext'
import Traking from './Traking';


export default function Board() { 

  const {user, logout, loading} =useAuth()//me trae la información del usuario (verifica el login)  
  console.log(user);

  const handleLogout = async() => {
    await logout();    
  }

  if(loading) return <h1>loading</h1>

  return (
    <div>
      <button onClick={handleLogout}>
        logout
      </button>
      <h1>        
        Aca estaran los registros de {user.email}
        <Traking/>
      </h1>
      
    </div>   
  )
}