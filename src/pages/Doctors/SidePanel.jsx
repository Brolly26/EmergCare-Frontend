import React, { useState } from 'react';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
    const [loading, setLoading] = useState(false);

    const bookingHandler = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error('Erro ao criar sessão de checkout');
            }


            if(data.session.url) {
                // Redirecionar para a página de pagamento
                window.location.href = data.session.url
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    const zapHandler = () => {
        const url = 'https://wa.me/+5531971047839';
        window.open(url, '_blank'); 
    } 

    return (
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md '>
            <div className='flex items-center justify-between'>
                <p className='text_para mt-0 font-semibold'>
                    Preço do Ticket
                </p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                    R$ {ticketPrice}
                </span>
            </div>
            <div className='mt-[30px]'>
                <p className='text_para mt-0 font-semibold text-headingColor'>Horários Disponíveis:</p>
                <ul className='mt-3'>
                    {timeSlots?.map((item, index) => (
                        <li className='flex items-center justify-between mb-2' key={index}>
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>{item.day.charAt(0).toUpperCase() + item.day.slice(1)}</p>
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>{item.startingTime} -{item.endingTime}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={bookingHandler} className='btn px-2 w-full rounded-md' disabled={loading}>
                {loading ? 'Processando...' : 'Marcar Consulta'}
            </button>
            <button onClick={zapHandler} className='btn_invert  px-2 w-full rounded-md' disabled={loading}>
              Chame no WhatsApp
            </button>

        </div>
    );
};

export default SidePanel;
