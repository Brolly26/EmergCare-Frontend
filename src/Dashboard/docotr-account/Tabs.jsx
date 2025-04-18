import React, { useContext } from 'react'
import { BiMenu } from 'react-icons/bi'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Call from '../../components/ZegoCloud/call'
const Tabs = ({ tab, setTab }) => {
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () =>{
        dispatch({type: 'LOGOUT'});
        navigate('/');
    }
    const GoCall = () =>{
        navigate('/CALL')
    }
    return (
        <div>
            <span className='lg:hidden'>
                <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
            <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
                <button onClick={() => setTab('overview')} className={`${tab === 'overview'
                    ? 'bg-indigo-100 text-primaryColor'
                    : 'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`}>
                    Visão Geral
                </button>
                <button onClick={() => setTab('appointments')} className={`${tab === 'appointments'
                    ? 'bg-indigo-100 text-primaryColor'
                    : 'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`}>
                    Consultas
                </button>

                <button onClick={() => setTab('settings')} className={`${tab === 'settings'
                    ? 'bg-indigo-100 text-primaryColor'
                    : 'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`}>
                    Configurações
                </button>
                <button onClick={() => setTab('help')} className={`${tab === 'help'
                    ? 'bg-indigo-100 text-primaryColor'
                    : 'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`}>
                    Ajudas
                </button>
                <div className='mt-[100px] w-full '>
                    <button onClick={GoCall} className='w-full bg-primaryColor p-3 text-[16px] leading-7 font-semibold rounded-md text-white'>Acessa Plataforma</button>
                    <button onClick={handleLogout} className='w-full bg-[#181A1E] p-3  mt-4 text-[16px] leading-7 rounded-md text-white'>Sair</button>
                    <button className='w-full bg-red-600 p-3 mt-4 text-[16px] leading-7 rounded-md text-white'>Deletar Conta</button>


                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Tabs