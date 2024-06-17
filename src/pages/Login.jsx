import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import {AuthContext} from '../context/AuthContext.jsx'
import { BASE_URL } from '../config.js';
import HashLoader from 'react-spinners/HashLoader.js';

const Login = () => {
  const [formData, setFormaData] = useState({
    email: "",
    password:"",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const handleInputChange = e => {
    setFormaData({ ...formData, [e.target.name]: e.target.value});
  };

  const submitHandler = async event => {

    event.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
  
      if (!res.ok) {
        throw new Error('Erro ao fazer login. Por favor, verifique suas credenciais.');
      }
  
      console.log(formData)
      dispatch({
        type: 'LOGIN_SUCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result ? result.role : null
        },
      });
      console.log(result)

      setLoading(false);
      toast.success('Login realizado com sucesso.');
      navigate('/home');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }
  

  return <section className=' section-margins px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold  mb-10'>Olá <span className='text-primaryColor'>Bem-vindo(a)</span> de Volta 🎉</h3>
        <form className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className='mb-5'>
            <input type='email' placeholder='Digite seu e-mail' name='email' 
            value={formData.email}
            onChange={handleInputChange}
            className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
             text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required/>
          </div>
          <div className='mb-5'>
            <input type='password' placeholder='Senha' name='password' 
            value={formData.password}
            onChange={handleInputChange}
            className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
             text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer' required/>
          </div>

          <div className='mt-7'>
            <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
              {loading? <HashLoader size={25} color='#fff'/> :'Entrar'}
            </button>
          </div>
          <p className='mt-5 text-textColor text-center'>
          Não possui uma conta? <Link to='/register' className='text-primaryColor font-medium ml-1'>Registrar</Link>
          </p>
        </form>
      </div>
  </section>
}

export default Login
