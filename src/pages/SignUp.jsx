import { useState } from 'react';
import signupImg from '../assets/signup.gif';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../utils/uploadCloudinary.js';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import InputMask from 'react-input-mask';

const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    password: '',
    photo: '',
    role: "",
    gender: '',
  });
  const [formDataAddress, setFormDataAddress] = useState({
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
    numero: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRoleChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, role: value });
  };



  const handleAddressChange = (e) => {
    setFormDataAddress({ ...formDataAddress, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(formData);
    console.log(formDataAddress);

    try {
      const formDataCombined = { ...formData, endereco: formDataAddress };
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataCombined)
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className='section-margins px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'><img src={signupImg} alt="Signup" /></figure>
          </div>
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 '>Criar uma <span className='text-primaryColor'>conta</span></h3>
            <form onSubmit={submitHandler}>
              <div className='mb-5'>
                <input type='text' placeholder='Nome Completo'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
                  text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer' required />
              </div>
              <div className='mb-5'>
                <InputMask
                  mask="999.999.999-99"
                  value={formData.cpf}
                  onChange={handleInputChange}
                >
                  {() => (
                    <input
                      type='text'
                      placeholder='Digite seu CPF'
                      name='cpf'
                      className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                      required
                    />
                  )}
                </InputMask>
              </div>
              <div className='mb-5'>
                <input type='email' placeholder='Digite seu email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
                  text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer' required />
              </div>
              <div className='mb-5'>
                <input type='password' placeholder='Senha'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
                  text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer' required />
              </div>
              <h1 className='font-bold text-[22px] text-headingColor mb-3 ' style={{ marginTop: '2.25rem' }}>Endereço</h1>
              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='CEP'
                  name='cep'
                  value={formDataAddress.cep}
                  onChange={handleAddressChange}
                  style={{ width: '12rem', marginRight: '20px', display: 'block' }}
                  className='pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
                  text-[16px] leading-8 text-headingColor placeholder:text-textColor rounded-md  '
                />
                <input
                  type='text'
                  placeholder='Estado'
                  name='estado'
                  value={formDataAddress.estado}
                  onChange={handleAddressChange}
                  style={{ width: '12rem', marginRight: '20px' }}
                  className='pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
                  text-[16px] leading-8 text-headingColor placeholder:text-textColor rounded-md  '
                />
                <input
                  type='text'
                  placeholder='Cidade'
                  name='cidade'
                  value={formDataAddress.cidade}
                  onChange={handleAddressChange}
                  className='pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
                  text-[16px] leading-8 text-headingColor placeholder:text-textColor rounded-md  '
                />
                <input
                  type='text'
                  placeholder='Rua'
                  name='rua'
                  value={formDataAddress.rua}
                  onChange={handleAddressChange}
                  style={{ width: '12rem', marginRight: '20px' }}
                  className='pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
  text-[16px] leading-8 text-headingColor placeholder:text-textColor rounded-md r'

                />
                <input
                  type='text'
                  placeholder='Bairro'
                  name='bairro'
                  value={formDataAddress.bairro}
                  onChange={handleAddressChange}
                  style={{ marginRight: '20px' }}
                  className='pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
             text-[16px] leading-8 text-headingColor placeholder:text-textColor rounded-md  '
                />
                <input
                  type='text'
                  placeholder='Número'
                  name='numero'
                  value={formDataAddress.numero}
                  onChange={handleAddressChange}
                  style={{ width: '5rem' }}
                  className='pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
  text-[16px] leading-8 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer'
                />
              </div>
              <div className='mb-5 flex items-center justify-between'>
                <label className='text-headingColor font-bold text-[16px] leading-7'>
                  Gênero
                  <select name='gender' className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                    onChange={handleInputChange}
                    value={formData.gender}
                  >
                    <option value="">Selecione</option>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                    <option value="other">Outro</option>
                  </select>
                </label>
                <label className='text-headingColor font-bold text-[16px] leading-7'>
                  Você é um:
                  <select
                    name="role"
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                    onChange={handleRoleChange}
                    value={formData.role}
                    required
                  >
                    <option value=''>Selecione</option>
                    <option value='patient'>Paciente</option>
                    <option value='doctor'>Médico</option>
                  </select>
                </label>
              </div>
              <div className='mb-5 flex items-center gap-3'>
                {selectedFile && (<figure className='w-[60px] h-[60px] rounded-full  border-2 border-solid border-primaryColor flex items-center justify-center'>
                  <img src={previewURL} alt='' className='w-full rounded-full' />
                </figure>)}
                <div className='relative w-[160px] h-[50px]'>
                  <input type='file' name='photo' id="customFile" className='absolute top-0 left-0 opacity-0 cursor-pointer' accept=".jpg, .png"
                    onChange={handleFileInputChange}
                  />
                  <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem]
        py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold
         rounded-lg truncate cursor-pointer '>Carregar Foto</label>
                </div>
              </div>
              <div className='mt-7'>
                <button disabled={loading && true} type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                  {loading ? <HashLoader size={35} color='#fffff' /> : 'Criar perfil'}
                </button>
              </div>
              <p className='mt-5 text-textColor text-center'>
                Já possui conta ? <Link to='/login' className='text-primaryColor font-medium ml-1'>Fazer login</Link>
              </p>
            </form>
          </div>
        </div>
      </div >
    </section >
  );
}

export default SignUp;
