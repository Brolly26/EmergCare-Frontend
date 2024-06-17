import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'
import { BASE_URL, token } from '../../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'
import profileIcon from '../../assets/user.png'
const Perfil = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender: '',
    bloodType: '',
  })

  const [formDataAddress, setFormDataAddress] = useState({
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
    numero: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({ name: user.name, email: user.email, photo: user.photo, gender: user.gender, bloodType: user.bloodType })
    setFormDataAddress({ cep: user.cep, rua: user.rua, bairro: user.bairro, cidade: user.cidade, estado: user.estado, numero: user.numero })
  }, [user])

  const handleAddressChange = (e) => {
    setFormDataAddress({ ...formDataAddress, [e.target.name]: e.target.value });
  };

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0]
    const data = await uploadImageToCloudinary(file)

    setSelectedFile(data.url)
    setFormData({ ...formData, photo: data.url })
  }


  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(formData);
    console.log(formDataAddress);

    try {
      const formDataCombined = { ...formData, endereco: formDataAddress };
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formDataCombined)
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate('/users/perfil/eu');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='mb-5'>
          <input type='text' placeholder='Nome Completo'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
             text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer'  />
        </div>
        <div className='mb-5'>
          <input type='email' placeholder='Digite seu email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            aria-readonly
            readOnly
            className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
             text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer'  />
        </div>
        <div className='mb-5'>
          <input type='password' placeholder='Senha'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
             text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer'  />
        </div>
        <div className='mb-5'>
          <input type='text' placeholder='Tipo sanguíneo'
            name='bloodType'
            value={formData.bloodType}
            onChange={handleInputChange}
            className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
             text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer'  />
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
            style={{ width: '12rem', marginRight: '20px' }}

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
              {/* OPÇÕES  DE REGISTRO DE PESSOAS  */}
              <option value=""> Selecione</option>
              <option value="male"> Masculino</option>
              <option value="female"> Feminino</option>
              <option value="other"> Outro</option>
            </select>
          </label>
        </div>
        {/* Selecionar fotos */}
        <div className='mb-5 flex items-center gap-3'>

          {formData.photo ? (  <figure className='w-[60px] h-[60px] rounded-full  border-2 border-solid border-primaryColor flex items-center justify-center'>
            <img src={formData.photo} alt='' className='w-full rounded-full' />
          </figure>): (
            <figure className='w-[60px] h-[60px] rounded-full  border-2 border-solid border-primaryColor flex items-center justify-center'>
            <img src={profileIcon} alt='' className='w-full rounded-full' />
          </figure>

          )}

          <div className='relative w-[160px] h-[50px]'>
            <input type='file' name='photo' id="customFile" className='absolute top-0 left-0 opacity-0 cursor-pointer' accept=".jpg, .png"
              onChange={handleFileInputChange}
            />
            <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem]
                 py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold
                  rounded-lg truncate cursor-pointer '>{selectedFile? selectedFile.name: 'Carregar Foto'}</label>
          </div>
        </div>



        <div className='mt-7'>
          <button disabled={loading && true} type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
            {loading ? <HashLoader size={35} color='#fffff' /> : 'Atualizar'}
          </button>
        </div>




      </form>
    </div>)
  1
}
export default Perfil