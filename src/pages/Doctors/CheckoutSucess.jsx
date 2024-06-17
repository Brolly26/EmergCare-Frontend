import { Link } from 'react-router-dom'
import icon from '../../assets/sucess.svg'
const CheckoutSucess = () => {
    return (
        <div className='bs-gray-100 h-screen'>
            <div className='bg-white p-6 md:mx-auto'>
                <div className='text-center'>
                    <h3 className='md:text-2xl text-base flex justify-center gap-2 text-gray-900 font-semibold text-center'>
                        Pagamento Efeituado!
                 <img src={icon} className='w-10 h-8'/>
                    </h3>
                    <h2 className='text-gray-800 text-base font-semibold my-2 md:text-2xl' >
                    Entraremos em contato com você em breve, seja por telefone celular ou por e-mail.
                    </h2>
                    <p className='text-gray-600 my-2'>
                    Obrigado pela preferência! Ficamos felizes em tê-lo como nosso cliente.💖
                    </p>
                    <p> Tenha um ótimo dia!</p>
                    <div className='py-10 text-center'>
                        <Link to='/home'
                        className='px-12 bg-buttonBgColor text-white font-semibold py-3'>
                            Volte para a tela inicial
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckoutSucess;