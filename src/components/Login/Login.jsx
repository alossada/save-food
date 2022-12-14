import { useState } from 'react'
import { useAuth } from '../../context/authContext';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import '../Login/login.scss'

// vista login
export default function Login() {

  const {login} = useAuth();
  const [error, setError]= useState();
  const [user, setUser]= useState({
    email:'',
    password:'',
  });
  const navigate = useNavigate();

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]:value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try{
      await login(user.email, user.password)
      navigate('/board')
    }catch(error){
      console.log(error.code);
      if (error.code === 'auth/user-not-found'){
        setError('Usuario no registrado')
      }else{
        setError('Error al iniciar sesión');
      }
    }
  }

  // función cambio de ruta a Registro
  const handleChangeRegister = () => {
    return navigate('/register', { replace: true });
  };

  return (
    <div className="login">
    <div className='login-component'>
      <div className="login-images">
        <img src={logo} alt="" />
      </div>

      <p className='login-title'>INICIAR SESION</p>
      <form className='form' onSubmit={handleSubmit}>
        <p className='login-parraf'>Correo</p>
        <input className='form__email'
          type='email' 
          name='email' 
          placeholder='dianacl@gmail.com'
          onChange={handleChange}
          autoComplete="off"
        />

        <p className='login-parraf'>Contraseña</p>
        <input className='form__password'
          type='password' 
          name='password' 
          id='password'
          onChange={handleChange}
          placeholder='XXXXX'
          autoComplete='off'
        />    
        <div className="login-buttons">
          <button className='form__button--Send'>Iniciar sesión</button>
          <button className='form__button--login' onClick={handleChangeRegister}>Registrate</button>
        </div>    
        {Error && <p className='error'>{error}</p>}  
      </form>
    </div>
    </div>
  )
}