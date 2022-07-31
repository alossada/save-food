import { useState } from 'react'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import '../Register/Register.scss'
import logo from '../../assets/logo.png'


export default function Register() {

  const {signup} = useAuth();
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
      await signup(user.email, user.password)
      navigate('/board')
    }catch(error){
      console.log(error.code);
      if (error.code === 'auth/weak-password'){
        setError('La contraseña no tiene 6 caracteres')
      }else{
        setError('Error al registrar usuario');
      }
    }
  }

  // función cambio de ruta a 
  const handleChangeLogin = () => {
    return navigate('/login', { replace: true });
  };

  return (
    <div className='register-component'> 
      <div className="register-component-general">
      <div className="register-logo">
          <img src={logo} alt="" />
      </div>
      <p className='register-title'>REGISTRATE</p>
      <form className='form' onSubmit={handleSubmit}>
        <label className='register-parraf' htmlFor='email'>Correo</label>
        <input className='form__email'
          type='email' 
          name='email' 
          placeholder='dianacl@gmail.com'
          autoComplete='off'
          onChange={handleChange}
        />

        <label className='register-parraf' htmlFor='password'>Contraseña</label>
        <input className='form__password' 
          type='password' 
          name='password' 
          id='password'
          onChange={handleChange}
          placeholder='XXXXXX'
          autoComplete='off'
        />
        <p id='register-parraf-one'>Al hacer click en registrarme </p>
        <p id='register-parraf-two'>acepta el tratamiento de sus datos.</p>
        <div className="register-buttons">
          <button>Registrarme</button>
          <button onClick={handleChangeLogin}>¿Ya tienes cuenta?</button>        
        </div>
        {Error && <p className='error'>{error}</p>} 
      </form>
      </div>
    </div>
  )
}